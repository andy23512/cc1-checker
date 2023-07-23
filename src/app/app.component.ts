import { Component, HostListener } from '@angular/core';
import { KEY_ID_LAYOUT } from './models/key-id-layout.const';
import { DirectionMap, FingerMap, Layout } from './models/layout.models';
import { KEY_LIST, STUB_KEY_MAP } from './models/stub-key-map.const';

function layoutMap<T, U>(layout: Layout<T>, func: (arg: T) => U): Layout<U> {
  const output: Layout<U> = {};
  Object.entries(layout).forEach(([hand, fingerMap]) => {
    const outputFingerMap: Partial<FingerMap<Partial<DirectionMap<U>>>> = {};
    Object.entries(fingerMap).forEach(([finger, directionMap]) => {
      const outputDirectionMap: Partial<DirectionMap<U>> = {};
      Object.entries(directionMap).forEach(([direction, value]) => {
        outputDirectionMap[direction as keyof DirectionMap<U>] = func(value);
      });
      outputFingerMap[finger as keyof FingerMap<U>] = outputDirectionMap;
    });
    output[hand as 'left' | 'right'] = outputFingerMap;
  });
  return output;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public positionCounts: Record<number, number> = {};
  public layout: Layout<number> = {};

  public downloadTestingLayout() {
    const fileContent = ['A1', 'A2', 'A3']
      .map((layer) =>
        Object.entries(STUB_KEY_MAP).map(([pos, actionId]) =>
          [layer, pos, actionId].join(',')
        )
      )
      .flat()
      .join('\n');
    const blob = new Blob([fileContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'cc1-checker-layout.csv');
    a.click();
  }

  @HostListener('window:keydown', ['$event'])
  public onKeyDown(event: KeyboardEvent) {
    const { code, shiftKey } = event;
    const position = Object.entries(KEY_LIST).find(
      ([k, v]) => v.code === code && v.shiftKey === shiftKey
    )?.[0] as number | undefined;
    if (typeof position === 'undefined') {
      return;
    }
    const count = this.positionCounts[position];
    this.positionCounts[position] = count ? count + 1 : 1;
    this.updateLayout();
  }

  public resetChart() {
    this.positionCounts = {};
    this.updateLayout();
  }

  private updateLayout() {
    this.layout = layoutMap(KEY_ID_LAYOUT, (keyId) => {
      return this.positionCounts[keyId] || 0;
    });
  }
}

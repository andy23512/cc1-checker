import { Component, HostListener } from '@angular/core';
import { KEY_ID_LAYOUT } from './models/key-id-layout.const';
import { DirectionMap, FingerMap, Layout } from './models/layout.models';
import { KEY_LIST } from './models/stub-key-map.const';
import { KeyMapService } from './services/key-map.service';

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
  constructor(private keyMapService: KeyMapService) {}
  public start() {
    this.keyMapService.setKeyMaps().subscribe(() => {});
  }

  public end() {
    this.keyMapService.close();
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

  private updateLayout() {
    this.layout = layoutMap(KEY_ID_LAYOUT, (keyId) => {
      return this.positionCounts[keyId] || 0;
    });
  }
}

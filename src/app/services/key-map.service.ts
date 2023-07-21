import { Injectable } from '@angular/core';
import { NgxSerial } from 'ngx-serial';
import { Observable, Subject, map, tap } from 'rxjs';
import { STUB_KEY_MAP } from '../models/stub-key-map.const';

@Injectable({
  providedIn: 'root',
})
export class KeyMapService {
  private serial?: NgxSerial;
  public setKeyMaps(): Observable<void> {
    const subject = new Subject<void>();
    (async () => {
      function dataHandler(data: string) {
        console.debug('receive data: ', data);
      }
      this.serial = new NgxSerial(dataHandler, {
        baudRate: 115200,
      });
      await this.serial.connect(() => {
        console.debug('connected');
      });
      for (let j = 0; j < 90; j++) {
        await this.serial.sendData(`VAR B4 A1 ${j} ${STUB_KEY_MAP[j]}\r\n`);
        subject.next();
        subject.complete();
      }
    })().catch((error) => {
      console.error('Error happened while setting key map: ', error);
    });
    return subject.asObservable();
  }

  public close() {
    this.serial?.close(() => {
      console.debug('closed');
    });
  }
}

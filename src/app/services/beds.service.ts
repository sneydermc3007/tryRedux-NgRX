import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Bed } from "./../interface/bed.interface"

@Injectable({
  providedIn: 'root'
})
export class BedsService {

  constructor() { }

  getCamas(): Observable<any> {
    return of([
      {
        id: 1,
        numCamas: 4,
        tiempoPromedio: 30,
        tiempoMinimo: 10,
        tiempoMaximo: 60,
        tiempoTotalAsper: 120,
        volPromedioCama: 20,
        valorRecorido: 80
      },
      {
        id: 2,
        numCamas: 2,
        tiempoPromedio: 20,
        tiempoMinimo: 5,
        tiempoMaximo: 40,
        tiempoTotalAsper: 40,
        volPromedioCama: 25,
        valorRecorido: 50
      },
      {
        id: 3,
        numCamas: 1,
        tiempoPromedio: 10,
        tiempoMinimo: 2,
        tiempoMaximo: 20,
        tiempoTotalAsper: 10,
        volPromedioCama: 15,
        valorRecorido: 30
      }
    ]);
  };
}

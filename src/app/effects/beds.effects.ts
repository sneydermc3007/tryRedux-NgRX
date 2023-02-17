import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { BedsService } from '../services/beds.service';
import * as BedsActions from '../store/beds.actions';

@Injectable()
export class BedsEffects {
  loadBeds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BedsActions.loadBeds),
      switchMap(() => this._beds.getCamas().pipe(
        map(beds => BedsActions.loadBedsSuccess({ beds })),
        catchError(error => of(BedsActions.loadBedsFailure({ error })))
      ))
    )
  );

  constructor( private actions$: Actions, private _beds: BedsService ) { }
}



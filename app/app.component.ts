import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadBeds } from './store/beds.actions';
import { BedsState } from './store/beds.reducer';
import { Bed } from './interface/bed.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'NgRx';

  constructor(private store: Store<BedsState>) {}

  beds$: Observable<Bed[]> = this.store.select((state) => {
    const test = state.beds as any;
    console.log('snake state: ', test.beds[0]);
    return Object.values(test.beds);
  });

  ngOnInit() {
    this.store.dispatch(loadBeds());
    // console.log('this.beds$');
  }
}

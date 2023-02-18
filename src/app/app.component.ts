import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadBeds } from "./store/beds.actions";
import { BedsState } from "./store/beds.reducer";
import { Bed } from "./interface/bed.interface"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NgRx';

  constructor(private store: Store<BedsState>) { }

  // beds$: Observable<Bed[]> = this.store.select(state => state.beds);
  beds$: Observable<Bed[]> = this.store.select(state => Object.values(state.beds));


  ngOnInit() {
    this.store.dispatch(loadBeds());
    // console.log(this.beds$);
  }


}

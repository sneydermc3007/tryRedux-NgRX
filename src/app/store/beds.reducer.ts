import { createReducer, on } from "@ngrx/store";
import * as BedsActions from "./beds.actions";
import { Bed } from "../interface/bed.interface";

export interface BedsState {
  beds: Bed[];
  loading: boolean;
  error: any;
}

export const initialState: BedsState = {
  beds: [],
  loading: false,
  error: null
};

export const bedsReducer = createReducer(
  initialState,
  on(BedsActions.loadBeds, (state) => ({ ...state, loading: true })),
  on(BedsActions.loadBedsSuccess, (state, { beds }) => ({
    ...state,
    beds,
    loading: false
  })),
  on(BedsActions.loadBedsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);

import { createAction, props } from "@ngrx/store";
import { Bed } from "./../interface/bed.interface";

export const loadBeds = createAction("[Beds] Load Beds");

export const loadBedsSuccess = createAction(
  "[Beds] Load Beds Success",
  props<{ beds: Bed[] }>()
);

export const loadBedsFailure = createAction(
  "[Beds] Load Beds Failure",
  props<{ error: any }>()
);

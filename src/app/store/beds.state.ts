import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Bed } from "../interface/bed.interface";

export interface BedsState extends EntityState<Bed> {}

export const bedsApapter: EntityAdapter<Bed> = createEntityAdapter<Bed>({
  selectId: (bed: Bed) => bed.id,
});

export const initialState: BedsState = bedsApapter.getInitialState({});

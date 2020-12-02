import { createAction, props } from '@ngrx/store';
import { Playlist } from '../models/playlist';

export const loadCategories = createAction(
  '[Categories] Load Categories'
);

export const loadCategoriesSuccess = createAction(
  '[Categories] Load Categories Success',
  props<{ categories: Playlist[] }>()
);

export const loadCategoriesFailure = createAction(
  '[Categories] Load Categories Failure',
  props<{ error: any }>()
);


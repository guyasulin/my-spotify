import { Action, createReducer, on } from '@ngrx/store';
import { Playlist } from '../models/playlist';
import * as PlaylistActions from "../store/playlist.actions";


export const playlistFeatureKey = 'playlist';

export interface PlaylistState {
  categories: Playlist[];
  error: any;
}

export const initialState: PlaylistState = {
  categories:[],
  error: undefined
};


export const playlistReducer = createReducer(
  initialState,
  on(PlaylistActions.loadCategoriesSuccess, (state, action) => {
    return {
      ...state,
      categories: action.categories
    }
  }),
  on(PlaylistActions.loadCategoriesFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
);

export function reducer(state: PlaylistState, action: Action) {
	return playlistReducer(state, action);
}
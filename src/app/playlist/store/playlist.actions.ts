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


export const toggleLikedSong = createAction(
  '[PlaylistTrackers] Toggle Liked Song',
  props<{ like: boolean }>()
);

export const getSongLiked = createAction(
  '[Favorite] Load Categories Failure',
);


export const addSongToLikesong = createAction(
  '[PlaylistTrackers] Add Song To Likesong',
  props<{ song: Playlist }>()
);

export const removeSongFavorite = createAction(
  "[Favorite] Remove Song",
  props<{ id: string }>()
);
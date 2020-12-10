import { Action, createReducer, on } from '@ngrx/store';
import { Playlist } from '../models/playlist';
import * as PlaylistActions from "../store/playlist.actions";


export const playlistFeatureKey = 'playlist';

export interface PlaylistState {
  categories: Playlist[];
  songsLike: Playlist[]
  showLikedSong: boolean;
  error: any;
}

export const initialState: PlaylistState = {
  categories:[],
  songsLike: [],
  showLikedSong: false,
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

  on(PlaylistActions.toggleLikedSong, (state, action) => {
    return {
      ...state,
      showLikedSong: action.like
    }
  }),

  on(PlaylistActions.getSongLiked, (state, action) => {
    return {
      ...state
    }
  }),

  on(PlaylistActions.addSongToLikesong, (state, action) => {
    const newSongState = [...state.songsLike];
    newSongState.push(action.song);
    return {
      ...state,
      songsLike: newSongState
    }
  }),

  on(PlaylistActions.removeSongFavorite, (state, action) => {
    const removeSong = state.songsLike.filter((song:any) => song.id !== action.id)
    return {
      ...state,
      songsLike: removeSong
    }
  }),
);

export function reducer(state: PlaylistState, action: Action) {
	return playlistReducer(state, action);
}
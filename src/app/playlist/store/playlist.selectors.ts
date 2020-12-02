import { createFeatureSelector, createSelector } from '@ngrx/store';
import { playlistFeatureKey, PlaylistState } from './playlist.reducer';

export const selectPlaylistState = createFeatureSelector<PlaylistState>(
    playlistFeatureKey
)

export const getCategories = createSelector(selectPlaylistState, state => state.categories);
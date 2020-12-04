import { createFeatureSelector, createSelector } from '@ngrx/store';
import { playlistFeatureKey, PlaylistState } from './playlist.reducer';

export const selectPlaylistState = createFeatureSelector<PlaylistState>(
    playlistFeatureKey
)

export const getCategories = createSelector(selectPlaylistState, state => state.categories);

export const getSongLike = createSelector(selectPlaylistState, state => state.songsLike);

export const getShowSongLiked = createSelector(selectPlaylistState, state => state.showLikedSong);

// export const getCurrentSongId = createSelector(
//     selectPlaylistState,
//     state => state.currentSongId
//   );
  
//   export const getCurrentSong = createSelector(
//     selectPlaylistState,
//     getCurrentSongId,
//     (state, currentSongId) => {
//         return currentSongId ? state.playlistTracks.find(p => p.id === currentSongId) : currentSongId;
//     }
//   )

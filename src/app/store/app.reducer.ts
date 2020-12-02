import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromPlaylist from '../playlist/store/playlist.reducer'

export interface AppState {
    playlist: fromPlaylist.PlaylistState;
}

export const appReducer: ActionReducerMap<AppState> = {
    playlist: fromPlaylist.playlistReducer,
  };
import { loadCategoriesFailure } from './playlist.actions';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Playlist } from '../models/playlist';
import { PlaylistService } from '../services/playlist.service';
import * as PlaylistActions from "../store/playlist.actions";



@Injectable()
export class PlaylistEffects {



  constructor(    private actions$: Actions, 
    public playlistService:PlaylistService,
    private router: Router) {}


    loadCategories$ = createEffect(() => 
      this.actions$.pipe(
        ofType(PlaylistActions.loadCategories),
        mergeMap(() => 
          this.playlistService.getCategories().pipe(
            map(({categories: {items}}) => {
              return PlaylistActions.loadCategoriesSuccess({categories:items})
            }),
            catchError((err) => of(PlaylistActions.loadCategoriesFailure(err)))
          )
        )
      )
    )
  }


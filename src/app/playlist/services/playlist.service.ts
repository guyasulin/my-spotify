import { Playlist } from './../models/playlist';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class PlaylistService {
	cabeceras: HttpHeaders = new HttpHeaders({
		Authorization:
			'Bearer BQDINqidbvYImDTqoIelrvN-6JHOnVVmXs5OUKIVKM6cO3b6WwI5ioIaGOlBi0ITM-wKJgWVWs6oTpvNlyUoH7xSyi8zoqiEmRjsn3TUFHkWaDBVi9orduuG-rJabPrEK2eGdNA2euFQcNgWq16_B_xKfJIJIes'
	});

	constructor(private http: HttpClient) {}

	getCategories(): Observable<any> {
		return this.http.get('https://api.spotify.com/v1/browse/categories', { headers: this.cabeceras });
	}

	getPlaylistByCategoryId(category_id: any): Observable<Playlist> {
		return this.http
			.get(`https://api.spotify.com/v1/browse/categories/${category_id}/playlists`, { headers: this.cabeceras })
			.pipe(map(({ playlists: { items } }: any) => items));
	}

	getPlaylistByTracksId(playlist_id: any): Observable<any> {
		return this.http
			.get(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks?market=SE`, { headers: this.cabeceras })
			.pipe();
	}

	getSearchContent(name: string): Observable<any> {
		if (name === "") {
			return EMPTY
		} else {
			return this.http
			.get(`https://api.spotify.com/v1/search?q=${name}&type=artist,album,playlist`, { headers: this.cabeceras })
			.pipe(
		
			);
		}
	
	}
}

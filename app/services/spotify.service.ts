import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Artist } from '../../../Artist';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;

    constructor(private _http:HttpClient) { }

    searchMusic(str:string, type='artist'){
      this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';

      return this._http.get(this.searchUrl)
    }

    getArtist(id:string){
      this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;

      return this._http.get<any>(this.artistUrl)
    }

    getAlbums(artistId:string){
      this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';

      return this._http.get<any>(this.albumsUrl)
    }


}

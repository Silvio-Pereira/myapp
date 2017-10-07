import { observable } from 'rxjs/symbol/observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  private myApiKey = "64cdf9c3fe55ff764ab6dfb03ea91c77&language=pt-BR";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){
    return this.http.get( this.baseApiPath + "/movie/popular?api_key=" + this.myApiKey);
    //return this.http.get( "http://globalnet.eti.br/myplaces/conectar.php?acao=destino" );

  }
}

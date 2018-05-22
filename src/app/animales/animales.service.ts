import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Animales } from './animales';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AnimalesService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = 'http://localhost:8000/animales';

  constructor(private http: Http) { }

  getInventarios(): Observable<Animales[]> {
    // tslint:disable-next-line:prefer-const
    let url = `${this.url}`;
    return this.http.get(url)
      .map(r => r.json())
      .catch(this.handlerError);
  }

  getInventario(id: number): Observable<Animales[]> {
    // tslint:disable-next-line:prefer-const
    let url = `${this.url}/${id}`;
    return this.http.get(url)
      .first()
      .map(r => r.json())
      .catch(this.handlerError);
  }

  addInventario(animales: Animales) {
    // tslint:disable-next-line:prefer-const
    let url = `${this.url}`;
    // tslint:disable-next-line:prefer-const
    let iJson = JSON.stringify(animales);
    return this.http.post(url, iJson, { headers: this.headers })
      .map(r => r.json())
      .catch(this.handlerError);
  }

  putInventario(animales: Animales) {
    let url = `${this.url}`;
    let iJson = JSON.stringify(animales);
    return this.http.put(url, iJson, { headers: this.headers })
      .map(r => r.json())
      .catch(this.handlerError);
  }

  delInventario(id: number) {
    let url = `${this.url}/${id}`;
    return this.http.delete(url)
      .map(r => r.json())
      .catch(this.handlerError);
  }

  private handlerError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      // tslint:disable-next-line:prefer-const
      let body = error.json() || '';
      // tslint:disable-next-line:prefer-const
      let err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}

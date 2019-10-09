import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/// <reference path="../typings/tsd.d.ts" />
import { Usuario } from './../Models/usuario';
'use strict';
declare var require: any
const fetch = require('node-fetch');

@Injectable()
export class UsuarioService {
  usuariotUrl = "http://localhost:8090/v1/service/usuario";
  constructor(private http: Http) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get(`${this.usuariotUrl}`).pipe(map((res: any) => {
      return this.extractData(res)
    }));
  }

  createUsuario(body): Observable<Usuario> {
    return this.http.post(`${this.usuariotUrl}`, body).pipe(map((res: any) => {
      return body;
    }));
  }

  getUsuarioById(id: string): Observable<Usuario> {
    return this.http.get(`${this.usuariotUrl}/${id}`).pipe(map(data => data.json()));
  }

  updateUsuario(body): Observable<Usuario> {
    return this.http.put(`${this.usuariotUrl}`, body).pipe(map((res: any) => {
      return body;
    }));
  }

  removeUsuario(id) {
    return this.http.delete(`${this.usuariotUrl}/${id}`);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}

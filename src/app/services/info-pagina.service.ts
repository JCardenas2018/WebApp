import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina-interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) {

    // console.log('servicio infoPagina');

    // Leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (res: InfoPagina) => {
        this.cargada = true;
        this.info = res;
        console.log(res);
      });

  }
}

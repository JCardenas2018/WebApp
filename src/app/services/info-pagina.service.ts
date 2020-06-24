import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina-interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    // Leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (res: InfoPagina) => {
      this.cargada = true;
      this.info = res;
    });
  }

  private cargarEquipo(){
    this.http.get('https://angulardb-5a351.firebaseio.com/equipo.json')
    .subscribe( (res: any) => {

      this.equipo = res;
      console.log(res);
    });
  }

}

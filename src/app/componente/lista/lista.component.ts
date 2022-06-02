import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  //* Variables Auxiliares
  pages: number = 1;
  datosApi!: any;

  public contador: any;


  constructor(public apiServe: ApiService) { }

  ngOnInit(): void {
    this.ObtenerDatosApi();
  }

  ObtenerDatosApi() {
    this.apiServe.obtenerDatos()
      .subscribe(res =>
        this.datosApi = res,
        error => console.log(error))
  }


}

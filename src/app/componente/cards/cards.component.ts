import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  pages: number = 1;
  datosApi!:any;

  constructor(public apiServe:ApiService) { }

  ngOnInit(): void {
    this.ObtenerDatosApi();
  }

  ObtenerDatosApi(){
    this.apiServe.obtenerDatos()
    .subscribe(res=>
      this.datosApi=res,
      error=>console.log(error))
  }
  

}

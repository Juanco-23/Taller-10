import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL_API=`https://data.cdc.gov/resource/9mfq-cb36.json`;

  constructor(private http:HttpClient) { }

  obtenerDatos(){
    return this.http.get<any>(this.URL_API)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}

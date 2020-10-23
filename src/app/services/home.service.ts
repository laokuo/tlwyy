import {Inject, Injectable} from '@angular/core';
import {API_CONFIG, ServicesModule} from "./services.module";
import {Observable, pipe} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Banner} from "./data-types/common.types";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(private http: HttpClient,@Inject(API_CONFIG) private uri:string) { }

  getBanners():Observable<any>{
    return this.http.get(this.uri+'banner')
      .pipe(map((res:{banners:Banner[]})=>res.banners));
  }
}

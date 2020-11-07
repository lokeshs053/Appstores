import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddappService {

  constructor(private _http:HttpClient) { }

  addStore(json)
  {
   return this._http.post("https://x-workz-seo-based-webapp.appspot.com//v2/save",json);
  }
}

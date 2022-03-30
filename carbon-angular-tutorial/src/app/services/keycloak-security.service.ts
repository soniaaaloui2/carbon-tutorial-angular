import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';
declare var Keycloak:any; 
@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc!: KeycloakInstance;
  constructor() { }
  async init(){
     console.log("security init ");
    this.kc=new Keycloak({
      url:"http://localhost:8080/auth",
      realm:"Carbon-realm" , 
      clientId:"AngularProductsApp"
    });
    await this.kc.init({
      onLoad:"login-required"

    })
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// carbon-components-angular default imports
import { UIShellModule, IconModule, IconService } from 'carbon-components-angular';
 import {NotificationModule} from '@carbon/icons-angular';
 import{UserAvatarModule} from '@carbon/icons-angular';
 import{AppSwitcherModule} from '@carbon/icons-angular';
import { KeycloakSecurityService } from './services/keycloak-security.service';


export function kcFactory(kcSecurity :KeycloakSecurityService){
  return ()=>kcSecurity.init();
}
  @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule,
    NotificationModule,
    UserAvatarModule,
    AppSwitcherModule
  ],
  providers:[{provide : APP_INITIALIZER , 
    deps : [KeycloakSecurityService] , useFactory: kcFactory, multi:true}],
  bootstrap: [AppComponent]
})

export class AppModule {}

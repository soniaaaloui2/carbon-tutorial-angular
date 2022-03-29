import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
// import {NotificationModule} from '@carbon/icons/lib/notification/20.js';
// import{UserAvatarModule} from '@carbon/icons-angular/user--avatar';
// import{AppSwitcherModule} from '@carbon/icons-angular/app-switcher';
import { IconService } from 'carbon-components-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.bx--header') headerClass = true;

 

  ngOnInit(): void {
  }

}

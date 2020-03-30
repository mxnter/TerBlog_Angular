import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import {AboutComponent} from './abuot/about.component';
import {RoutesRoutingModule} from '../routes-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IndexComponent} from './index/index.component';
const COMPONENTS = [
  AboutComponent,
  IndexComponent
];
const COMPONENTS_NOROUNT = [
];


@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  imports: [
    CommonModule,
    FrontRoutingModule,
    NgZorroAntdModule,
  ]
})
export class FrontModule { }

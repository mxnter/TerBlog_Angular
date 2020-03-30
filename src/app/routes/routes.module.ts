import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FrontModule } from './front/front.module';
import { RearModule } from './rear/rear.module';


@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule,
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FrontModule,
    RearModule
  ],
  declarations: [],

})
export class RoutesModule { }

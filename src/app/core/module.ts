import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { HeaderComponent } from './header/header.component';
import {NavComponent} from './nav/nav.component';
import {ButtonComponent} from './button/button.component';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const Components = [HeaderComponent, NavComponent, ButtonComponent, PageNotFoundComponent];
const Exports = [HeaderComponent, NavComponent, PageNotFoundComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: Components,
  exports: Exports
})
export class CoreModule { }

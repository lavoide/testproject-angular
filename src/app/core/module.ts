import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {NavComponent} from './nav/nav.component';
import {ButtonComponent} from './button/button.component';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MoneyTooltipComponent} from './tooltip-directive/tooltip.component';
import {TooltipDirective} from './tooltip-directive/tooltip.directive';


const Components = [HeaderComponent, NavComponent, ButtonComponent, PageNotFoundComponent, TooltipDirective, MoneyTooltipComponent];
const Exports = [HeaderComponent, NavComponent, PageNotFoundComponent, TooltipDirective ];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: Components,
  exports: Exports,
  entryComponents: [MoneyTooltipComponent]
})
export class CoreModule { }

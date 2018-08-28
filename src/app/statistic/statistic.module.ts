import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './general-statistic/statistic.component';
import { StatisticService } from '../shared/services/statistic.service';
import {ParamsPipe} from '../shared/pipes/params.pipe';
import {SharedModule} from '../shared/module';
import {StatisticRouterModule} from './statistic-routing.module';

const Components = [StatisticComponent];
const Exports = [StatisticComponent];
const Providers = [StatisticService];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StatisticRouterModule
  ],
  providers: Providers,
  declarations: Components,
  exports: Exports
})
export class StatisticModule { }

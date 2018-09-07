import {Component, OnInit} from '@angular/core';
import { StatisticService } from '../../shared/services/statistic.service';
import {IMonthShort} from '../../shared/models/statistic.model';
import {Observable} from 'rxjs';
import * as fromStatistics from '../reducers';
import {select, Store} from '@ngrx/store';
import {GetStatisticShort} from '../actions/statistic-action';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  public statistic: Observable <IMonthShort[]>;
  // public statistic: IMonthShort[];
  constructor(private store: Store<fromStatistics.State>) {
    this.statistic = store.pipe(select(fromStatistics.getStatisticsSelector));
  }
  ngOnInit() {
    this.store.dispatch(new GetStatisticShort());
  }
  // public countTotal(): number  {
  //   return this.statistic.reduce((c, p) => {
  //     c = p.save ? c + p.amount : c - p.amount;
  //     return c;
  //   }, 0);
  // }
}

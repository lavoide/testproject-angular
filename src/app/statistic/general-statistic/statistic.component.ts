import { Component } from '@angular/core';
import { StatisticService } from '../../shared/services/statistic.service';
import {IMonthShort} from '../../shared/models/statistic.model';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent {
  // public statistic: Observable <IMonthShort[]>;
  public statistic: IMonthShort[];
  constructor(private statisticService: StatisticService) {
    this.statisticService.getStatisticShort()
      .subscribe((res) => {
      this.statistic = res;
    });

  }

  // public countTotal(): number  {
  //   return this.statistic.reduce((c, p) => {
  //     c = p.save ? c + p.amount : c - p.amount;
  //     return c;
  //   }, 0);
  // }
}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {GetStatisticShort, GetStatisticShortSuccess, StatisticActionTypes} from '../actions/statistic-action';
import {catchError, exhaustMap, map} from 'rxjs/internal/operators';
import {IMonthShort} from '../../shared/models/statistic.model';
import {StatisticService} from '../../shared/services/statistic.service';
import {Action} from 'ngx-bootstrap/mini-ngrx';

@Injectable()
export class StatisticsEffects {
  @Effect()
  fetchStatistics$: Observable<Action> = this.actions$.pipe(
    ofType<GetStatisticShort>(StatisticActionTypes.GetStatisticShort),
    exhaustMap
    (action => this.statisticService.getStatisticShort().pipe(
      map((statistics: IMonthShort[]) => new GetStatisticShortSuccess(statistics) ),
      catchError((e) => { throw new Error(e); })
    ))
  );
  constructor(
    private actions$: Actions,
    private statisticService: StatisticService
  ) {}
}

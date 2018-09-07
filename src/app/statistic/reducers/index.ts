import * as fromRoot from '../../reducers';
import * as fromStatistic from './statistic-reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface StatisticState {
  statisticData: fromStatistic.State
}
export interface State extends fromRoot.State {
  statisticStore: StatisticState;
}
export const reducers: ActionReducerMap<StatisticState> = {
  statisticData: fromStatistic.reducer
}

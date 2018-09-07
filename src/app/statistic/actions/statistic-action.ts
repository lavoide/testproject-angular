import {IMonthShort} from '../../shared/models/statistic.model';
import {Action} from '@ngrx/store';

export enum StatisticActionTypes {
  GetStatisticShort = '[Statistic] Get Statistic requested',
  GetStatisticShortSuccess = '[TravelTypes] Get Statistic suceeded',
}

export class GetStatisticShort implements Action {
  readonly type = StatisticActionTypes.GetStatisticShort;
  constructor() {}
}

export class GetStatisticShortSuccess implements Action {
  readonly type = StatisticActionTypes.GetStatisticShortSuccess;
  constructor(public payload: IMonthShort[]) {}
}
export type StatisticActionsUnion =
  | GetStatisticShort
  | GetStatisticShortSuccess;

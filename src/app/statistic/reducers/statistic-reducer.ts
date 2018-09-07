import {IMonthShort} from "../../shared/models/statistic.model";
import {StatisticActionsUnion, StatisticActionTypes} from "../actions/statistic-action";

export interface State {
  statistics: IMonthShort[];
}


  const initialState: State = {
    statistics: []
  };

  export function reducer(
    state = initialState,
    action: StatisticActionsUnion): State {
    switch (action.type) {
      case StatisticActionTypes.GetStatisticShortSuccess: {
        return {
          ...state,
          statistics: action.payload
        };
      }
      default: {
        return state;
      }
    }
  }

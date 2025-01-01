// store/index.ts

import { createStore } from 'redux';

// 定义初始状态的类型
export interface AppState {
  currentActivate: number;
}

// 定义初始状态
const initialState: AppState = {
  currentActivate: 0,
};

// 定义 action 类型
const SET_CURRENT_ACTIVATE = 'SET_CURRENT_ACTIVATE';

interface SetCurrentActivateAction {
  type: typeof SET_CURRENT_ACTIVATE;
  payload: number;
}

// 定义 reducer 函数
type AppAction = SetCurrentActivateAction;

const appReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case SET_CURRENT_ACTIVATE:
      return {
        ...state,
        currentActivate: action.payload,
      };
    default:
      return state;
  }
};

// 创建 Redux store
const store = createStore(appReducer);

export { store, SET_CURRENT_ACTIVATE };

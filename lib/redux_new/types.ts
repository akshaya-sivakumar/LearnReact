export interface IState {
    data: any;
    loading: boolean;
    error: string | null;
  }
  
  export interface IAction {
    type: string;
    payload?: any;
  }
  
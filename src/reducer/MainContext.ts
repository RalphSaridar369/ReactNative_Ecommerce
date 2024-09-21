import { createContext, Dispatch } from "react";

interface UserData {
  usertype: number;
  email: string;
}

interface State {
  LoggedIn: boolean;
  Usertoken: string | null;
  UserData: UserData | null;
  cart: any[];
}

export const initialState: State = {
  LoggedIn: false,
  Usertoken: null,
  UserData: null,
  cart: [],
};

type MainContextType = {
  state: typeof initialState;
  dispatch: Dispatch<any>;
};

export const MainContext = createContext<MainContextType>({
  state: initialState,
  dispatch: () => undefined,
});

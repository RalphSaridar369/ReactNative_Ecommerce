import { createContext, Dispatch } from "react";
import { Appearance } from "react-native";

interface UserData {
  usertype: number;
  email: string;
}

interface State {
  LoggedIn: boolean;
  Usertoken: string | null;
  UserData: UserData | null;
  cart: any[];
  theme: "light" | "dark";
}

export const initialState: State = {
  LoggedIn: false,
  Usertoken: null,
  UserData: null,
  cart: [],
  theme: Appearance.getColorScheme() === "dark" ? "dark" : "light",
};

type MainContextType = {
  state: typeof initialState;
  dispatch: Dispatch<any>;
};

export const MainContext = createContext<MainContextType>({
  state: initialState,
  dispatch: () => undefined,
});

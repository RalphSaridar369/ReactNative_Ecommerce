import { useContext } from "react";
import { MainContext } from "../reducer/MainContext"; // Adjust the import path

const useTheme = () => {
  const { state } = useContext(MainContext);
  return state.theme; // Return the current theme
};

export default useTheme;

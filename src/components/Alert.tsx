import { Alert } from "react-native";

const AlertComponent = (title, text, buttons?: any) =>
  Alert.alert(title, text, buttons ? buttons : null);

export default AlertComponent;

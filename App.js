import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigation';
import { Provider } from "react-redux";
import store from "./store";
import { UserContext } from "./UserContext";
import { ModalPortal } from "react-native-modals";
export default function App() {
  return (
    <>
    <Provider store={store}>
    <UserContext>
      <StackNavigator />
      <ModalPortal />
    </UserContext>
  </Provider>
  </>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

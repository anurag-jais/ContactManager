import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./screens/Home";
import AddNewContactScreen from "./screens/AddNewContactScreen";
import EditContactScreen from "./screens/editContactScreen";
import ViewContactScreen from "./screens/viewContactScreen";
import { NativeModulesProxy } from "@unimodules/core";
const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Add: { screen: AddNewContactScreen },
    View: { screen: ViewContactScreen },
    Edit: { screen: EditContactScreen }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#b83227"
      },
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
// module.exports = App;

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

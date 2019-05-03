import React from 'react';
import {Container} from 'native-base';
import {DrawerNavigator} from 'react-navigation';
import Home from './components/Home'
import { AppLoading,Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import MainScreenNavigator from "./components/index";


const AppDrawerNavigator= new DrawerNavigator({
  HomeScreen: {screen: MainScreenNavigator},
})

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }


  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
        <AppDrawerNavigator/>
    );
  }
}

import React, { Component } from "react";
import Home from "./Home";
import {StyleSheet,Dimensions} from 'react-native'
import Search from "./Search";
import Chat from "./Chat";
import Recipes from "./Recipes";
import Profile from "./Profile";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab,Content } from "native-base";
export default (MainScreenNavigator = TabNavigator(
  {
    Home: { screen: Home },
    Search: { screen: Search },
    Chat: { screen: Chat },
    Recipes: { screen: Recipes },
    Profile: { screen: Profile }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer style={styles.tabfoot}>
        <FooterTab>
          <Button 
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Home")}>
            <Icon name='home'/>
            <Text>Home</Text>
          </Button>
          <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Search")}>
            <Icon name='search'/>
            <Text>Search</Text>
          </Button>
          <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Chat")}>
            <Icon name='chatbubbles'/>
            <Text>Chat</Text>
          </Button>
          <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Recipes")}>
            <Icon name='list-box'/>
            <Text>Recipes</Text>
          </Button>
          <Button
              vertical
              active={props.navigationState.index === 4}
              onPress={() => props.navigation.navigate("Profile")}>
            <Icon name='person'/>
            <Text>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
      );
    }
  }
));
const screen = Math.round(Dimensions.get('window').height);
const styles= StyleSheet.create({
  tabfoot:{
    bottom: 0,
    width: '100%',
  },
})

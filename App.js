import React from 'react';
import { Text, View, StyleSheet, Platform, Image } from 'react-native';
import { Button } from 'native-base';
import Landing from './src/Landing';
import Search from './src/Search';


export default class App extends React.Component {

  state = {
    currentScreen: "search"
  }

  switchScreen = (currentScreen) => {
    this.setState({currentScreen});
  }
  renderScreen = () => {
    if(this.state.currentScreen === "landing"){
      return(
        <Landing />
      )
    }
    else if(this.state.currentScreen === "search"){
        return(
         <Search />
        )
    }
  }
  render() {
    return (
      <View style={styles.container}>
      {this.renderScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 24 : 0,
  }
});

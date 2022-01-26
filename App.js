import React from 'react';
import {StyleSheet, Text, View, Button,Image} from 'react-native';

export default class App extends React.Component {
  state = {
    count: 0
  }
  incrementValue = () => {
    this.setState({count: this.state.count + 1})
  }
  decrementValue = () => {
    this.setState({count: this.state.count - 1})
  }
  render() {
    return (
      
      <View style={styles.container}>
        
        <Text style={styles.welcome}>venky's counter app</Text>
        <Text style={styles.count}>{this.state.count}</Text>
        <Button 
        style={styles.increasebutton}
        title="Increase(+)"
        onPress={this.incrementValue}
        />
        <View style={{padding: 15}} />
        <Button 
        style={styles.decreasebutton}
        title="Decrease(-)"
        onPress={this.decrementValue}
        />
        <Image style={styles.lion} source={require('./images/img.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
  },
  welcome:{
    fontSize:35,
    padding:30,
    fontWeight: 'bold',
  },

  count : {
    fontSize: 35,
    marginBottom:30
  },

  lion:{
    height:400,
    width:350
  }
});
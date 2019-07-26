import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, View } from 'react-native';

var counter = 0;

let easterEggs = (counter) => {
  var text = '';
  switch(counter){
    case 7:
      text = 'This is an easter egg, please continue tapping';
      Alert.alert('E45t3r 3gg', text);
      break;
    
    case 30:
      text = "Don't you have to work?";
      Alert.alert('1337', text);
      break;
    
    case 100:
      text = 'Yout think there are more easter eggs?';
      Alert.alert('4all',text);
      break;
    
    case 200:
      text = 'This is not a clicking game but you have clicked the button 200 times now';
      Alert.alert("It's clicking time!",text);
      break;
    
    case 1000:
      text = 'You probably should be doing other things, go party!';
      Alert.alert("C'mon Barbie, let's go party! (Uh ooh Uh ooh)",text);
      break;
    
    // eu gostaria de fazer as cores mudarem a cada 50ms a partir de count = 1000
    // mas não quero fazer com sleep, pois isso travará o programa
    
    default:
      break;
  }
}

let newColor = () => {

  time = Date.now().toString().slice(-1);
  
  colors = {
    // cores de
    // https://coolors.co/e83f6f-e53d00-ffbf00-32936f-2274a5
    // https://coolors.co/e53d00-f08700-ffbf00-32936f-2274a5
    // https://coolors.co/ff0000-ff6e00-ffc700-46f900-00a5ff

    0: '#2274a5',
    1: '#32936f',
    2: '#ffbf00',
    3: '#e53d00',
    4: '#e83f6f',
    5: '#f08700',
    6: '#aa12aa',
    7: '#00a5ff',
    8: '#46f900',
    9: '#ff6eaa',
  }
  
    counter += 1;
    easterEggs(counter);

  return (colors[time]);
}

export default class timeBackground extends Component {
  // como alterar uma propriedade de forma dinâmica - tentei de diversas formas e acabei pesquisando como
  // alterar atributos de estilo, das formas que tentei tive erros dizendo que era apenas readonly
  // https://stackoverflow.com/questions/41988305/react-native-dynamically-change-view-s-background-color/41989004
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this);

    this.state = {
      backgroundColor: newColor()
    };
  }

  onClick() {
    this.setState({ backgroundColor: newColor() });
  }
  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <Text style={[styles.text4all]}>Go 4all</Text>
        <Button
          title="Change Color"
          onPress={this.onClick}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: newColor(),
    fontSize: 25,
  },
  text4all: {
    fontSize: 30,
    padding: 10,
    color: '#ffffff',
    fontWeight: "bold",
  }
});
AppRegistry.registerComponent('AwesomeProject', () => timeBackground);

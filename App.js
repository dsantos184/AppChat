/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';

import MsgItem from './src/component/MsgItem';

export default class App extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      chat:[
        {key:1, nome:'Diogo', mensagem:"oi meu amor !", my:true },
        {key:2, nome:'Diogo', mensagem:"Tudo bem ?", my:true },
        {key:3, nome:'Marilha', mensagem:"Tudo e vc ?", my:false },
        {key:4, nome:'Diogo', mensagem:"Tudo ótimo", my:true },
        {key:5, nome:'Marilha', mensagem:"Que bom meu amor !", my:false },
        {key:6, nome:'Marilha', mensagem:"Estou morrendo de saudades. Eu te amo demais e adoro ficar coladinho com vc", my:false },
        {key:7, nome:'Diogo', mensagem:"Eu também minha vida", my:true },
        {key:8, nome:'Diogo', mensagem:"Não vejo a hora de te ver", my:true },
        {key:9, nome:'Marilha', mensagem:"Eu também não", my:false },
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("./src/assets/img/bg.jpg")} style={styles.containerChat}>
          <FlatList data={this.state.chat} renderItem={({item})=><MsgItem dados={item} />} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.select({
      ios: 20,
      android: 0
    })
  },

  containerChat:
  {
    flex:1,
  },

});

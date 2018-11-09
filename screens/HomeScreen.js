import React from 'react';
import Button from "../components/Button.js";
import Button2 from "../components/Button2.js";

import { Alert } from "react-native";


import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,

  H1,
  H2,
  H3
} from "native-base";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';


export default class HomeScreen extends React.Component {
  state = {
    Username: "",
    Password: "",
    loginResult: "1",
    Incorrect: ""
  };

  handleChange = Username => event => {
    this.setState({
      [Username]: event
    });
  };

  performLogin = () => {
    const { Username, Password } = this.state;
    this.setState({ loginResult: "2" });
    //if (Username === "Adrian") {
    this.setState({ loginResult: "3" });
    if (Username === "Adrian" && Password === "1998") {
      Alert.alert(
        "Ingresado Correcto",
        Username + Password,
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      //IncorrectPass
      //}
      // if (Username === "adrian" && Password === "1998")
      // alert("usuario logueado");
    } else {
      Alert.alert("Error", "UsuarioIncorrecto", [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]);
    }
  };
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Username"
                onChangeText={text => this.setState({ Username: text })}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Password"
                onChangeText={text => this.setState({ Password: text })}
              />
            </Item>
          </Form>
          <Button
            onPress={() => {
              this.performLogin();
            }}
          />
          <H3> No Tiene Cuenta? </H3>
          <Button2 />

          <Text>
            {this.state.loginResult}
          </Text>
        </Content>
      </Container>
    );
  }


}




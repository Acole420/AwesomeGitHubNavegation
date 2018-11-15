
import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import Expo from "expo";

export default class Button3 extends Component {
    state = { loading: true }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
    }
    render() {
        const { onPress } = this.props;
        if (this.state.loading) {
            return <Expo.AppLoading />;
        } else {
            return (

                <Button bordered dark>
                    <Text>Entrar a Chat</Text>
                </Button>
            );
        }
    }
}
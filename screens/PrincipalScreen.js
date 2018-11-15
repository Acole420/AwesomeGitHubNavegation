import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Right, Icon, Item, Input } from 'native-base'

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import Button3 from "../components/Button3.js";

export default class PrincipalScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (

            <List>
                <ListItem itemHeader first>
                    <Text>Pantalla</Text>
                </ListItem>
                <ListItem >
                    <Text>General</Text>
                </ListItem>
                <ListItem >
                    <Text>Blackjack</Text>
                </ListItem>
                <ListItem >
                    <Text>Baccarat</Text>
                </ListItem>
                <ListItem last>
                    <Text>Ruleta</Text>
                </ListItem>
                <Item regular>
                    <Input placeholder='Usuario' />
                </Item>
                <Button3 />
            </List>


        );
    }



}




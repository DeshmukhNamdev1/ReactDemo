import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';



export default class HomeScreen extends React.Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate("Details")}>
                    <Text>Home Screen</Text></TouchableHighlight>
            </View>
        );
    }
}

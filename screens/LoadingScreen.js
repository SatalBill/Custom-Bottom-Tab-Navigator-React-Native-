import React from 'react'
import { StyleSheet, View, Text, AsyncStorage, ActivityIndicator, ImageBackground, Image } from 'react-native';
import * as Font from 'expo-font';

export default class LoadingScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: '',
            isAlreadyLogged: 'No',
            fontLoaded: false,
        }
    }

    loadFont = async () => {
        await Font.loadAsync({
            googleSans: require('../assets/fonts/GoogleSans-Bold.ttf'),
        });
        this.setState({ fontLoaded: true })
    }

    componentDidMount() {
        //this._retrieveData();
        this.loadFont();
        setTimeout(() => this.props.navigation.navigate('Home'), 2000);
    }
    // _retrieveData = async () => {
    //     try {
    //         const userdata = await AsyncStorage.getItem('fullName');
    //         const isAlreadyLoggedIn = await AsyncStorage.getItem('isAlreadyLoggedIn');
    //         this.setState({ user: userdata, isAlreadyLogged: isAlreadyLoggedIn });
    //     } catch (error) {
    //         // Error retrieving data
    //     }
    // };

    render() {

        if (this.state.fontLoaded) {
            return (
                <View style={styles.container}>
                    <Text style={styles.font}>Loading</Text>
                    <ActivityIndicator size="large" color='#fc3a66'></ActivityIndicator>
                </View>
            )
        }
        else {
            return null
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    font: {
        fontFamily: 'googleSans'
    }
})

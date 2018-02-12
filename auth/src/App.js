import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyC9lkj-NxsVS9N3kkKi-oEzK30YnVY6iUM',
            authDomain: 'auth-4337f.firebaseapp.com',
            databaseURL: 'https://auth-4337f.firebaseio.com',
            projectId: 'auth-4337f',
            storageBucket: 'auth-4337f.appspot.com',
            messagingSenderId: '905960666711'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        // return (
        // <View style={styles.containerStyle}>
        //     <Button>Log Out</Button>
        // </View>
        // );
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={styles.containerStyle}>
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                    </View>);
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.containerStyle}>
                        <Spinner size="large" />
                    </View>);
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export default App;
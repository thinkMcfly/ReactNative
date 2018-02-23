import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {

    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyB1W_AftKcYsmFoIB6yIDBTB-Qu-BhxQsc',
            authDomain: 'manager-41909.firebaseapp.com',
            databaseURL: 'https://manager-41909.firebaseio.com',
            projectId: 'manager-41909',
            storageBucket: '',
            messagingSenderId: '810693144354'
          };

          firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                        </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
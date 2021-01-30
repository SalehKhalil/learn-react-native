import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import styles from './styles';

export default function Register() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='default' translucent backgroundColor='#7159c1' />
            <Text style={styles.title}>Register</Text>
        </View>
    );
}
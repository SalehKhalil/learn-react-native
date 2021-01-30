import React from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';

import Input from '../../../Components/Input'

import CatPng from '../../../Assets/Images/Auth/cat.png';
import styles from './styles';

export default function Login() {
    return (
        <View style={styles.container}>
            <Image
                source={CatPng}
                resizeMode='stretch'
                style={styles.catImg}
            />
            <Input
                placeholder="E-mail"
                icon="mail"
                style={styles.emailInput}
                placeholderTextColor="#666360"
            />
            <Input
                placeholder="Senha"
                icon="lock"
                style={styles.passwordInput}
                placeholderTextColor="#666360"
            />
            <TouchableHighlight
                style={styles.enterButton}
            >
                <Text style={styles.enterButtonText}>Entrar</Text>
            </TouchableHighlight>
        </View>
    );
}
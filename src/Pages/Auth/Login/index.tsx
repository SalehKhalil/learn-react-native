import React from 'react';
import {
    View,
    TouchableHighlight,
    Text,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';

import Input from '../../../Components/Input'

import CatPng from '../../../Assets/Images/Auth/cat.png';
import styles from './styles';

export default function Login() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{ flex: 1 }}
            enabled
        >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flex: 1 }}
            >
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
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
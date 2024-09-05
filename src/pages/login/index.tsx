import React, { useState } from "react";

import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";

import { style } from "./styles";
import Logo from '../../assets/logo.png'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { themas } from "../../global/themas";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function getLogin() {

        try {

            if (!email || !password) {
                return alert('Atenção! Informe os campos obrigatórios!')
            }
            console.log('Logado com sucesso')

        } catch (error) {
            console.log(error)

        }
    }


    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO E-MAIL</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons
                        name='email'
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <MaterialIcons
                        name='remove-red-eye'
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={getLogin}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>

            </View>
            <Text style={style.textBottom}>Não tem conta? <Text style={{ color: themas.colors.primary }}>Crie agora!</Text> </Text>
        </View>
    )
}


import {Input, Text, View, Box} from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import {Styles} from '../styles/signInStyle';

export const SignIn: React.FC<{navigation: object}> = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={Styles.container}>

            <Text style={Styles.text}>Username</Text>
            <Input
                value={username}
                style={Styles.input}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={Styles.text}>Password</Text>
            <Input
                value={password}
                style={Styles.input}
                onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity
                style={{alignItems: 'center', alignContent: 'center', width: '100%', opacity: 0.5}}
                onPress={() => {navigation.navigate('FeaturesNavigator');}}
            >
                <Box 
                    style={{height: 60, width: 250 ,borderColor: 'yellow', borderWidth: 4, marginTop:'10%', marginBottom:'10%'}}
                >
                    <Text
                            style={{marginBottom: '5%', marginTop: '5%', textAlign: 'center', color: 'yellow'}}
                    >
                        {'Sign In'}
                    </Text>
                </Box>
            </TouchableOpacity>
        </View>
    );
};

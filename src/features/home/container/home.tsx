import {View, Text, ScrollView} from '@gluestack-ui/themed';
import React from 'react';
import ListHome from '../components/listHome';
import { useStarWarsApi } from '../customHooks/callService';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export const Home: React.FC = () => {
    const navigation = useNavigation<NavigationProp<any>>();

    const navigateToDetails = (props : {props: object}) => {
        navigation.navigate('Details', props);
    };

    return (
        <ScrollView
            style={{backgroundColor: 'black'}}
        >
            <ListHome 
                data={useStarWarsApi()}
                navigateFunc={navigateToDetails}
            />
        </ScrollView> 
    );
};

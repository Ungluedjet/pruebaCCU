import React, { useState, useEffect } from 'react';
import {TouchableOpacity} from "react-native";
import { View, Text, Image, ScrollView, FlatList, Box, Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText } from '@gluestack-ui/themed'
import { getImage } from '../../utils/utils';
import Styles from '../styles/detailsStyle';
import { listServices } from '../services/service';

const Details = ({route, navigation}) => {
    const [movieItem,] = useState(route.params);
    const [listData, setListData] = useState([]);
    const [selectedList, setSelectedList] = useState([]);
    const [showActionsheet, setShowActionsheet] = useState(false)
    const [textButton, setTextButton] = useState('Loading...')
    const handleClose = () => setShowActionsheet(!showActionsheet)

    enum listTypes {
        characters = 'characters',
        planets = 'planets',
        starships = 'starships',
        vehicles = 'vehicles',
        species = 'species'
    };

    const listTypesArray = Object.values(listTypes) as string[];

    const getList = async () => {
        setListData(await listServices(movieItem));
    }

    useEffect(() => {
        navigation.setOptions({ title: movieItem.title });
        getList();
    }, []);

    useEffect(() => {
        if (listData.length !== 0){
            if (selectedList.length !== 0){
                console.log('lele');
                return setTextButton('Select List');
            }
            console.log('lolo');
            return setTextButton('Open Lists');
        }
        console.log('lala');
        console.log('jombeeeee: ' + listData.length);
        return setTextButton('Loading...');
    }, [selectedList, listData]);

    const setList = (item) => {
        if (listData.length < 1) {
            return;
        }
        console.log(item);
        setSelectedList(listData[item]);
        handleClose()
    };

    return (
        <ScrollView
            style={{backgroundColor: 'black'}}
        >
            <Image
                style={{ ...Styles.image}}
                source={{ uri: getImage(movieItem.episode_id)}}
                alt='Star Wars'
            />
            <Text
                style={Styles.textTitle}
            >
                {movieItem.title}
            </Text>

            <View style={Styles.rowContainer}>
                <Text
                    style={Styles.textNumber}
                >
                    Date: {movieItem.release_date}
                </Text>
                <Text
                    style={Styles.textNumber}
                >
                    Director: {movieItem.director}
                </Text>
            </View>

            <Text
                style={Styles.textNumber}
            >
                Movie Number: {movieItem.episode_id}
            </Text>

            <Text
                style={Styles.textDescription}
            >
                {movieItem.opening_crawl}
            </Text>
            <TouchableOpacity
                onPress={listData.length !== 0 ? () => setShowActionsheet(!showActionsheet) : null}>
                <Box 
                    style={{borderColor: 'yellow', borderWidth: 4, marginTop:'10%', marginBottom:'10%'}}
                >
                    <Text
                            style={{marginBottom: '5%', marginTop: '5%', textAlign: 'center', color: 'yellow'}}
                    >
                        {textButton}
                    </Text>
                </Box>
            </TouchableOpacity>
            {
            selectedList.length > 0 &&
                <FlatList
                style={{ alignSelf: 'center', marginBottom: '10%' }}
                data={selectedList}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DetailsItem', item)}
                    >
                        <Box style={{height: 50, width: 200, borderColor: 'yellow', borderWidth: 4, marginTop:'10%', marginBottom:'10%'}}>
                            <Text
                                style={{alignSelf: 'center', marginBottom: '5%', marginTop: '5%', color: 'yellow'}}
                            >
                                {item.name}
                            </Text>
                        </Box>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            /> 
            }
            <Actionsheet isOpen={showActionsheet} onClose={() => handleClose()} zIndex={999}>
                <ActionsheetBackdrop />
                    <ActionsheetContent h="$72" zIndex={999}>
                <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                </ActionsheetDragIndicatorWrapper>
                {
                    listTypesArray.map((item: object) => {
                        return (
                            <ActionsheetItem onPress={() => setList(item)}>
                                <ActionsheetItemText>{item}</ActionsheetItemText>
                            </ActionsheetItem>
                        );
                    
                    })
                }
                </ActionsheetContent>
            </Actionsheet>
        </ScrollView>
    );
};

export default Details;
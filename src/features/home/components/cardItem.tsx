import React, { useEffect } from "react";
import {View, Text, Box, Image} from "@gluestack-ui/themed";
import {TouchableOpacity} from "react-native";
import Styles from "../styles/cardItemStyle";
import { getImage } from "../../utils/utils";

const CardItem = ({item, navigateFunc} : {item: object, navigateFunc: Function}) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <TouchableOpacity 
                style={{alignItems: 'center', alignContent: 'center', width: '100%'}}
                onPress={() => navigateFunc(item)}
            >
                <View>
                    <Box 
                        style={{ height: 200, width: 300 ,borderColor: 'yellow', borderWidth: 4, marginTop:'10%', marginBottom:'10%', alignContent: 'center', alignItems: 'center'}}
                    >
                        <Image
                            style={{ marginTop: '10%'}}
                            size="xl"
                            source={{ uri: getImage(item.episode_id)}}
                            alt="Star Wars" 
                        />
                        <Text 
                            style={{color: 'yellow'}}
                        >{item.title}</Text>
                    </Box>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CardItem;
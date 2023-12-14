import React from "react";
import { View, Text } from "@gluestack-ui/themed";
import CardItem from "./cardItem";

const ListHome = ({ data, navigateFunc }: { data: object[], navigateFunc: Function }) => {

    const renderItems = ({ item, navigateFunc }: { item: object, navigateFunc: Function }) => {
        return (
            <CardItem
                item={item}
                navigateFunc={navigateFunc}
            />
        );
    };

    const renderLoading = () => {
        console.log('entra en el loading conchetumare');
        return  (
            <View>
                <Text
                    style={{color: 'yellow', alignSelf: 'center', alignContent: 'center', alignItems: 'center', marginTop: '50%'}}
                >
                    Loading...
                </Text>
            </View>
        );
    };


    console.log(data.length === 0);
    return (
        <View>
            {data.length === 0 ? renderLoading() : data?.map((item) => renderItems({ item, navigateFunc }))}
        </View>
    );
};

export default ListHome;

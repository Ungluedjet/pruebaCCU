import React from 'react';
import { View, Text, ScrollView } from '@gluestack-ui/themed';

export const DetailsItem = ({route}) => {
    const [item,] = React.useState(route.params);
    return (
        <ScrollView
            style={{backgroundColor: 'black'}}
        >
            {
                Object.entries(item).map(([key, value]) => {
                    return (
                        <View
                            key={key}
                            style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}
                        >
                            <Text style={{color: 'yellow'}}>{key}</Text>
                            <Text style={{color: 'yellow'}}>{value}</Text>
                        </View>
                    );
                })
            }
        </ScrollView>
    );

};

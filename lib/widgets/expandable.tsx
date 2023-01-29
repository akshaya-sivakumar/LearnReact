import React, { useEffect, useState } from 'react';
// Import required components
import {
    Animated, View
} from 'react-native';
import ButtonWidget from '../../components/button_example';


export type ExpandableProps = {
    item: any;

};

const ExpandableComponent: React.FC<ExpandableProps> = ({
    item,

}) => {
    //Custom Component for the Expandable List
    const [height] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(height, {
            toValue: item["isExpanded"] ? 200 : 0,
            duration: 150,
            useNativeDriver: false
        }).start();
    }, [item["isExpanded"], height]);

    return (
        <View>
            {/*Header of the Expandable List Item*/}

            <Animated.View
                style={{ height, backgroundColor: "orange" }}

            >


            </Animated.View>
            {/*Content under the header of the Expandable List Item*/}


            <ButtonWidget btnLabel={"Buy"} bgColor={"blue"} textColor={"white"} onpress={() => { }}></ButtonWidget>


        </View >
    );
};

export default ExpandableComponent

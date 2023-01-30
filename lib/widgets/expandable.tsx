import { useEffect, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

/* const ExpandableComponent = ({ item, onClickFunction }) => */

export type ExpandableComponentProps = {
    item: any;
    expandedList: any;
    onClickFunction?: () => void;
};

const ExpandableComponent: React.FC<ExpandableComponentProps> = ({
    item, expandedList,
    onClickFunction,
}) => {
    //Custom Component for the Expandable List
    const [layoutHeight, setLayoutHeight] = useState(0);

    useEffect(() => {
        if (expandedList.includes(item.excToken)) {
            setLayoutHeight(80);
        } else {
            setLayoutHeight(0);
        }
    }, [expandedList]);

    return (

        <View key={item.excToken} style={{



        }}>
            {/*Header of the Expandable List Item*/}
            < TouchableOpacity
                activeOpacity={0.8}
                onPress={onClickFunction} style={{ backgroundColor: item.expanded ? 'rgba(52, 52, 52, 0.2)' : 'rgba(52, 52, 52, 0.0)', }}
            ><View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 5 }}>
                    <View style={{ flexDirection: "column", width: Dimensions.get("window").width * 0.55 }}>
                        <Text style={{ fontWeight: "bold", color: "black" }}> {item.baseSym}</Text>
                        <Text style={{ paddingTop: 5 }}>{item.companyName} </Text>
                    </View>
                    <View style={{ flexDirection: "column", }}>

                        <Text style={{ color: "#ff1493" }}>BSE </Text>
                    </View>
                    <View style={{ flexDirection: "column", width: Dimensions.get("window").width * 0.14, alignSelf: 'flex-start', justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start" }}>
                        <Text style={{ color: "red", textAlign: "right" }}> {item.excToken}</Text>
                        <View style={{ flexDirection: "row", paddingTop: 5, justifyContent: "space-evenly", width: Dimensions.get("window").width * 0.2, }}>
                            <Text style={{ color: "orange" }}>{item.haircut} </Text>
                            <Text style={{ color: "green", }}>{item.haircut} </Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
            <View
                style={{
                    borderBottomColor: 'rgba(52, 52, 52, 0.3)',
                    borderBottomWidth: item.expanded ? 0 : 0.7,
                    marginLeft: item.expanded ? 0 : 5,
                    marginRight: item.expanded ? 0 : 5, marginTop: item.expanded ? 0 : 8
                }}
            />
            <View
                style={{
                    height: layoutHeight ?? 50,
                    overflow: 'hidden',
                }}>
                {/*Content under the header of the Expandable List Item*/}

                <TouchableOpacity style={{ paddingVertical: 5, backgroundColor: 'rgba(52, 52, 52, 0.2)', }}

                    onPress={
                        () => { }
                    }>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", paddingVertical: 10 }}>
                        <TouchableOpacity onPress={() => { }} style={{ backgroundColor: "green", borderRadius: 10, alignItems: 'center', width: 100, paddingVertical: 5, }}>
                            <Text style={{ color: "white", fontSize: 18, fontWeight: 'bold' }}>BUYY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }} style={{ backgroundColor: "red", borderRadius: 10, alignItems: 'center', width: 100, paddingVertical: 5, }}>
                            <Text style={{ color: "white", fontSize: 18, fontWeight: 'bold' }}>SELL</Text>
                        </TouchableOpacity>
                    </View>
                    <View />
                </TouchableOpacity>

            </View>
        </View>


    );
};

export default ExpandableComponent

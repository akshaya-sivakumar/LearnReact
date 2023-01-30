import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";



export type ExpandableComponentProps = {
    item: any;
    expandedList: any;
    onClickFunction?: () => void;
};

const ExpandableComponent: React.FC<ExpandableComponentProps> = ({
    item, expandedList,
    onClickFunction,
}) => {
    const [layoutHeight, setLayoutHeight] = useState(0);
    useEffect(() => {
        if (expandedList.includes(item.excToken)) {
            setLayoutHeight(80);
        } else {
            setLayoutHeight(0);
        }
    }, [expandedList]);
    return (

        <View key={item.excToken} >

            < TouchableOpacity
                activeOpacity={0.8}
                onPress={onClickFunction} style={{ backgroundColor: item.expanded ? 'rgba(52, 52, 52, 0.2)' : 'rgba(52, 52, 52, 0.0)', }}
            ><View style={styles.expandedHeaderview}>
                    <View style={styles.headeFirstcolumn}>
                        <Text style={styles.basesymstyle}> {item.baseSym}</Text>
                        <Text style={styles.cmpyNamestyle}>{item.companyName} </Text>
                    </View>
                    <View style={styles.headerSecondColumn}>

                        <Text style={styles.headerSecondColumntext}>BSE </Text>
                    </View>
                    <View style={styles.headerthirdColumn}>
                        <Text style={styles.exctokenStyle}> {item.excToken}</Text>
                        <View style={styles.haircutrow}>
                            <Text style={styles.haircutStyle}>{item.haircut} </Text>
                            <Text style={styles.haircutStyle2}>{item.haircut} </Text>
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

                <TouchableOpacity style={styles.expandedTouch}>
                    <View style={styles.expandedView}>
                        <TouchableOpacity onPress={() => { }} style={styles.buyButton}>
                            <Text style={styles.buyButtontext}>BUYY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }} style={styles.sellButton}>
                            <Text style={styles.sellButtontext}>SELL</Text>
                        </TouchableOpacity>
                    </View>
                    <View />
                </TouchableOpacity>

            </View>
        </View>


    );
};

export default ExpandableComponent

const styles = StyleSheet.create({

    expandedHeaderview: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 5 },
    headeFirstcolumn: { flexDirection: "column", width: Dimensions.get("window").width * 0.55 },
    basesymstyle: { fontWeight: "bold", color: "black" },
    cmpyNamestyle: { paddingTop: 5 },
    headerSecondColumn: { flexDirection: "column", },
    headerSecondColumntext: { color: "#ff1493" },
    headerthirdColumn: { flexDirection: "column", width: Dimensions.get("window").width * 0.14, alignSelf: 'flex-start', justifyContent: "flex-start", alignItems: "flex-start", alignContent: "flex-start" },
    exctokenStyle: { color: "red", textAlign: "right" },
    haircutrow: { flexDirection: "row", paddingTop: 5, justifyContent: "space-evenly", width: Dimensions.get("window").width * 0.2, },
    haircutStyle: { color: "orange" },

    haircutStyle2: { color: "green", },

    expandedTouch: { paddingVertical: 5, backgroundColor: 'rgba(52, 52, 52, 0.2)', },
    expandedView: { flexDirection: "row", justifyContent: "space-evenly", paddingVertical: 10 },
    buyButton: { backgroundColor: "green", borderRadius: 10, alignItems: 'center', width: 100, paddingVertical: 5, },
    buyButtontext: { color: "white", fontSize: 18, fontWeight: 'bold' },
    sellButton: { backgroundColor: "red", borderRadius: 10, alignItems: 'center', width: 100, paddingVertical: 5, },
    sellButtontext: { color: "white", fontSize: 18, fontWeight: 'bold' }

})

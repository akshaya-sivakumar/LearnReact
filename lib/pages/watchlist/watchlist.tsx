import * as React from 'react';
import { useState } from 'react';
import { Dimensions, LayoutAnimation, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import ExpandableComponent from '../../widgets/expandable';
import { fetchData } from '../actions';
import { store } from '../store';
import { IState } from './types';


export interface Data {
    baseSym: string;
    companyName: string;
    dispSym: string;
    excToken: string;
    haircut: string;
    isin: string;
    mCap: string;
    sector: string;
    sym: {
        asset: string;
        exc: string;
        expiry: string;
        id: string;
        instrument: string;
        lotSize: string;
        multiplier: string;
        optionType: string;
        streamSym: string;
        strike: string;
        tickSize: string;
    };
    tt_eligibility: boolean;
}


function Watchlist() {
    const { data, loading, error } = useSelector((state: IState) => state);

    const [expanded, setExpanded] = useState<string[]>([]);


    function handleToggleComplete(id: any) {
        if (expanded.includes(id)) {
            setExpanded(expanded.filter((item) => item !== id));

        } else {
            setExpanded([...expanded, id]);
        }
    }
    React.useEffect(() => {
        store.dispatch(fetchData())





    }, []);

    /* const handleSubmit = async () => {
        try {
            const response = await fetch('https://run.mocky.io/v3/ec1a0f0c-3739-4914-b5c0-2140e5165fe5', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "request": { "appID": "f79f65f1b98e116f40633dbb46fd5e21", "data": { "category": "TOPGAINER", "sessionID": "guest", "usrID": "guest" }, "formFactor": "M", "futures": "0", "response_format": "json" } })
            });

            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            setWatchlist(data.response.data.symbols as Data[])
        } catch (error: any) {
            Alert.prompt('Error', error.message);
        }
    }; */
    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (

        < SafeAreaView style={{ flex: 1 }
        } >
            <View style={styles.watchlistHeaderContainer}>
                <Text style={styles.watchlistHeader}>
                    Msil Watchlist
                </Text>
            </View>
            <View>

                {data?.map((item, index) => (
                    <View key={index} style={{ paddingHorizontal: 20 }}>
                        <ExpandableComponent
                            expandedList={expanded}
                            onClickFunction={() => {
                                console.warn(index)
                                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                                handleToggleComplete(item.excToken)
                            }}
                            item={item}
                        />
                    </View>
                )
                )}

            </View>
        </SafeAreaView >
    )
}

export default Watchlist

const styles = StyleSheet.create({
    watchlistHeaderContainer: { alignContent: "center", alignItems: "center", paddingVertical: 20 },
    watchlistHeader: { fontWeight: "bold", fontSize: 18, color: "black" },
    container: {
        height: Dimensions.get('window').height * 0.9,
        justifyContent: 'center', alignItems: 'center'
    },

})
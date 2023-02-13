import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { initializeWebSocket } from '../actions';
import { socketstore } from '../store';
import { SocketState } from './socket_types';






function SocketScreen() {

    const { data, loading, error, success } = useSelector((state: SocketState) => state);



    React.useEffect(() => {
        socketstore.dispatch(initializeWebSocket())





    }, []);

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.watchlistHeader}>Loading...</Text>
            </View>
        );
    }










    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.watchlistHeader}>loading</Text>
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

                <Text style={{ fontSize: 20 }}>
                    {data !== null ? JSON.stringify(data.data[0].p) : "no data"}
                </Text>

            </View>
        </SafeAreaView >
    )
}

export default SocketScreen

const styles = StyleSheet.create({
    watchlistHeaderContainer: { alignContent: "center", alignItems: "center", paddingVertical: 20 },
    watchlistHeader: { fontWeight: "bold", fontSize: 18, color: "black" },
    container: {
        height: Dimensions.get('window').height * 0.9,
        justifyContent: 'center', alignItems: 'center'
    },

})
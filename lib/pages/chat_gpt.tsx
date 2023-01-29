import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Data {
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

const data: Data[] = [
    {
        baseSym: 'KNRCON',
        companyName: 'KNR CONSTRU LTD.',
        dispSym: 'KNRCON',
        excToken: '532942',
        haircut: '70',
        isin: 'INE634I01029',
        mCap: '',
        sector: 'EQ',
        sym: {
            asset: 'Equity',
            exc: 'BSE',
            expiry: '',
            id: 'STK_KNRCON_A_BSE',
            instrument: 'STK',
            lotSize: '0',
            multiplier: '1',
            optionType: '',
            streamSym: '532942_BSE',
            strike: '0.00',
            tickSize: '0.05',
        },
        tt_eligibility: false,
    },
    {
        baseSym: 'SINTEXPLAST',
        companyName: 'SINTEX PLASTICS TECH LTD',
        dispSym: 'SINTEXPLAST',
        excToken: '540653',
        haircut: '0',
        isin: 'INE501W01021',
        mCap: '',
        sector: 'EQ',
        sym: {
            asset: 'Equity',
            exc: 'BSE',
            expiry: '',
            id: 'STK_SINTEXPLAST_B_BSE',
            instrument: 'STK',
            lotSize: '0',
            multiplier: '1',
            optionType: '',
            streamSym: '540653_BSE',
            strike: '0.00',
            tickSize: '0.01',
        },
        tt_eligibility: false,
    },
];

const ExpandableList: React.FC = () => {
    const [expanded, setExpanded] = useState<string[]>([]);

    const handlePress = (id: string) => {
        if (expanded.includes(id)) {
            setExpanded(expanded.filter((item) => item !== id));

        } else {
            setExpanded([...expanded, id]);
        }

        console.warn(expanded)
    };

    return (
        <View style={styles.container}>
            {data.map((item) => (
                <View style={styles.itemContainer} key={item.excToken}>
                    <TouchableOpacity
                        onPress={() => handlePress(item.excToken)}
                        style={styles.header}
                    >
                        <Text style={styles.headerText}>{item.dispSym}</Text>
                        <Text style={styles.headerText}>{item.companyName}</Text>
                    </TouchableOpacity>
                    {expanded.includes(item.excToken) && (
                        <View style={styles.content}>
                            <Text>Base Symbol: {item.baseSym}</Text>
                            <Text>Exc Token: {item.excToken}</Text>
                            <Text>Haircut: {item.haircut}</Text>
                            <Text>ISIN: {item.isin}</Text>
                            <Text>Market Capitalization: {item.mCap}</Text>
                            <Text>Sector: {item.sector}</Text>
                            <Text>TT Eligibility: {item.tt_eligibility.toString()}</Text>
                        </View>
                    )}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    itemContainer: {
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    header: {
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    content: {
        padding: 10,
    },
});

export default ExpandableList;



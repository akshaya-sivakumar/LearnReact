import * as React from 'react';
import { useState } from 'react';
import { LayoutAnimation, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExpandableComponent from '../widgets/expandable';

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


const Watchlist: React.FC<Data> = () => {

    const watchlist: Data[] = [
        {
            "baseSym": "KNRCON",
            "companyName": "KNR CONSTRU LTD.",
            "dispSym": "KNRCON",
            "excToken": "532942",
            "haircut": "70",
            "isin": "INE634I01029",
            "mCap": "",
            "sector": "EQ",
            "sym": {
                "asset": "Equity",
                "exc": "BSE",
                "expiry": "",
                "id": "STK_KNRCON_A_BSE",
                "instrument": "STK",
                "lotSize": "0",
                "multiplier": "1",
                "optionType": "",
                "streamSym": "532942_BSE",
                "strike": "0.00",
                "tickSize": "0.05"
            },
            "tt_eligibility": false,

        },
        {
            "baseSym": "SINTEXPLAST",
            "companyName": "SINTEX PLASTICS TECH LTD",
            "dispSym": "SINTEXPLAST",
            "excToken": "540653",
            "haircut": "0",
            "isin": "INE501W01021",
            "mCap": "",
            "sector": "EQ",
            "sym": {
                "asset": "Equity",
                "exc": "BSE",
                "expiry": "",
                "id": "STK_SINTEXPLAST_B_BSE",
                "instrument": "STK",
                "lotSize": "0",
                "multiplier": "1",
                "optionType": "",
                "streamSym": "540653_BSE",
                "strike": "0.00",
                "tickSize": "0.01"
            },
            "tt_eligibility": false,

        },
        {
            "baseSym": "INTELSOFT",
            "companyName": "INTEGRA TELECOMMUNICATION & SO",
            "dispSym": "INTELSOFT",
            "excToken": "536868",
            "haircut": "0",
            "isin": "INE256F01019",
            "mCap": "",
            "sector": "EQ",
            "sym": {
                "asset": "Equity",
                "exc": "BSE",
                "expiry": "",
                "id": "STK_INTELSOFT_XT_BSE",
                "instrument": "STK",
                "lotSize": "0",
                "multiplier": "1",
                "optionType": "",
                "streamSym": "536868_BSE",
                "strike": "0.00",
                "tickSize": "0.05"
            },
            "tt_eligibility": true,

        },
        {
            "baseSym": "GICHSGFIN",
            "companyName": "GIC HOUSING FINANCE LTD",
            "dispSym": "GICHSGFIN",
            "excToken": "1139",
            "haircut": "50",
            "isin": "INE289B01019",
            "mCap": "",
            "sector": "EQ",
            "sym": {
                "asset": "Equity",
                "exc": "NSE",
                "expiry": "",
                "id": "STK_GICHSGFIN_EQ_NSE",
                "instrument": "STK",
                "lotSize": "1",
                "multiplier": "1",
                "optionType": "",
                "streamSym": "1139_NSE",
                "strike": "0.00",
                "tickSize": "0.05"
            },
            "tt_eligibility": false,

        },
        {
            "baseSym": "IBULHSGFIN",
            "companyName": "INDIABULLS HSG FIN LTD",
            "dispSym": "IBULHSGFIN",
            "excToken": "30125",
            "haircut": "50",
            "isin": "INE148I01020",
            "mCap": "",
            "sector": "EQ",
            "sym": {
                "asset": "Equity",
                "exc": "NSE",
                "expiry": "",
                "id": "STK_IBULHSGFIN_EQ_NSE",
                "instrument": "STK",
                "lotSize": "1",
                "multiplier": "1",
                "optionType": "",
                "streamSym": "30125_NSE",
                "strike": "0.00",
                "tickSize": "0.05"
            },
            "tt_eligibility": false,

        },
        {
            "baseSym": "BERGEPAINT",
            "companyName": "BERGER PAINTS (I) LTD",
            "dispSym": "BERGEPAINT",
            "excToken": "509480",
            "haircut": "80",
            "isin": "INE463A01038",
            "mCap": "",
            "sector": "EQ",
            "sym": {
                "asset": "Equity",
                "exc": "BSE",
                "expiry": "",
                "id": "STK_BERGEPAINT_A_BSE",
                "instrument": "STK",
                "lotSize": "0",
                "multiplier": "1",
                "optionType": "",
                "streamSym": "509480_BSE",
                "strike": "0.00",
                "tickSize": "0.05"
            },
            "tt_eligibility": false,

        },
        {
            "baseSym": "BAJFINANCE",
            "companyName": "BAJAJ FINANCE LIMITED",
            "dispSym": "BAJFINANCE",
            "excToken": "317",
            "haircut": "80",
            "isin": "INE296A01024",
            "mCap": "",
            "sector": "EQ",
            "sym": {
                "asset": "Equity",
                "exc": "NSE",
                "expiry": "",
                "id": "STK_BAJFINANCE_EQ_NSE",
                "instrument": "STK",
                "lotSize": "1",
                "multiplier": "1",
                "optionType": "",
                "streamSym": "317_NSE",
                "strike": "0.00",
                "tickSize": "0.05"
            },
            "tt_eligibility": false,

        },
        {
            "baseSym": "PIIND",
            "companyName": "PI INDUSTRIES LTD",
            "dispSym": "PIIND",
            "excToken": "523642",
            "haircut": "80",
            "isin": "INE603J01030",
            "mCap": "",
            "sector": "EQ",
            "sym": {
                "asset": "Equity",
                "exc": "BSE",
                "expiry": "",
                "id": "STK_PIIND_A_BSE",
                "instrument": "STK",
                "lotSize": "0",
                "multiplier": "1",
                "optionType": "",
                "streamSym": "523642_BSE",
                "strike": "0.00",
                "tickSize": "0.05"
            },
            "tt_eligibility": false,

        },
        {
            "baseSym": "TCS",
            "companyName": "TATA CONSULTANCY SERV LT",
            "dispSym": "TCS",
            "excToken": "532540",
            "haircut": "80",
            "isin": "INE467B01029",
            "mCap": "",
            "sector": "EQ",
            "sym": {
                "asset": "Equity",
                "exc": "BSE",
                "expiry": "",
                "id": "STK_TCS_A_BSE",
                "instrument": "STK",
                "lotSize": "0",
                "multiplier": "1",
                "optionType": "",
                "streamSym": "532540_BSE",
                "strike": "0.00",
                "tickSize": "0.05"
            },
            "tt_eligibility": false,

        },
        {
            "baseSym": "WIPRO",
            "companyName": "WIPRO LTD",
            "dispSym": "WIPRO",
            "excToken": "507685",
            "haircut": "80",
            "isin": "INE075A01022",
            "mCap": "",
            "sector": "EQ",
            "sym": {
                "asset": "Equity",
                "exc": "BSE",
                "expiry": "",
                "id": "STK_WIPRO_A_BSE",
                "instrument": "STK",
                "lotSize": "0",
                "multiplier": "1",
                "optionType": "",
                "streamSym": "507685_BSE",
                "strike": "0.00",
                "tickSize": "0.05"
            },
            "tt_eligibility": false,

        },
        {
            "baseSym": "SBICARD",
            "companyName": "SBI CARDS & PAY SER LTD",
            "dispSym": "SBICARD",
            "excToken": "17971",
            "haircut": "80",
            "isin": "INE018E01016",
            "mCap": "",
            "sector": "EQ",
            "sym": {
                "asset": "Equity",
                "exc": "NSE",
                "expiry": "",
                "id": "STK_SBICARD_EQ_NSE",
                "instrument": "STK",
                "lotSize": "1",
                "multiplier": "1",
                "optionType": "",
                "streamSym": "17971_NSE",
                "strike": "0.00",
                "tickSize": "0.05"
            },
            "tt_eligibility": false,

        },
        {
            "baseSym": "LEMONTREE",
            "companyName": "LEMON TREE HOTELS LTD",
            "dispSym": "LEMONTREE",
            "excToken": "541233",
            "haircut": "70",
            "isin": "INE970X01018",
            "mCap": "",
            "sector": "EQ",
            "sym": {
                "asset": "Equity",
                "exc": "BSE",
                "expiry": "",
                "id": "STK_LEMONTREE_A_BSE",
                "instrument": "STK",
                "lotSize": "0",
                "multiplier": "1",
                "optionType": "",
                "streamSym": "541233_BSE",
                "strike": "0.00",
                "tickSize": "0.05"
            },
            "tt_eligibility": false,

        },
        {
            "baseSym": "NATURAL",
            "companyName": "Natural Biocon (India) Limited",
            "dispSym": "NATURAL",
            "excToken": "543207",
            "haircut": "0",
            "isin": "INE06MM01016",
            "mCap": "",
            "sector": "EQ",
            "sym": {
                "asset": "Equity",
                "exc": "BSE",
                "expiry": "",
                "id": "STK_NATURAL_X_BSE",
                "instrument": "STK",
                "lotSize": "0",
                "multiplier": "1",
                "optionType": "",
                "streamSym": "543207_BSE",
                "strike": "0.00",
                "tickSize": "0.01"
            },
            "tt_eligibility": false,

        },
        {
            "baseSym": "TATAMOTORS",
            "companyName": "TATA MOTORS LIMITED",
            "dispSym": "TATAMOTORS",
            "excToken": "3456",
            "haircut": "70",
            "isin": "INE155A01022",
            "mCap": "",
            "sector": "EQ",
            "sym": {
                "asset": "Equity",
                "exc": "NSE",
                "expiry": "",
                "id": "STK_TATAMOTORS_EQ_NSE",
                "instrument": "STK",
                "lotSize": "1",
                "multiplier": "1",
                "optionType": "",
                "streamSym": "3456_NSE",
                "strike": "0.00",
                "tickSize": "0.05"
            },
            "tt_eligibility": false,

        },
        {
            "baseSym": "SBIN",
            "companyName": "STATE BANK OF INDIA",
            "dispSym": "SBIN",
            "excToken": "3045",
            "haircut": "80",
            "isin": "INE062A01020",
            "mCap": "",
            "sector": "EQ",
            "sym": {
                "asset": "Equity",
                "exc": "NSE",
                "expiry": "",
                "id": "STK_SBIN_EQ_NSE",
                "instrument": "STK",
                "lotSize": "1",
                "multiplier": "1",
                "optionType": "",
                "streamSym": "3045_NSE",
                "strike": "0.00",
                "tickSize": "0.05"
            },
            "tt_eligibility": false,

        },
        {
            "baseSym": "SBIN",
            "companyName": "STATE BANK OF INDIA",
            "dispSym": "SBIN",
            "excToken": "500112",
            "haircut": "80",
            "isin": "INE062A01020",
            "mCap": "",
            "sector": "EQ",
            "sym": {
                "asset": "Equity",
                "exc": "BSE",
                "expiry": "",
                "id": "STK_SBIN_A_BSE",
                "instrument": "STK",
                "lotSize": "0",
                "multiplier": "1",
                "optionType": "",
                "streamSym": "500112_BSE",
                "strike": "0.00",
                "tickSize": "0.05"
            },
            "tt_eligibility": false,

        }
    ];

  



    const [expanded, setExpanded] = useState<string[]>([]);

    function handleToggleComplete(id: any) {
        if (expanded.includes(id)) {
            setExpanded(expanded.filter((item) => item !== id));

        } else {
            setExpanded([...expanded, id]);
        }



    }








    return (




        <SafeAreaView style={{ flex: 1 }} >
            <View style={{ alignContent: "center", alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ fontWeight: "bold", fontSize: 18, color: "black" }}>

                    Msil Watchlist

                </Text>
            </View>


            {watchlist.map((item, index) => (
                <View style={{ paddingHorizontal: 20 }}>
                    <ExpandableComponent
                        key={index}
                        expandedList={expanded}
                        onClickFunction={() => {
                            console.warn(index)
                            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                            handleToggleComplete(item.excToken)

                        }}
                        item={watchlist[index]}
                    />
                </View>
            )




            )}





        </SafeAreaView>
    )
}

export default Watchlist
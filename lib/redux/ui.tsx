import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';


const UiPage = () => {
    const data = useSelector((state: any) => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (

        <View>
            <Text>{data}</Text>
        </View>
    );
};

export default UiPage;



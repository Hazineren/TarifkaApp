import React, { useEffect, useState } from "react";
import { FlatList, View,Text } from 'react-native';
import config from '../../../config';
import axios from 'axios';
import CategoryCard from "../../Cards/CategoryCard";
import styles from './Categories.styles'

function Categories({navigation}){
    const [data, setData] = useState([]);

    const fetchData = async()=>{
        try {
            const {data:responseData} = await axios.get(config.CATEGORY_URL);
            setData(responseData);
            console.log(responseData,'response ne');
        } catch (error) {
            console.log(error.message,'Hata ALGILANDI')
        }
    }

    useEffect(() => {
      fetchData();
    }, [])
    
    function handleCategorySelect(strCategory){
        navigation.navigate('MenusPage',{strCategory});
    }
    
    const renderCategories = ({item}) => <CategoryCard category={item} onSelected={()=>handleCategorySelect(item.strCategory)}></CategoryCard>


    return(
        <View style={styles.container}>
            <FlatList data={data.categories} renderItem={renderCategories}></FlatList>
        </View>
        
        // <View>
        //     <Text>{config.CATEGORY_URL}</Text>
        // </View>
    )
}

export default Categories;
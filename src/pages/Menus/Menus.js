import React, { useEffect, useState } from "react";
import { FlatList, View } from 'react-native';
import config from '../../../config';
import axios from 'axios';
import styles from './Menus.styles';
import MenuCard from "../../Cardss/MenuCard";


function Menus({route,navigation}){
    const {strCategory} = route.params;
    console.log(strCategory);


    const [data, setData] = useState([]);

    const fetchData = async()=>{
        try {
            const {data:responseData} = await axios.get(config.MENU_URL+`${strCategory}`);
            setData(responseData);
            console.log(responseData,'response ne');
        } catch (error) {
            console.log(error.message,'Hata ALGILANDI')
        }
    }

    useEffect(() => {
      fetchData();
    }, [])
    
    function handleFoodSelect(idMeal){
        navigation.navigate('DetailPage',{idMeal});
    }
    
    const renderMenus = ({item}) => <MenuCard menuInfo={item} onSelected={()=>handleFoodSelect(item.idMeal)}></MenuCard>


    return(
        <View style={styles.container}>
            <FlatList data={data.meals} renderItem={renderMenus}></FlatList>
        </View>
        
    )
} 


export default Menus;
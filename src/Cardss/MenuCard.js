import React from "react";
import { TouchableWithoutFeedback, View, Image, Text, ImageBackground } from 'react-native';
import styles from './MenuCard.Styles';

function MenuCard({menuInfo,onSelected}){
    return(
        <TouchableWithoutFeedback onPress={onSelected}>
            <ImageBackground imageStyle={{borderRadius:20}} style={styles.container} source={{uri:menuInfo.strMealThumb}}>
                
                <Text style={styles.menuCardInfo}>{menuInfo.strMeal}</Text>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}


export default MenuCard;
import React from "react";
import { TouchableWithoutFeedback, View,Image, Text} from 'react-native';
import styles from './CategoryCard.styles'

function CategoryCard({category,onSelected}){
    return(
        <TouchableWithoutFeedback onPress={onSelected}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={{uri: category.strCategoryThumb}}></Image>
                <Text style={styles.categoryName}>{category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryCard;
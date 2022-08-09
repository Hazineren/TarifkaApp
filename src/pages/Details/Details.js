import React, {useState,useEffect} from "react";
import { Button, View, Text, Image, ScrollView, Linking } from 'react-native';
import styles from './Details.styles';
import axios from "axios";
import config from "../../../config";


function Details({route}){
    const {idMeal} = route.params;
    console.log(idMeal);


    const [data, setData] = useState([]);

    const fetchData = async()=>{
        try {
            const {data:responseData} = await axios.get(config.DETAIL_URL+`${idMeal}`);
            setData(responseData.meals);
            // console.log(responseData,'?????????????????????????');
        } catch (error) {
            console.log(error.message,'Hata ALGILANDI')
        }
    }

    useEffect(() => {
      fetchData();
    }, [])
    //console.log(data?.map((item)=>item.strMealThumb),'*********************')
    
    return(
        <ScrollView>
            <View style={styles.container}>
              <Image style={styles.imgDetail} source={{uri:`${data?.map((item)=>item.strMealThumb)}`}}/>
              <Text style={styles.txtDetailHeader}>asdasd{data?.map((item)=>item.strMeal)}</Text>
              <Text style={styles.txtDetailArea}>{data?.map((item)=>item.strArea)}</Text>
              <Text style={styles.txtDetailDescription}>{data?.map((item)=>item.strInstructions)}</Text>
              <Button color={'red'} onPress={()=>Linking.openURL(`${data?.map((item)=>item.strYoutube)}`)} title='Watch On Youtube'></Button>
            </View>
        </ScrollView>
        
    )
}


export default Details;
import React from "react";
//import LottiView from 'lottie-react-native'
import Categories from "./src/pages/Categories/Categories";
import Menus from "./src/pages/Menus";
import Details from './src/pages/Details';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

function App(){
    return(
        //<LottiView source={require('./assets/loading.json')} autoPlay />
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CategoriesPage">
                <Stack.Screen name="CategoriesPage" component={Categories} options={{
                    title:'Categories',
                    backgroundColor:'orange',
                    headerTitleAlign:'center',
                    headerTitleStyle:{color:'orange'}
                }}></Stack.Screen>
                <Stack.Screen name="MenusPage" component={Menus} options={{
                    title:'Menus',
                    headerTitleAlign:'center',
                    headerTitleStyle:{color:'orange'},
                    headerTintColor:'orange'
                }}></Stack.Screen>
                <Stack.Screen name="DetailPage" component={Details} options={{
                    title:'Detail',
                    headerTitleAlign:'center',
                    headerTitleStyle:{color:'orange'},
                    headerTintColor:'orange'
                }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
        //<Categories/>
    )
}

export default App;

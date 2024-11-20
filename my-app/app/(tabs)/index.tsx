
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function foryou(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Library" component={LibraryScreen}/>
            <Tab.Screen name="Liked" component={LikedScreen}/>
            <Tab.Screen name="SUGGESTED" component={SuggestedScreen}/>
        </Tab.Navigator>
    )
}

function LibraryScreen(){
    return(
        <View>
            <Text>
                Home
            </Text>
        </View>
    )
}

function LikedScreen(){
    return(
        <View>
            <Text>
                Setting
            </Text>
        </View>
    )
}


function SuggestedScreen(){
    return(
        <View>
            <Text>
                Setting
            </Text>
        </View>
    )
}
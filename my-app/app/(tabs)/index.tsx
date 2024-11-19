import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function foryou(){
    return <View>
        <Link href={"/liked"}>Page-1</Link>
        <Link href={"/suggested"}>Page-2</Link>
        <Link href={"/library"}>Page-3</Link>
    </View>
}
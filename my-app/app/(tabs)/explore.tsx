import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function explore() {
    return <View>
        <Text>
            Explore Page
        </Text>
        <Link href={"/accountInfo"}>
            <Text>
                Accounts
            </Text>
        </Link>
    </View>
}

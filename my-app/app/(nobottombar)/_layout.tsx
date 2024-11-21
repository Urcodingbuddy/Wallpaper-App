import { Slot, Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="(nobottombar)/accountinfo"
                options={{
                    headerTitle: "Account-Info",
                    headerBackTitle: "Go-back",
                }}
            />
            <Slot />
        </Stack>
    );
}

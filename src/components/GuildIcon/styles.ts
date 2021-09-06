import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    image: {
        width: 63,
        height: 66,
        
    },
    container: {
        width: 63,
        height: 66,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: theme.colors.discord,
    },
    
});
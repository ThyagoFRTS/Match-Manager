import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        
        marginHorizontal: 24,
        
    },
    buttons: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 60,
    },
    title: {
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 6
    },
    contentText: {
        marginTop: 30,
        marginBottom: 28,
    },
});
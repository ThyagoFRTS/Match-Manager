import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: 55,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
        flexDirection: 'row',
        textAlign: "center",
        marginHorizontal: 4,
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontFamily: theme.fonts.text500,
        fontSize: 15,
        textAlign: "center",
    },
    bordered: {
        borderWidth: 1,
        borderColor: theme.colors.white,
        backgroundColor: theme.colors.background,
    },

});
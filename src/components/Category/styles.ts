import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginRight: 8,
    },
    content: {
        width: 100,
        height: 116,
        backgroundColor: theme.colors.background10,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 8,
        paddingVertical: 8,
    },
    title: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 15,
    },
    check: {
        width: 10,
        height: 10,
        backgroundColor: theme.colors.secondary,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderColor: theme.colors.line,
        borderWidth: 1,
        borderRadius: 3,
    },
    checked: {
        width: 10,
        height: 10,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderRadius: 3,
    },
});
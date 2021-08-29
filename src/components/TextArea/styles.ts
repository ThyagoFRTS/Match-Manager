import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 95,
        opacity: 0.9,
        backgroundColor: theme.colors.lineStrong,
        borderRadius: 8,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        marginRight: 4,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        paddingTop: 16,
        paddingHorizontal: 16,
        textAlignVertical: 'top',
        color: theme.colors.white,

    },
});
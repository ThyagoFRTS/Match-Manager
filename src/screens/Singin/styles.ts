import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: theme.colors.background,
    },
    image: {
        width: '100%',
        height: 400,
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50,
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        lineHeight: 40,
        fontFamily: theme.fonts.title700,
    },
    subtitle: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 64,
        lineHeight: 25,
        fontFamily: theme.fonts.title500,
    }
});
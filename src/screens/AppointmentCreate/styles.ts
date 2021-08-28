import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    banner: {
        width: '100%',
        height: 234,
        marginBottom: 30,

    },
    bannerContent: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 24,
        marginBottom: 24,
    },
    label: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading,
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32,
    },
    select: {
        width: '100%',
        flexDirection: "row",
        height: 68,
        borderColor: theme.colors.primary,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        paddingRight: 25,
        overflow: "hidden",
    },
    selectBody: {
        flex: 1,
        alignItems: "center",
    },
    image: {
        width: 64,
        height: 68,
        backgroundColor: theme.colors.background,
        borderColor: theme.colors.primary,
        borderWidth: 1,
        borderRadius: 8,
    },
    field: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
    },
    column: {
        flexDirection: "row",
        alignItems: "center",
    },
    divider: {
        marginRight: 4,
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight,
    },
    charLimit: {
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
    },
    footer: {
        marginVertical: 20,
        marginBottom: 56,
    },
    
});
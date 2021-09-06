import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        backgroundColor: theme.colors.background10,
        
    },
    smallContainer: {
        flex: 1,
        justifyContent: "flex-end",

    },
    overlay: {
        flex: 1,
        backgroundColor: theme.colors.overlay,

    },
    bar: {
        width:  19,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme.colors.primary,
        alignSelf: "center",
        
    }
});
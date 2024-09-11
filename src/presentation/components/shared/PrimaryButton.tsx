import { Pressable, StyleSheet, Text } from "react-native";

interface Props{
    onPress?: () => void
    onLongPress?: () => void
    label: string
}

export const PrimaryButton = ({onLongPress, onPress, label}:Props) => { 

    return (
        <Pressable
            onPress={() => onPress && onPress()}
            onLongPress={() => onLongPress && onLongPress()}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed
            ]}
        >
            <Text style={{ color: "white" }}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: "#5856D6",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonPressed: {
        backgroundColor: "#4746AB"
    }
})

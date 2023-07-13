import { TextInputProps } from "react-native";
import { InputStyle } from "./style";

export default function Title({ type = "text", ...props }) {
    const inputProps: TextInputProps = { ...props };

    if (type === "password") 
        inputProps.secureTextEntry = true;
    else if (type === "number")
        inputProps.inputMode = "numeric"

    return <InputStyle { ...inputProps } />

}
import { 
    ButtonLeftStyle, 
    ButtonRightStyle, 
    TextStyle, 
    InputStyle, 
    ViewStyle 
} from "./style";
import { useState } from "react";

export default function InputNumber() {
    const [value, setValue] = useState(0);

    const changeValue = (valueNum: number) => {
        if (valueNum < 0) 
            setValue(0);
        else if (valueNum <= 125) 
            setValue(valueNum);
    }

    const addValue = () => changeValue(value + 1);
    const decValue = () => changeValue(value - 1);

    const handleChange = (text: string) => {
        const result: string = text.replace(/\D/g, '');
        changeValue(Number(result));
    };

    return (
        <ViewStyle>
            <ButtonLeftStyle onPress={decValue}>
                <TextStyle>-</TextStyle>
            </ButtonLeftStyle>
            <InputStyle 
                onChangeText={handleChange}
                keyboardType='numeric'
                value={String(value)}
                maxLength={125}
            />
            <ButtonRightStyle onPress={addValue}>
                <TextStyle>+</TextStyle>
            </ButtonRightStyle>
        </ViewStyle>
    )
}
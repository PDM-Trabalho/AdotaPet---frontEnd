import { 
    KeyStyle, ValueStyle, ViewStyle,
    KeyPrimaryStyle, ValuePrimaryStyle
} from "./style";

export interface TextProps {
    keyText: string,
    valueText: string,
    fontSize?: number,
    primary: boolean
}

export default function TextKeyValue({ keyText, valueText, primary }: TextProps) {
    const KeyComponent = primary ? KeyPrimaryStyle : KeyStyle;
    const ValueComponent = primary ? ValuePrimaryStyle : ValueStyle;

    return (
        <ViewStyle>
            <KeyComponent>{ keyText }</KeyComponent>
            <ValueComponent>{ valueText }</ValueComponent>
        </ViewStyle>
    )
}
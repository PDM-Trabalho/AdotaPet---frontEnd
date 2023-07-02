import { ErrorOption } from "react-hook-form";

import { 
    ViewStyle, 
    ViewErrorStyle,
    TextPrimaryStyle, 
    TextSecondStyle 
} from "./style";

export interface ViewInputProps {
    title?: string,
    showTitle?: boolean,
    component: any,
    primary?: boolean,
    error?: ErrorOption | undefined
}

import TextError from "../TextError";

export default function ViewInput({ 
    title, 
    component, 
    primary, 
    showTitle,
    error 
}: ViewInputProps) {
    const TextElement = primary ? TextSecondStyle : TextPrimaryStyle;
    
    return (
        <ViewStyle>
            { showTitle ? <TextElement>{ title }</TextElement> : <></> }
            <ViewErrorStyle>
                { component }
                <TextError error={ error } />
            </ViewErrorStyle>
        </ViewStyle>
    )
}
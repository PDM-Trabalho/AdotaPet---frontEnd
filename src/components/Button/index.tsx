import { ButtonStyle, TextStyle } from "./style"

export interface ButtonProps {
    text: string,
    type?: "fill" | "outline" | "danger",
    callback: () => void,
    styleSheet?: any,
    buttonCard?: boolean
}

export default function Button({ text, type = "fill", callback }: ButtonProps) {
    return (
        <ButtonStyle type={ type } onPress={ callback }>
            <TextStyle type={ type }> 
                { text } 
            </TextStyle>
        </ButtonStyle>
    )
}
import { FontAwesome5 } from "@expo/vector-icons"
import { useTheme } from 'styled-components';
import { ButtonStyle } from "./style"

interface ButtonProps {
    name: string,
}

export default function ButtonLogin({ name }: ButtonProps) {
    const theme: any = useTheme();
    const color = theme.color.primary_dark;

    return (
        <ButtonStyle>
            <FontAwesome5 name={name} size={24} color={color} />
        </ButtonStyle>
    )
}
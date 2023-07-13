import { SubTitleStyle } from './style';

export interface SubTitleProps {
    text: string,
    fontWeigth?: number
}

export default function SubTitle({ text }: SubTitleProps) {
    return (
        <SubTitleStyle>
            { text }
        </SubTitleStyle>
    )
}
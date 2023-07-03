import { TitleStyle, TitlePrimaryStyle } from './style';

interface TitleProps {
    text: string,
    primary?: boolean
}

export default function Title({ text, primary }: TitleProps) {
    const TitleElement = primary ? TitlePrimaryStyle : TitleStyle;
    return (
        <TitleElement>
            { text }
        </TitleElement>
    )
}
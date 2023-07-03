import { ViewStyle } from "./style";

import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";

interface ViewProps {
    title: string,
    subTitle: string
}

export default function ViewTitle({ title, subTitle }: ViewProps) {
    return (
        <ViewStyle>
            <Title text={title} primary />
            <SubTitle text={subTitle} />
        </ViewStyle>
    )
}
import { ViewStyle, HeaderStyle, LineStyle, TextStyle, ViewIconStyle } from "./style";

import ButtonLogin from "../ButtonLogin";

export default function ViewLoginButton() {
    const listIconName = ["facebook", "google", "apple"];

    return (
        <ViewStyle>
            <HeaderStyle>
                <LineStyle />
                <TextStyle>Entrar com</TextStyle>
                <LineStyle />
            </HeaderStyle>

            <ViewIconStyle>
                { listIconName.map((name, index) => (
                    <ButtonLogin key={index} name={name} />) 
                )}
            </ViewIconStyle>
        </ViewStyle>
    )
}
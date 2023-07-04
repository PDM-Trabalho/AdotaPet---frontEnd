import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components"

export const ButtonStyle = styled(TouchableOpacity)`
    ${({ theme }) => css`
        background: ${theme.color.white_300};
        border-radius: 8px;
        width: 60px;
        height: 60px;  
        justify-content: center;
        align-items: center;
    `}
`;
import { Text } from "react-native";
import styled, { css } from "styled-components";

export const TextErrorStyle = styled(Text)`
    ${({ theme }) => css`
        font-family: ${theme.font.primary_400};
        color: ${theme.color.danger};
        font-size: 14px;
        margin-left: 10px;
    `}
`;
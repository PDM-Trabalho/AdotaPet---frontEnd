import { Text } from "react-native";
import styled, { css } from "styled-components";

export const LinkStyle = styled(Text)`
    ${({ theme }) => css`
        font-family: ${theme.font.primary_500};
        color: ${theme.color.primary_200};
        text-decoration: underline;
        align-self: flex-end;
        font-size: 14px;
    `}
`;
import { Text } from "react-native";
import styled, { css } from "styled-components";

export const TitleStyle = styled(Text)`
    ${({ theme }) => css`
        color: ${theme.color.primary_dark_200};
        font-family: ${theme.font.title};
        text-align: center;
        font-size: 24px;
    `}
`;

export const TitlePrimaryStyle = styled(Text)`
    ${({ theme }) => css`
        color: ${theme.color.primary_300};
        font-family: ${theme.font.title};
        font-size: 24px;
    `}
`;
import { Text, View } from "react-native";
import styled, { css } from "styled-components";

export const ViewStyle = styled(View)`
    flex-direction: row;
    gap: 4px;
`;

export const TextStyle = styled(Text)`
    font-size: 14px;
    line-height: 16.94px;
`;

export const KeyStyle = styled(TextStyle)`
    ${({ theme }) => css`
        font-family: ${theme.font.primary_700};
        color: ${theme.color.primary_300};
    `}
`;

export const ValueStyle = styled(TextStyle)`
    ${({ theme }) => css`
        font-family: ${theme.font.primary_400};
        color: ${theme.color.primary_dark};
    `}
`;

// Styled Component + React-Native = Lixo

export const TextPrimaryStyle = styled(Text)`
    font-size: 16px;
    line-height: 19.36px;
`;

export const KeyPrimaryStyle = styled(TextPrimaryStyle)`
    ${({ theme }) => css`
        font-family: ${theme.font.primary_700};
        color: ${theme.color.primary_300};
    `}
`;

export const ValuePrimaryStyle = styled(TextPrimaryStyle)`
    ${({ theme }) => css`
        font-family: ${theme.font.primary_400};
        color: ${theme.color.primary_dark};
    `}
`;
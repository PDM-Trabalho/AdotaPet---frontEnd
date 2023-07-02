import { Text, View } from "react-native";
import styled, { css } from "styled-components";

export const ViewStyle = styled(View)`
    gap: 8px;
`;

export const TextStyle = styled(Text)`
    ${({ theme }) => css`
        font-family: ${theme.font.primary_400};
        color: ${theme.color.primary_dark};
        margin-left: 10px;
    `}
`;

export const TextPrimaryStyle = styled(TextStyle)`
    font-size: 16px;
`;

export const TextSecondStyle = styled(TextStyle)`
    font-size: 14px;
`;

export const ViewErrorStyle = styled(View)`
    gap: 5px;
`;
import { View, Text } from "react-native";
import styled, { css } from "styled-components";

export const ViewStyle = styled(View)`
    gap: 30px;
`;

export const HeaderStyle = styled(View)`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const LineStyle = styled(View)`
    ${({ theme }) => css`
        background: ${theme.color.primary_dark};
        align-items: center;
        width: 127.5px;
        height: 1.25px;
    `}
`;

export const TextStyle = styled(Text)`
    ${({ theme }) => css`
        font-family: ${theme.font.primary_400};
        color: ${theme.color.primary_dark};
        font-size: 16px;
    `}
`;

export const ViewIconStyle = styled(View)`
    justify-content: center;
    flex-direction: row;
    gap: 16px;
`;
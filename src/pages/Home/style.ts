import { View, Text } from "react-native";
import styled, { css } from 'styled-components';

export const ViewStyle = styled(View)`
    ${({ theme }) => css`
        background-color: ${theme.color.white_100};
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        gap: 48px;
        flex: 1;
    `}
`;

export const TextStyle = styled(Text)`
    ${({ theme }) => css`
        font-size: 20px;
        font-family: ${theme.font.primary_700};
    `}
`;

export const TitleStyle = styled(Text)`
    ${({ theme }) => css`
        color: ${theme.color.primary_200};
        font-family: ${theme.font.title};
        text-align: center;
        font-size: 40px;
    `}
`;

export const ViewIconStyle = styled(View)`
    justify-content: center;
    align-items: center;
    flex-direction: row; 
    gap: 10px;
`;

export const ViewTitleStyle = styled(View)`
    gap: 10px;
`;

export const ViewButtonStyle = styled(View)`
    width: 100%;
    gap: 16px;
`;

export const ViewWelcomeStyle = styled(View)`
    gap: 10px;
`;
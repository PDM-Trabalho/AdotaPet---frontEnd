import { SafeAreaView, View, Image } from "react-native";
import styled, { css } from 'styled-components';

export const PageStyle = styled(SafeAreaView)`
    ${({ theme }) => css`
        background-color: ${theme.color.white_100};
        padding: 0 20px;
        gap: 32px;
        flex: 1;
    `}
`;

export const ContentStyle = styled(View)`
    gap: 20px;
`;

export const ViewStyle = styled(View)`
    gap: 16px;
`;

export const ImageViewStyle = styled(View)`
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 12px;
`;

export const ImageStyle = styled(Image)`
    border-radius: 9999px;
    height: 120px;
    width: 120px;
`;

export const ViewIconStyle = styled(View)`
    ${({ theme }) => css`
        width: 32px;
        height: 32px;

        align-items: center;
        justify-content: center;
        
        background: ${theme.color.secondary};
        border-radius: 9999px;

        position: absolute;
        right:12px;
        bottom: 0;
    `}
`;

export const ImageSmallIconStyle = styled(View)`
    ${({ theme }) => css`
        color: ${theme.color.white_100};
        height: 12px;
        width: 12px;
    `}
`;
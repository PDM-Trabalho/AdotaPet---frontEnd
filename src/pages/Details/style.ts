import { ScrollView, View, Image, Text } from "react-native";
import styled from "styled-components";

export const PageStyle = styled(ScrollView)`
    background-color: ${({ theme }) => theme.color.white_100};
    padding: 32px 20px 0;
    gap: 32px;
    flex: 1;
`;

export const ViewMainStyle = styled(View)`
    border: 1px solid ${({ theme }) => theme.color.white_300};
    border-radius: 16px;
    padding: 12px;
    margin-bottom: 70px;
`;

export const ViewContentStyle = styled(View)`
    gap: 16px;
`;

export const ViewGapContentStyle = styled(View)`
    gap: 8px;
`;

export const ViewMapStyle = styled(View)`
    width: 100%;
    margin: 12px 0;
    border-radius: 12px;
`;

export const ViewImageStyle = styled(View)`
    border: 0 solid ${({ theme }) => theme.color.white_200};
    border-bottom-width: 1px;
    padding-bottom: 12px;
    margin-bottom: 12px;
`;

export const ImageStyle = styled(Image)`
    border-radius: 8px;
    height: 174px;
    width: 100%;
    object-fit: contain;
`;

export const TitleStyled = styled(Text)`
    color: ${({ theme }) => theme.color.primary_dark};
    font-family: ${({ theme }) => theme.font.primary_700};
    line-height: 24.2px;
    font-size: 20px;
`;
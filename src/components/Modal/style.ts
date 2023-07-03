import { Text, View } from "react-native";
import styled, { css } from "styled-components";

export const PageModalStyle = styled(View)`
    flex: 1;
    padding: 0 20px;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .25);
`;

export const ViewModalStyle = styled(View)`
    ${({ theme }) => css`
        background: ${theme.color.white};
        width: 100%;
        border-radius: 12px;
        padding: 28px;
        gap: 16px;
    `}
`;

export const ViewTextStyle = styled(View)`
    ${({ theme }) => css`
        border: 0 solid ${theme.color.white_300};
        border-bottom-width: 1px;
        padding-bottom: 4px;
    `}
`;

export const TextStyle = styled(Text)`
    ${({ theme }) => css`
        font-family: ${theme.font.primary_700};
        color: ${theme.color.black};
        line-height: 24px;
        margin-left: 10px;
        font-size: 16px;
    `}
`;

export const ViewSelectStyle = styled(View)`
    gap: 8px;
`;
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import styled, { css } from "styled-components";

const radius = "12px";
const heigth = "56px";
const widthButton = 13;
const widthInput = `${100 - (widthButton * 2)}%`;

export const ViewStyle = styled(View)`
    flex-direction: row;
`;

export const ButtonStyle = styled(TouchableOpacity).attrs(() => ({
    activeOpacity: 0.6
}))`
    ${({ theme }) => css`
        background: ${theme.color.white_300};
        border: 2px solid ${theme.color.primary_200};
        
        justify-content: center;
        align-items: center;

        width: ${widthButton}%;
        height: ${heigth};
    `}
`;

export const ButtonLeftStyle = styled(ButtonStyle)`
    border-top-left-radius: ${radius};
    border-Bottom-left-radius: ${radius};
    border-right-width: 0;
`;

export const ButtonRightStyle = styled(ButtonStyle)`
    border-top-right-radius: ${radius};
    border-Bottom-right-radius: ${radius};
    border-left-width: 0;
`;

export const TextStyle = styled(Text)`
    ${({ theme }) => css`
        color: ${theme.color.primary_dark_300};
        font-size: 16px;
    `}
`;

export const InputStyle = styled(TextInput)`
    ${({ theme }) => css`
        border: 2px solid ${theme.color.primary_200};
        color: ${theme.color.primary_dark};
        background: transparent;

        border-left-width: 0;
        border-right-width: 0;
        
        text-align: center;
        height: ${heigth};
        width: ${widthInput};
    `}
`;
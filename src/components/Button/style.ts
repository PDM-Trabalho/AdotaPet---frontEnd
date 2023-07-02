import { TouchableOpacity, Text } from "react-native";
import styled, { css } from "styled-components";
import { ButtonProps } from "./index"

export const ButtonStyle = styled(TouchableOpacity)<ButtonProps>`
    background: ${({ theme }) => theme.color.primary_200};
    width: 100%;
    height: 56px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;

    ${({ theme, type }) => type === "outline" && css`
        background: transparent;
        border: 2px solid ${theme.color.primary_200};
    `}

    ${({ theme, type }) => type === "danger" && css`
        background: ${theme.color.danger};
        color: ${theme.color.white};
    `}
`;

export const TextStyle = styled(Text)<ButtonProps>`
    font-family: ${({ theme }) => theme.font.primary_700};
    color: ${({ theme }) => theme.color.white_100};
    font-size: 16px;

    ${({ theme, type }) => type === "outline" && css`
        color: ${theme.color.primary_200};
    `}
`;
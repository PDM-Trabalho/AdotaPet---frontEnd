import { TextInput } from "react-native";
import styled, { css } from "styled-components";

export const InputStyle = styled(TextInput).attrs(({ theme }) => ({
    placeholderTextColor: theme.color.primary_200
}))`
    ${({ theme }) => css`
        background: transparent;
        border: 2px solid ${theme.color.primary_200};
        width: 100%;
        height: 56px;
        padding: 16px;
        border-radius: 12px;
        align-items: center;
    `}
`;
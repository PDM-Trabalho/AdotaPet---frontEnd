import { Text } from "react-native";
import styled, { css } from "styled-components";

import { SubTitleProps } from "./index";

export const SubTitleStyle = styled(Text)<SubTitleProps>`
    ${({ theme, color, fontWeigth }) => css`
        color: ${color || theme.color.primary_dark};
        font-weight: ${fontWeigth || 400};
        font-family: ${theme.font.primary_400};
        font-size: 12px;
    `}
`;
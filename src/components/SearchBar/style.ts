import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import styled, { css } from "styled-components";

export const style = StyleSheet.create ({
    FilterIcon: {
        display: 'flex',
        flexGrow: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    SerachIcon: {
        position: 'absolute',
        alignSelf: 'center',
        left: '4%',
    }
})
export const ViewStyle = styled(View)`
    width: 100%;
    position: absolute;
    top: 8%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const InputStyle = styled(TextInput)`
    ${({ theme }) => css`
        height: 56px;
        flex-grow: 1;
        flex-basis: 0;
        background: transparent;
        border: 2px solid ${theme.color.primary_200};
        border-radius: 12px;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        padding: 16px;
        padding-left: 55px;
        color: ${theme.color.primary_200};
    `}
`
export const ButtonStyle = styled(TouchableOpacity)`
    ${({theme}) => css`
        height: 56px;
        width: 56px;
        background: ${theme.color.primary_200 };
        border-radius: 12px;
        margin-left: 10px;
    `}
`
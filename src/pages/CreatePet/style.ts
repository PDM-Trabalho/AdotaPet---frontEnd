import { ScrollView, View } from "react-native";
import styled from 'styled-components';

export const PageStyle = styled(ScrollView)`
    background-color: ${({ theme }) => theme.color.white_100};
    padding: 0 20px;
    gap: 32px;
    flex: 1;
`;

export const ViewInputStyle = styled(View)`
    margin-bottom: 50px;
    gap: 16px;
`;

export const ViewButton = styled(View)`
    margin-bottom: 30px;
`;
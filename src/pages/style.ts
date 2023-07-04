import { SafeAreaView } from "react-native";
import styled from 'styled-components';

export const PageStyle = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.white_100};
    padding: 0 20px;
    gap: 32px;
`;
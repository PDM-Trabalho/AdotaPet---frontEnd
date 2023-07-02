import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinkStyle } from './style';

interface LinkProps {
    text: string,
    page: string
}

export default function Title({ text, page }: LinkProps) {
    const navigation = useNavigation();

    function handleNavigate(page: string) {
        navigation.navigate(page)
    } 

    return (
        <TouchableOpacity onPress={() => handleNavigate(page)}>
            <LinkStyle>
                { text }
            </LinkStyle>
        </TouchableOpacity>
    )
}
import { InputStyle, ButtonStyle, ViewStyle, style } from "./style";
import { AntDesign } from "@expo/vector-icons"
import { useTheme } from "styled-components";

interface SearchBarProps {
    callbackFilter: () => void;
}

export default function SearchBar({ callbackFilter }: SearchBarProps){
    const theme = useTheme()

    return(
        <ViewStyle>
            <InputStyle placeholder="Pesquisar"  placeholderTextColor={theme?.color.primary_200}/>
            <AntDesign style={style.SerachIcon} name="search1" size={24} color={theme?.color.primary_200}></AntDesign>
            <ButtonStyle onPress={callbackFilter}>
                <AntDesign style={style.FilterIcon} name="filter" size={24} color={theme?.color.white}></AntDesign>
            </ButtonStyle> 
        </ViewStyle>
    )
}
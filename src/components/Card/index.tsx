import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { 
    CardStyle, 
    ViewStyle, 
    ImageStyle, 
    ViewTextStyle,
    ViewContent,
    ButtonStyle,
    ButtonTextStyle,
    ButtonIconStyle
} from "./style";

import TextKeyValue from "../../components/TextKeyValue";
import namePages from "../../routes/namePages";

export default function Card({ data }: any) {
    const [ isFavorite, setIsFavorite ] = useState(false);
    const navigation = useNavigation();
    const theme: any = useTheme();

    const dataPet = {
        "Espécie": data.species,
        "Raça": data.race,
        "Porte": data.carrying,
        "Sexo": data.sex,
        "Idade": data.age
    };

    const createElementText = (obj: any) => {
        let listComponent = [];
        for (const item in obj) {
            listComponent.push(
                <TextKeyValue 
                    key={item} 
                    keyText={item + ":"} 
                    valueText={obj[item]} 
                />
            );
        }
        return listComponent;
    }

    const handlePage = async() => {
        navigation.navigate(namePages.details, { id: dataPet.id })
    }

    const handleFavorite = () => setIsFavorite(!isFavorite);

    return (
        <CardStyle>
            <ImageStyle source={require("../../../assets/dog.jpeg")} />
            <ViewContent>
                <ViewStyle>
                    <ViewTextStyle>
                        { createElementText(dataPet) }
                    </ViewTextStyle>
                    <TouchableOpacity activeOpacity={0.3} onPress={handleFavorite}>
                        <AntDesign name={isFavorite ? "heart" : "hearto"} size={24} color={theme.color.danger} />
                    </TouchableOpacity>
                </ViewStyle>
                <ViewStyle>
                    <ButtonStyle onPress={handlePage}>
                        <ButtonTextStyle>Adotar</ButtonTextStyle>
                    </ButtonStyle>
                    <ButtonIconStyle>
                        <AntDesign name="down" size={24} color={theme.color.white_100} />
                    </ButtonIconStyle>
                </ViewStyle>
            </ViewContent>
        </CardStyle>
    )
}
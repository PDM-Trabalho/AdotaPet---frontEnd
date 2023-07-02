import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";

import dogIcon from "../../../assets/dog.png";
import catIcon from "../../../assets/cat.png";

import { 
    ViewStyle, 
    TitleStyle, 
    ViewIconStyle, 
    ViewTitleStyle, 
    ViewButtonStyle,
    ViewWelcomeStyle
} from "./style";
import namePages from "../../routes/namePages";

import Button from "../../components/Button";
import Title from "../../components/Title";

export default function Home() {
    const navigation = useNavigation();
    
    function handleNavigate(page: string) {
        navigation.navigate(page)
    } 

    return (
        <ViewStyle>
            <ViewWelcomeStyle>
                <ViewIconStyle>
                    <Image source={ dogIcon } />
                    <Image source={ catIcon } />
                </ViewIconStyle>
                <ViewTitleStyle>
                    <TitleStyle>BEM-VINDO AO ADOTAPET</TitleStyle>
                    <Title text="Faça um pet feliz!" />
                </ViewTitleStyle>
            </ViewWelcomeStyle>
            <ViewButtonStyle>
                <Button 
                    text="Entrar" 
                    callback={() => handleNavigate(namePages.login)} 
                />
                <Button 
                    text="Cadastrar" 
                    type="outline" 
                    callback={() => handleNavigate(namePages.register)} 
                />
            </ViewButtonStyle>
        </ViewStyle>
    )
}
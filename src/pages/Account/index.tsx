import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { 
    PageStyle, 
    ViewStyle, 
    ContentStyle, 
    ImageViewStyle, 
    ImageStyle,
    ViewIconStyle,
    ImageSmallIconStyle
} from "./style";
import { getUser } from "../../services/crudPet"
import userPerfilNotFound from "../../../assets/user.png";

import ViewInput from "../../components/ViewInput";
import Button from "../../components/Button";
import Input from "../../components/Input";

const schema = yup
  .object({
    name: yup.string().required("Envie o seu novo nome"),
    email: yup.string().email("Email inválido").required("Envie o seu novo e-mail"),
  })

export default function Account() {
    const [user, setUser] = useState({});

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const listController = [
        {nameId: "name", props: { placeholder: "Nome Completo", value: user?.name }}, 
        {nameId: "email", props: { placeholder: "E-mail", value: user?.email }},
        {nameId: "phone", props: { placeholder: "Telefone", type: "number", value: user?.phone }}, 
        {nameId: "birth", props: { placeholder: "Data de Nascimento", type: "number", value: user?.dateOfBirth }}
    ];

    useEffect(() => {
        const main = async() => {
            const objUser = await getUser();
            setUser(objUser);
        }

        main();
    }, [])

    return (
        <PageStyle>
            <ImageViewStyle>
                <View>
                    <ImageStyle source={user?.photo || userPerfilNotFound} />
                    <ViewIconStyle>
                        <ImageSmallIconStyle source={require("../../../assets/pen.svg")} />
                    </ViewIconStyle>
                </View>
            </ImageViewStyle>
            <ContentStyle>
                <ViewStyle>
                    {listController.map(({ nameId, props }, index) => (
                        <Controller 
                            key={ index }
                            name={ nameId }
                            control={ control }
                            render={({ field: { onChange } }) => (
                                <ViewInput 
                                    component={ <Input { ...props } onChangeText={onChange} editable={false} /> }
                                    error={ errors[nameId] }
                                />
                            )}
                        />
                    ))}
                </ViewStyle>

                <ViewStyle>
                    <Button type="danger" text="Sair" />
                    <Button type="outline" text="Apagar conta" />
                </ViewStyle>
            </ContentStyle>
        </PageStyle>
    )
}
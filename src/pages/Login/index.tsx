import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import * as yup from "yup";

import { PageStyle, FormStyle, ViewLink } from "./style"
import namePages from "../../routes/namePages";

import ViewLoginButton from "../../components/ViewLoginButton"
import Link from '../../components/Link';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ViewInput from "../../components/ViewInput";

import { login } from "../../services/login";

const schema = yup
  .object({
    email: yup.string().email("Email inválido").required("É nescessario enviar um e-mail"),
    password: yup.string().min(7, "A senha deve conter mais de 7 caracteres").required("É nescessario enviar uma senha forte"),
  })

export default function Login() {
    const [ linkVisible, setLinkVisible ] = useState(true)
    const navigation = useNavigation();
    const { control, handleSubmit, getValues, setError, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setLinkVisible(false));
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setLinkVisible(true));
    
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
      }, []);

    async function handleNavigate() {
        try {
            const obj = getValues();
            const { access } = await login(obj);
            navigation.navigate(namePages.search);
        } catch(e) {
            console.log(e)
            const error = { "message": "Email ou senha invalido" };
            setError("password", error);
            setError("email", error);
        }
    } 

    const listController = [
        {nameId: "email", props: { placeholder: "E-mail" }},
        {nameId: "password", props: { placeholder: "Senha", type: "password" }}, 
    ];

    return (
        <PageStyle>
            <Title text="Bem vindo de volta!" />
            <FormStyle>
                {listController.map(({ nameId, props }, index) => (
                    <Controller 
                        key={ index }
                        name={ nameId }
                        control={ control }
                        render={({ field: { onChange } }) => (
                            <ViewInput 
                                showTitle={ false }
                                component={ <Input { ...props } onChangeText={onChange} /> }
                                error={ errors[nameId] }
                            />
                        )}
                    />
                ))}
                
                <Link text="Esqueci a senha" page={ namePages.register } />
            </FormStyle>
            <Button text="Entrar" callback={ handleSubmit(handleNavigate) } />
            <ViewLoginButton />
            <ViewLink>
            { linkVisible ? (
                <Link text="Você não tem uma conta?" page={ namePages.register } />
            ) : <></> }
            </ViewLink>
        </PageStyle>
    )
}
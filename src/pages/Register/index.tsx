import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import * as yup from "yup";

import { PageStyle, FormStyle, ViewLink, ViewControllerStyle } from "./style"
import namePages from "../../routes/namePages";

import ViewLoginButton from "../../components/ViewLoginButton"
import ViewInput from "../../components/ViewInput";
import Button from '../../components/Button';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Link from '../../components/Link';

import { postUser, propsUser } from "../../services/crudUser";
import { getPortuguese } from "../../services/tradutor";

const schema = yup
  .object({
    username: yup.string().required("É nescessario enviar o seu nome"),
    email: yup.string().email("Email inválido").required("É nescessario enviar um e-mail"),
    password: yup.string().min(7, "A senha deve conter mais de 7 caracteres").required("É nescessario enviar uma senha forte"),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], "As senhas devem ser iguais").required("É nescessario confirma a senha")
  })

export default function Register() {
    const { control, handleSubmit, getValues, setError, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const [ linkVisible, setLinkVisible ] = useState(true)

    const navigation = useNavigation();

    async function handleNavigate() {
        try {
            const obj = getValues();
            const user = await postUser(obj);
            navigation.navigate(namePages.search, { userId: user.id });
        } catch(err) {
            const errors = err.response.data
            for (const field in errors) {
                // setError(field, getPortuguese(errors[field]))
                setError(field, "getPortuguese(errors[field])")
            }
        }
    } 

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setLinkVisible(false));
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setLinkVisible(true));
    
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
    }, []);

    const listController = [
        {nameId: "email", props: { placeholder: "E-mail" }},
        {nameId: "username", props: { placeholder: "Nome" }}, 
        {nameId: "password", props: { placeholder: "Senha", type: "password" }}, 
        {nameId: "password_confirmation", props: { placeholder: "Confirmar senha", type: "password" }}
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
            </FormStyle>
            <Button text="Cadastrar" callback={ handleSubmit(handleNavigate) } />
            <ViewLoginButton />
            <ViewLink>
                { linkVisible ? (
                    <Link text="Você tem uma conta?" page={ namePages.login } />
                ) : <></> }
            </ViewLink>
        </PageStyle>
    )
}
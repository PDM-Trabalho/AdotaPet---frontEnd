import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { PageStyle, FormStyle, ViewLink, ViewControllerStyle } from "./style"
import namePages from "../../routes/namePages";

import ViewLoginButton from "../../components/ViewLoginButton"
import ViewInput from "../../components/ViewInput";
import TextError from "../../components/TextError";
import Button from '../../components/Button';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Link from '../../components/Link';

const schema = yup
  .object({
    name: yup.string().required("É nescessario enviar o seu nome"),
    email: yup.string().email("Email inválido").required("É nescessario enviar um e-mail"),
    password: yup.string().min(7, "A senha deve conter mais de 7 caracteres").required("É nescessario enviar uma senha forte"),
    password_confirm: yup.string().oneOf([yup.ref('password'), null], "As senhas devem ser iguais").required("É nescessario confirma a senha")
  })

export default function Register() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate(namePages.search);
    } 

    const listController = [
        {nameId: "name", props: { placeholder: "Nome" } }, 
        {nameId: "email", props: { placeholder: "E-mail" }},
        {nameId: "password", props: { placeholder: "Senha", type: "password" }}, 
        {nameId: "password_confirm", props: { placeholder: "Confirmar senha", type: "password" }}
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
                <Link text="Você tem uma conta?" page={ namePages.login } />
            </ViewLink>
        </PageStyle>
    )
}
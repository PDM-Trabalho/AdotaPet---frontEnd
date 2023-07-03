import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { PageStyle, ViewButton, ViewInputStyle } from "./style";

import {
    objEspecie,
    objRace,
    objPorte,
    objSex,
} from "../../services/objSelect";

import InputNumber from "../../components/InputNumber";
import ViewInput from "../../components/ViewInput";
import ViewTitle from "../../components/ViewTitle";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Input from "../../components/Input";

const messageError = "Esse campo é requerido"

const schema = yup.object({
    especies: yup.string().notOneOf([undefined], messageError),
    // race: yup.string().notOneOf([undefined], messageError),
    porte: yup.string().notOneOf([undefined], messageError),
    sex: yup.string().notOneOf([undefined], messageError),
    heigth: yup.number().required(messageError).positive(),
    length: yup.number().required(messageError).positive(),
    // age: yup.number().required(messageError).integer().positive(),
})

export default function CreatePet() {
    const handlePhoto = () => console.log("Em construção");
    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm({
        resolver: yupResolver(schema),
    });

    const listObjSelect = [objEspecie, objRace, objPorte, objSex];
    const listStringInput = [
        { title: "Altura", nameId: "heigth" },
        { title: "Comprimento", nameId: "length" },
        { title: "Comprimento", nameId: "age" },
    ];

    const propsViewInput = [
        ...listObjSelect.map((obj) => ({
            title: obj.title,
            component: (
                <Controller
                    name={ obj.nameId }
                    control={ control }
                    render={({ field: { onChange } }) => (
                        <Select { ...obj } setValue={ onChange } />
                    )}
                />
            ),
            error: errors[obj.nameId]
        })),
        ...listStringInput.map(({ title, nameId }, index) => {
            const InputType = (index + 1) % 3 === 0 ? InputNumber : Input;
            const regex = /.*o$/;
            const vowel = regex.test(title) ? "o" : "a";
            const presentation = `${vowel} ${title.toLowerCase()}`;
            const error = errors[nameId];
            const component = (
                <Controller
                    name={ nameId }
                    control={ control }
                    render={({ field: { onChange } }) => (
                        <InputType
                            placeholder={ `Digite ${presentation} do pet` }
                            onChangeText={ onChange }
                            type="number"
                        />
                    )}
                />
            );
            return { title, component, error };
        }),
        {
            title: "Foto",
            component: (
                <Button
                    type="outline"
                    text="Escolher Imagem"
                    callback={handlePhoto}
                />
            ),
        },
    ];

    return (
        <PageStyle>
            <ViewTitle
                title="Agradecemos por você doar mais um animalzinho"
                subTitle="Estamos quase finalizando, verifique as informações abaixo e conclua a adoção."
            />

            <ViewInputStyle>
                {propsViewInput.map((props, index) => (
                    <ViewInput { ...props } key={ index } />
                ))}
            </ViewInputStyle>

            <ViewButton>
                <Button
                    text="Doar o pet"
                    callback={handleSubmit(() => console.log(getValues("age")))}
                />
            </ViewButton>
        </PageStyle>
    );
}
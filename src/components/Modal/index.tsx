import { useForm, Controller } from "react-hook-form";
import { Modal } from "react-native";

import { 
    ViewModalStyle, 
    ViewTextStyle, 
    ViewSelectStyle,
    TextStyle,
    PageModalStyle
} from "./style";

import { 
    objEspecie, 
    objPorte, 
    objSex,
    objAge
} from "../../services/objSelect"

import ViewInput from "../ViewInput";
import Button from "../Button";
import Select from "../Select";

interface ModalProps {
    visible: boolean,
    buttonCallback: () => void
}

export default function ModalFunc({ visible, buttonCallback }: ModalProps) {
    const { control, handleSubmit } = useForm();

    const listObjSelect = [objEspecie, objPorte, objSex, objAge];
    const listComponents = listObjSelect.map(obj => (
        <Controller
            name={ obj.nameId }
            control={ control }
            render={({ field: { onChange } }) => (
                <ViewInput 
                    primary showTitle
                    title={ obj.title }
                    component={ <Select {...obj} setValue={onChange} /> } 
                />
            )}
        />
    ))

    return (
        <Modal
            animationType="fade"
            transparent={ true }
            visible={ visible }
        >
            <PageModalStyle>
                <ViewModalStyle>
                    <ViewTextStyle>
                        <TextStyle>Filtro</TextStyle>
                    </ViewTextStyle>

                    <ViewSelectStyle>{ listComponents }</ViewSelectStyle>
                    
                    <Button text="Aplicar" callback={ handleSubmit(buttonCallback) } />
                </ViewModalStyle>
            </PageModalStyle>
        </Modal>
    )
}
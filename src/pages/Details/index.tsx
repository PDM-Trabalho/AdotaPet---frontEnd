import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { 
    getPetAndUser 
} from "../../services/crudPet";
import { 
    PageStyle, 
    ViewImageStyle, 
    ViewMainStyle, 
    ViewContentStyle, 
    ViewGapContentStyle,
    ImageStyle,
    TitleStyled,
    ViewMapStyle,
} from "./style";

import Map from "../../components/Map";
import Button from "../../components/Button";
import ViewTitle from "../../components/ViewTitle";
import TextKeyValue from "../../components/TextKeyValue";

export default function Details() {
    const route = useRoute();
    const { userId } = route.params || 1; // Lembrar de retirar esse 1 depois

    const [data, setData] = useState<any>({});

    useEffect(() => {
        const main = async () => {
            const response = await getPetAndUser(id);
            setData(response);
        }

        main();
    }, []);

    const dataDonor = {
        "Nome": data.donor?.name,
        "Endereço": data.donor?.address,
        "Cidade/Estado": data.donor?.cityState,
        "E-mail": data.donor?.email,
        "Telefone": data.donor?.phone,
    }

    const dataPet = {
        "Espécie": data?.species,
        "Raça": data?.race,
        "Porte": data?.carrying,
        "Sexo": data?.sex,
        "Idade": data?.age,
        "Medidas": `A: ${data.measurements?.height} | C: ${data.measurements?.length}`,
        "Peso": data?.weight
    }

    const generateElementText = (data: any) => {
        let listComponents = [];
        let cont = 0;

        for (const item in data) {
            listComponents.push(<TextKeyValue
                key={cont}
                keyText={item + ":"}
                valueText={data[item]}
                primary
            />);
            cont++;
        }

        return listComponents;
    }

    const photoUrl = data?.photo;
    const fileNotFound = "../../../assets/not-found.png";
    const photoSource = photoUrl ? { uri: photoUrl } : require(fileNotFound);

    const positionMap = {
        latitude: 0,
        longitude: 0
    }

    return (
        <PageStyle>
            <ViewTitle 
                title="Seu amiguinho está a um clique!"
                subTitle="Estamos quase finalizando, verifique as informações abaixo e conclua a adoção."
            />

            <ViewMainStyle>
                <ViewImageStyle>
                    <ImageStyle 
                        source={ photoSource }
                    />
                </ViewImageStyle>

                <ViewContentStyle>
                    <ViewGapContentStyle>
                        <TitleStyled>Sobre o Doador</TitleStyled>
                        { generateElementText(dataDonor) }
                    </ViewGapContentStyle>

                    <ViewGapContentStyle>
                        <TitleStyled>Sobre o Pet</TitleStyled>
                        { generateElementText(dataPet) }
                    </ViewGapContentStyle>
                </ViewContentStyle>

                <Map position={positionMap} />

                <Button text="Adotar" callback={() => console.log("Em construção")} />
            </ViewMainStyle>
        </PageStyle>
    )
}
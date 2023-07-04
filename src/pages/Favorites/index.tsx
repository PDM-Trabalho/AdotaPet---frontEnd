import { PageStyle } from "../style";

import Title from "../../components/Title";
import Card from "../../components/Card";

const pet = {
    carrying: "Médio",
    species: "Cachorro",
    race: "Pug",
    sex: "Macho",
    age: "3 anos",
    measurements: {
        height: "60 cm",
        length: "90 cm",
        width: "30 cm"
    },
    weight: "25 kg"
}

export default function Favorites() {
    return (
        <PageStyle>
            <Title text="Pagina em Construção" />
            <Card data={pet} />
        </PageStyle>
    )
}
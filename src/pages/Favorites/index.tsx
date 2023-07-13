import { useEffect, useState } from "react";

import { getUserIdStorage } from "../../services/storage";
import { getPetsFavorite } from "../../services/crudPet";
import { PageStyle } from "../style";

import Title from "../../components/Title";
import Card from "../../components/Card";

const userId = getUserIdStorage();

export default function Favorites() {
    const [listPets, setListPets] = useState([]);

    useEffect(() => {
        const main = async () => {
            try {
                const objListPets = await getPetsFavorite(userId);
                setListPets(objListPets);
            } catch (err) {
                console.error(err.response.status);
            }
        };

        main();
    }, []);

    return (
        <PageStyle>
            <Title text="Pagina em Construção" />
            {listPets.map((pet) => (
                <Card data={pet} />
            ))}
        </PageStyle>
    );
}

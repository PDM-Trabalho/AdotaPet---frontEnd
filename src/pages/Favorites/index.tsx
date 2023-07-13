import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";

import { getPetsFavorite } from "../../services/crudPet";
import { PageStyle } from "../style";

import Title from "../../components/Title";
import Card from "../../components/Card";

const userId = AsyncStorage.getItem("userId");

export default function Favorites() {
    const [listPets, setListPets] = useState([])

    useEffect(() => {
        const main = async () => {
            try {
                const objListPets = await getPetsFavorite(userId);
                setListPets(objListPets);
            } catch (err) {
                console.error(err.response.status);
            }
        }
    
        main()
    }, [])

    return (
        <PageStyle>
            <Title text="Pagina em Construção" />
            <Card data={pet} />
        </PageStyle>
    )
}
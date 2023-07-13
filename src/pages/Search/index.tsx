import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from "react";

import { PageStyle } from "../style";
import { getPets } from "../../services/crudPet";

import Title from "../../components/Title";
import Modal from "../../components/Modal";
import SearchBar from "../../components/SearchBar";

export default function Search() {
    const [modalVisible, setModalVisible] = useState(false);
    const [listPets, setListPets] = useState([])

    const userId = AsyncStorage.getItem("userId");

    const handleFilter = () => {
        setModalVisible(!modalVisible);
    }
    
    const handleSearch = async (textSearch: string) => {
        try {
            const objListPets = await getPets(userId, textSearch);
            setListPets(objListPets);
        } catch (err) {
            console.error(err.response.status)
        }
    }

    return (
        <PageStyle>
            <SearchBar callbackFilter={() => setModalVisible(true)} />
            <Title text="Pagina em Construção" />
            {/* { listPets.map() } */}
            <Modal
                visible={modalVisible}
                buttonCallback={handleFilter}
            />
        </PageStyle>
    )
}
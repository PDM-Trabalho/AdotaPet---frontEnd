import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import { PageStyle } from "../style";

import Title from "../../components/Title";
import Modal from "../../components/Modal";
import SearchBar from "../../components/SearchBar";

export default function Search() {
    const [modalVisible, setModalVisible] = useState(false);

    const handleFilter = () => {
        setModalVisible(!modalVisible);
    }

    return (
        <PageStyle>
            <SearchBar callbackFilter={() => setModalVisible(true)} />
            <Title text="Pagina em Construção" />
            <Modal
                visible={modalVisible}
                buttonCallback={handleFilter}
            />
        </PageStyle>
    )
}
import animals from "../data/animals.json";
import race from "../data/race.json";

export const objEspecie = { 
    title: "Espécie", 
    nameId: "especies",
    data: animals.especies, 
    placeholder: "Selecione a espécie" 
}

export const objRace = {
    title: "Raça", 
    nameId: "race",
    data: [], 
    placeholder: "Selecione a raça" 
}

export const objPorte = {
    title: "Porte",
    nameId: "porte", 
    data: animals.porte, 
    placeholder: "Selecione o porte" 
}

export const objSex = {
    title: "Sexo", 
    nameId: "sex",
    data: animals.sex, 
    placeholder: "Selecione o sexo"
}

export const objAge = {
    title: "Idade", 
    nameId: "age",
    data: animals.age, 
    placeholder: "Selecione a idade"
}
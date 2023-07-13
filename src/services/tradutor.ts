export const getPortuguese = (phrase) => {
    const tradutor = {
        "A user with that username already exists.": "Um usuário com esse username já existe"
    };

    const portguese = tradutor[phrase];
    return portguese ? portguese : phrase;
}
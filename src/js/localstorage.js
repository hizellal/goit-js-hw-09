export const save = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
        console.log(err);
    }
}

export const load = key => {
    try {
        const dataFormLS = localStorage.getItem(key);

        return dataFormLS === null ? undefined : JSON.parse(dataFormLS)
    } catch (err) {
        console.log(err);
    }
}

export default {
    saveToLS: save,
    loadFromLS: load
}
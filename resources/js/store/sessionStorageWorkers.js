export const saveToSessionStorage = (key, state) => {
    try {
        sessionStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
        console.error(e);
    }
};

export const loadFromSessionStorage = (key) => {
    try {
        const stateStr = sessionStorage.getItem(key);
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

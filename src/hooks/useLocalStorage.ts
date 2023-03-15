import { useState, useEffect } from "react";

function useLocalStorage(key: any, initialValue: any) {
    const [value, setValue] = useState(() => {
        if (typeof window !== "undefined") {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        return initialValue;
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;

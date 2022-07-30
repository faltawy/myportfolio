const { useState, default: React, useEffect } = require("react");

const DARK = 'DARK';
const checkLocalStorage = (action) => {
    if (typeof window !== 'undefined') {
        return action()
    }
}

const get = (key) => (localStorage.getItem(key))
const set = (key, val) => {
    localStorage.setItem(key, val)
    return val
}
const getOrDefault = (key, def) => {
    if (get(key)) {
        return get(key)
    } else {
        return set(key, def)
    }
}
const changeMcpTheme = (dark) => {
    const html = document.documentElement;
    if (dark) {
        html.classList.add('dark')
    } else {
        html.classList.remove('dark')
    }
}

export default function useTheme() {
    const [theme, changeTheme] = useState()
    function toggleTheme() {
        changeTheme(!theme)
        set(DARK, !theme)
        changeMcpTheme(!theme)
    }
    useEffect(() => {
        changeTheme(checkLocalStorage(() => { const dark = getOrDefault(DARK, false);console.log('dark:',dark); ;changeMcpTheme(dark) }))
    }, [])
    return [theme, toggleTheme]
}

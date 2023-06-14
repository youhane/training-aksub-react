import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [nama, setNama] = useState("Andi");
    const [work, setWork] = useState("Software Engineer");
    const [email, setEmail] = useState("email@mail.com");

    const bio = [
        {
            label: "Work",
            value: work,
            onChange: setWork,
        },
        {
            label: "Email",
            value: email,
            onChange: setEmail,
        },
    ]

    function changeNama(nama) {
        setNama(nama);
    }

    function updateBio() {
        console.log("update bio")
        setWork(work);
        setEmail(email);
    }

    return (
        <AppContext.Provider value={{ nama, setNama, changeNama, bio, updateBio, work, email}}>
            {children}
        </AppContext.Provider>
    );
}
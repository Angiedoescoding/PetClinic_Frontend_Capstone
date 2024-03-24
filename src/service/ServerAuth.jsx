import axios from 'axios';
import { createContext, useContext, useMemo } from 'react';

const AppContext = createContext();

export const fetchDoctors = ({ children }) => {

    const vets = async (formData) => {
        let res = await axios({
            method: 'POST',
            url: 'http://localhost:3000/vets',
            data: formData,
        });
    };

    const services = async (formData) => {
        let res = await axios({
            method: 'POST',
            url: 'http://localhost:3000/services',
            data: formData,
        });
    };

    const value = useMemo(
        () => ({
            vets,
            services,
        }), []);

            
        return <AppContext.Provider value={value}>{children}</AppContext.Provider>;

    
};

export const useVetsList = () => {
    return useContext(AppContext);
};

// unsure if this is correct file and if I need it in general since I have Doctors component fetching data successfully. CHECK WITH DYLAN
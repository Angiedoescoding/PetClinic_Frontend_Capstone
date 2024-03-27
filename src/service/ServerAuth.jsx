import { useEffect, useState } from 'react';
// import dotenv from 'dotenv';
// dotenv.config();

const ServerAuth = () => {

    // const apiKey = REACT_APP_MY_RG_KEY; -- when I replace the actual key here with REACT_APP_MY_RG_KEY, I have troubles with fetching data in json and populating it ti the user
    const apiKey = 'cebzAIkd';
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const response = await fetch(
                    'https://api.rescuegroups.org/v5/public/animals/search/available/cats/haspic/?sort=random&limit=3',
                    {
                        method: 'POST',
                        headers: {
                            Authorization: apiKey,
                            'Content-Type': 'application/vnd.api+json',
                        },
                    }
                    );
            
                    if (!response.ok) {
                        throw new Error('Failed to fetch animals');
                    }
            
                    const data = await response.json();
                    setAnimals(data.data);
                } catch (error) {
                    console.error('Error fetching animals:', error);
            }
        };
    
        fetchAnimals();
    }, []);
    

    return (
        <div className="apiFetch">
            {/* <div dangerouslySetInnerHTML={{ __html: artwork.description }} /> */}
            <h2>Available for Adoption Pets</h2>
            <ul>
                {animals.map((animal, index) => (
                    <li key={index}>
                        <h3>Name: {animal.attributes.name}</h3>
                        <p >{animal.attributes.descriptionText}</p>
                    </li>
                ))}
            </ul>
    </div>
);
};


export default ServerAuth



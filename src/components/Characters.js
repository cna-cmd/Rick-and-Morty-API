import React, { useEffect, useState } from "react";

const Characters = () => {

    const [characters, setCharacters] = useState([])

    useEffect (() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        // .then(data => console.log(data.results))
        .then(data => setCharacters(data.results))
    }, [])

    return (
        <div>
            <div className="container">
                <div className="characters">
                    {
                        characters.map(item => (
                            <div className="box" key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div className="character">
                                    <h3 className="name">{item.name}</h3>
                                    <p className="specie">{item.species}</p>
                                    <p className="status">{item.status}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )

}
export default Characters;
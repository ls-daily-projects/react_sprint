import React from "react"

const Character = ({ name, gender, planet }) => {
    const pronoun = gender === "male" ? "dude" : "chick"
    const bio = `Some ${pronoun} from the ${planet.climate} planet ${
        planet.name
    }`
    return (
        <li>
            <h3>{name}</h3>
            <p>{bio}</p>
        </li>
    )
}

export default Character

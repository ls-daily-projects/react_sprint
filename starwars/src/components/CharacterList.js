import React from "react"
import uuid from "uuid/v4"

import Character from "./Character"

const CharacterList = ({ characters }) => {
    return (
        <ul>
            {characters.map(character => (
                <Character key={uuid()} {...character} />
            ))}
        </ul>
    )
}

export default CharacterList

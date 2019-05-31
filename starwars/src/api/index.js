const BASE_URL = "https://swapi.co/api"

class Character {
    constructor({ name, homeworld, gender }) {
        this.name = name
        this.gender = gender.toLowerCase()
        this.planet = homeworld
    }
}

const makeGETrequest = url => fetch(url).then(res => res.json())

// https://swapi.co/documentation#people
const getCharacters = (cb, page = 1) => {
    const charactersEndpoint = `${BASE_URL}/people/?page=${page}`

    makeGETrequest(charactersEndpoint)
        .then(({ count, next, previous, results }) => {
            const characters = results.map(data => new Character(data))

            characters.forEach(({ planet }) => {
                // https://swapi.co/documentation#planet
                makeGETrequest(planet).then(({ name, climate }) => {
                    cb(
                        characters.map(character => ({
                            ...character,
                            planet: {
                                name,
                                climate
                            }
                        })),
                        count
                    )
                })
            })
        })
        .catch(err => {
            throw new Error(err)
        })
}

export { getCharacters }

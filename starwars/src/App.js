import React, { Component } from "react"

import "./App.scss"

import { getCharacters } from "./api"

import LoadingIndicator from "./components/LoadingIndicator"
import Header from "./components/Header"
import CharacterList from "./components/CharacterList"
import PaginationButtonRow from "./components/PaginationButtonRow"

class App extends Component {
    state = {
        characters: [],
        totalCount: 0,
        isLoading: true
    }

    componentDidMount() {
        this.loadPage()
    }

    loadPage(page) {
        getCharacters((characters, totalCount) => {
            this.setState({
                characters,
                totalCount,
                isLoading: false
            })
        }, page)
    }

    render() {
        return (
            <div className="container">
                {this.state.isLoading && <LoadingIndicator />}

                <Header />
                <CharacterList characters={this.state.characters} />
                <PaginationButtonRow
                    totalButtons={this.state.totalCount}
                    handleClick={this.loadPage.bind(this)}
                />
            </div>
        )
    }
}

export default App

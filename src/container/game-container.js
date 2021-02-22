import React, { Component } from 'react';
import GameList from '../components/games/game-list';
import GameViewer from '../components/games/game-viewer';

export default class GameContainer extends Component {
    
    state = {
        games: [],
        game: {},
        brandValue: 'Foxy Bingo',
        sortValue: '',
        inputValue: '',
        isGameViewOn: false
    }

    loadFoxyBingo = () => {
        fetch('http://localhost:5000/games/fb/api')
        .then(res => res.json())
        .then(gamesData => {
            console.log('Foxy Bingo API');
            this.setState({
                games: gamesData
            })
        })
    }

    loadFoxyGames = () => {
        fetch('http://localhost:5000/games/fg/api')
        .then(res => res.json())
        .then(gamesData => {
            console.log('Foxy Games API');
            this.setState({
                games: gamesData
            })
        })
    }

    loadCheekyCasino = () => {
        fetch('http://localhost:5000/games/cc/api')
        .then(res => res.json())
        .then(gamesData => {
            console.log('Cheeky Casino API');
            this.setState({
                games: gamesData
            })
        })
    }

    loadGalaCasino = () => {
        fetch('http://localhost:5000/games/gc/api')
        .then(res => res.json())
        .then(gamesData => {
            console.log('Gala Casino API');
            this.setState({
                games: gamesData
            })
        })
    }

    loadGalaBingo = () => {
        fetch('http://localhost:5000/games/gb/api')
        .then(res => res.json())
        .then(gamesData => {
            console.log('Gala Bingo API');
            this.setState({
                games: gamesData
            })
        })
    }

    loadGalaSpins = () => {
        fetch('http://localhost:5000/games/gs/api')
        .then(res => res.json())
        .then(gamesData => {
            console.log('Gala Spins API');
            this.setState({
                games: gamesData
            })
        })
    }

    componentDidMount() {
        if (this.state.brandValue === "Foxy Bingo") {
            this.loadFoxyBingo()
        } else if (this.state.brandValue === "Foxy Games") {
            this.loadFoxyGames()
        } else if (this.state.brandValue === "Cheeky Casino") {
            this.loadCheekyCasino()
        } else if (this.state.brandValue === "Gala Casino") {
            this.loadGalaCasino()
        } else if (this.state.brandValue === "Gala Bingo") {
            this.loadGalaBingo()
        } else if (this.state.brandValue === "Gala Spins") {
            this.loadGalaSpins()
        }

    }

    handleBrandOnClick = (event) => {
        console.log('Brand working', event.target.value)

        if (event.target.value === "Foxy Bingo") {
            this.loadFoxyBingo()
        } else if (event.target.value === "Foxy Games") {
            this.loadFoxyGames()
        } else if (event.target.value === "Cheeky Casino") {
            this.loadCheekyCasino()
        } else if (this.state.brandValue === "Gala Casino") {
            this.loadGalaCasino()
        } else if (this.state.brandValue === "Gala Bingo") {
            this.loadGalaBingo()
        } else if (this.state.brandValue === "Gala Spins") {
            this.loadGalaSpins()
        }

        this.setState({
            brandValue: event.target.value
        })
        console.log(this.state.games)
    }

    handleSortGames = (event) => {
        // console.log("sort button", this.state.sortValue)
        this.setState({
            sortValue: event.target.value
        })
    }

    sortGames = (games) => {
        if (this.state.sortValue === "Name") {
            return [...games].sort((a,b) => {
                if(a.name > b.name) {
                    return 1
                } else if (a.name < b.name) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (this.state.sortValue === "Provider") {
            return [...games].sort((a,b) => {
                if(a.provider > b.provider) {
                    return 1
                } else if (a.provider < b.provider) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (this.state.sortValue === "Game") {
            return [...games].sort((a,b) => {
                if(a.game > b.game) {
                    return 1
                } else if (a.game < b.game) {
                    return -1
                } else {
                    return 0
                }
            })
        } else {
            return games
        }
    }

    handleGameView = (gameItem) => {
        console.log("click", gameItem)
        this.setState({
            game: gameItem,
            isGameViewOn: !this.state.isGameViewOn
        })
    }

    handleGameGoBack = () => {
        this.setState({
            game: {},
            isGameViewOn: false
        })
    }

    viewDetails = (gameItem) => {
        console.log("view details", gameItem)
        this.setState({
            game: gameItem
        })
    }

    gameFilterOnChange = (event) => {
        console.log("Hi from onChange", event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {

        const filteredGames = this.state.games.filter(game => {
            return game.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
        })

        return (
            <div>
                <div className="add-space">
                    <div className="btn-group col-md-12" role="group" aria-label="brand buttons">
                        <button type="button" className="btn btn-outline-primary" onClick={this.handleBrandOnClick} value="Foxy Bingo">Foxy Bingo</button>
                        <button type="button" className="btn btn-outline-primary" onClick={this.handleBrandOnClick} value="Foxy Games">Foxy Games</button>
                        <button type="button" className="btn btn-outline-primary" onClick={this.handleBrandOnClick} value="Cheeky Casino">Cheeky Casino</button>
                        <button type="button" className="btn btn-outline-primary" onClick={this.handleBrandOnClick} value="Gala Casino">Gala Casino</button>
                        <button type="button" className="btn btn-outline-primary" onClick={this.handleBrandOnClick} value="Gala Bingo">Gala Bingo</button>
                        <button type="button" className="btn btn-outline-primary" onClick={this.handleBrandOnClick} value="Gala Spins">Gala Spins</button>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label>Sort Games</label>
                        <select name="sortValue" className="form-control" onChange={this.handleSortGames}>
                            <option value="All">All</option>
                            <option value="Name">Name</option>
                            <option value="Game">Game</option>
                            <option value="Provider">Provider</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="search">Search Name</label>
                        <input type="text" className="form-control" value={this.inputValue} onChange={this.gameFilterOnChange} />
                    </div>
                </div>
                {
                    this.state.isGameViewOn ?
                    <GameViewer 
                        game={this.state.game}
                        handleGameGoBack={this.handleGameGoBack}
                        viewDetails={this.viewDetails}
                    />
                    :
                    <GameList 
                        games={this.sortGames(filteredGames)}
                        handleGameView={this.handleGameView}
                        gameFilterOnChange={this.gameFilterOnChange} 
                        inputValue={this.state.inputValue} 
                    />
                }
            </div>
        )
    }
}
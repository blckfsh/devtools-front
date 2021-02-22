import React from 'react';
import GameItem from './game-item';

const GameList = (props) => {
    const keyPostfix = 1;
    return (
        <div>
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr className="thead-dark">
                            <th scope="col">Name</th>
                            <th scope="col">Game</th>
                            <th scope="col">Provider</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                props.games.map((game, index) => {
                                    return <GameItem game={game} key={index} handleGameView={props.handleGameView} />
                                })
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GameList
import React from 'react';
import GameCard from './game-card';

const GameViewer = (props) => {

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                <GameCard 
                    game={props.game} 
                    handleGameGoBack={props.handleGameGoBack} 
                    viewDetails={props.viewDetails}
                />
                <div className="card-body">
                    <button type="button" className="btn btn-primary btn-md" onClick={props.handleGameGoBack}>Back</button>
                </div>
        </div>
            </div>
        </div>
    )
}


export default GameViewer
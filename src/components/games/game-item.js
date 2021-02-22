import React from 'react';

const GameItem = (props) => {
    const { game, name, provider } = props.game

    return (
        <>
            <tr>
                <td scope="row">{name}</td>
                <td scope="row">{game}</td>
                <td scope="row"><span className={
                        provider === "Blueprint" ? "badge badge-primary" :
                        provider === "CORAL" ? "badge badge-primary" : 
                        provider === "Evolution" ? "badge badge-secondary" : 
                        provider === "GAMEIOM" ? "badge badge-secondary" : 
                        provider === "Gamevy" ? "badge badge-success" :
                        provider === "INHOUSE" ? "badge badge-danger" :
                        provider === "MICROGAMING" ? "badge badge-danger" :
                        provider === "NYS" ? "badge badge-warning" :
                        provider === "Novomatic" ? "badge badge-warning" :
                        provider === "PLAYNGO" ? "badge badge-info" :
                        provider === "PRAGMATICPLAY" ? "badge badge-info" :
                        provider === "Pairplay" ? "badge badge-light" :
                        provider === "Playtech" ? "badge badge-light" :
                        provider === "RedTiger" ? "badge badge-dark" :
                        provider === "SKYWIND" ? "badge badge-dark" :
                        provider === "WMS" ? "badge badge-primary" :
                    "badge badge-secondary"
                    }>{provider}</span></td>
                <td scope="row">
                    <button 
                        type="button" 
                        className="btn btn-outline-primary btn-sm" 
                        onClick={() => props.handleGameView(props.game)}
                    >
                        details
                    </button>
                </td>
            </tr>
        </>
    )
}

export default GameItem
import React from 'react';
import { Link } from 'react-router-dom';

const PreviewItem = (props) => {
    const { _id, desc, brand, url, status } = props.preview

    return (
        <>
            <tr>
                <td scope="row"><a href={url} target="_blank" rel="noopener noreferrer" tooltip={url}><strong>{desc}</strong></a></td>
                <td scope="row"><span className={brand === "Foxy Games" ? "badge badge-warning": brand === "Foxy Bingo" ? "badge badge-primary" : brand === "Cheeky Casino" ? "badge badge-danger" : brand === "Gala Bingo" ? "badge badge-info" : brand === "Gala Spins" ? "badge badge-light" : brand === "Gala Casino" ? "badge badge-dark" : "badge badge-default"}>{brand}</span></td>                
                <td scope="row" align="center"><div className={status === "active" ? "status status-success" : "status status-danger"}>&nbsp;</div></td>
                <td scope="row">                    
                    <Link className="btn btn-outline-primary btn-sm" to={"/previews/edit/" + _id}>edit</Link>
                </td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-outline-danger btn-sm" 
                        onClick={() => props.deletePreview(_id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    )
}

export default PreviewItem
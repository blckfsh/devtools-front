import React from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const FilterItem = (props) => {
    const { _id, desc, brand, value, status } = props.filter

    return (
        <>
            <tr>
                <td scope="row">
                    <CopyToClipboard text={value}>
                        <a href="#" className="btn btn-outline-primary btn-sm">{desc}</a>
                    </CopyToClipboard>
                </td>
                <td scope="row"><span className={brand === "Foxy Games" ? "badge badge-warning": brand === "Foxy Bingo" ? "badge badge-primary" : brand === "Cheeky Casino" ? "badge badge-danger" : "badge badge-dark"}>{brand}</span></td>                
                <td scope="row" align="center"><div className={status === "active" ? "status status-success" : "status status-danger"}>&nbsp;</div></td>
                <td scope="row">                    
                    <Link className="btn btn-outline-primary btn-sm" to={"/filters/edit/" + _id}>edit</Link>
                </td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-outline-danger btn-sm" 
                        onClick={() => props.deleteFilter(_id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    )
}

export default FilterItem
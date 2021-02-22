import React from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const AccountItem = (props) => {
    const { _id, username, password, segment, brand, status } = props.account

    return (
        <>
            <tr>
                <td scope="row">
                    <CopyToClipboard text={username}>
                        <a href="#" className="btn btn-outline-primary btn-sm">{username}</a>
                    </CopyToClipboard>
                </td>
                <td scope="row">
                    <CopyToClipboard text={password}>
                        <a href="#" className="btn btn-outline-primary btn-sm">{password}</a>
                    </CopyToClipboard>
                </td>
                <td scope="row">{segment}</td>
                <td scope="row"><span className={brand === "Foxy Games" ? "badge badge-warning": brand === "Foxy Bingo" ? "badge badge-primary" : brand === "Cheeky Casino" ? "badge badge-danger" : brand === "Gala Bingo" ? "badge badge-info" : brand === "Gala Spins" ? "badge badge-light" : brand === "Gala Casino" ? "badge badge-dark" : "badge badge-default"}>{brand}</span></td>                
                <td scope="row" align="center"><div className={status === "active" ? "status status-success" : "status status-danger"}>&nbsp;</div></td>
                <td scope="row">                    
                    <Link className="btn btn-outline-primary btn-sm" to={"/accounts/edit/" + _id}>edit</Link>
                </td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-outline-danger btn-sm" 
                        onClick={() => props.deleteAccount(_id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    )
}

export default AccountItem
import React from 'react';
import AccountItem from './account-item';

const AccountList = (props) => {
    return (
        <div>
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            <th scope="col">Segment</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Status</th>
                            <th scope="col" colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                props.accounts.map(account => {
                                    return <AccountItem account={account} key={account._id} handleAccountView={props.handleAccountView} deleteAccount={props.deleteAccount} />
                                })
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AccountList
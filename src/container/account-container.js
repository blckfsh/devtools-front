import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AccountList from '../components/accounts/account-list';

export default class AccountContainer extends Component {

    state = {
        accounts: [],
        account: {},
        sortValue: '',
        inputValue: '',
        isAccountViewOn: false,
        copyToClipboard: false
    }

    componentDidMount() {
        fetch('http://localhost:5000/accounts/')
        .then(res => res.json())
        .then(accountsData => {
            this.setState({
                accounts: accountsData
            })
        })
    }

    handleSortAccounts = (event) => {
        // console.log("sort button", this.state.sortValue)
        this.setState({
            sortValue: event.target.value
        })
    }

    sortAccounts = (accounts) => {
        if (this.state.sortValue === "Username") {
            return [...accounts].sort((a,b) => {
                if(a.username > b.username) {
                    return 1
                } else if (a.username < b.username) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (this.state.sortValue === "Password") {
            return [...accounts].sort((a,b) => {
                if(a.password > b.password) {
                    return 1
                } else if (a.password < b.password) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (this.state.sortValue === "Segment") {
            return [...accounts].sort((a,b) => {
                if(a.segment > b.segment) {
                    return 1
                } else if (a.segment < b.segment) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (this.state.sortValue === "Brand") {
            return [...accounts].sort((a,b) => {
                if(a.brand > b.brand) {
                    return 1
                } else if (a.brand < b.brand) {
                    return -1
                } else {
                    return 0
                }
            })
        } else {
            return accounts
        }
    }

    handleAccountView = (accountItem) => {
        console.log("click", accountItem)
        this.setState({
            account: accountItem,
            isAccountViewOn: !this.state.isAccountViewOn
        })
    }

    handleAccountGoBack = () => {
        this.setState({
            account: {},
            isAccountViewOn: false
        })
    }

    accountOnChange = (event) => {
        console.log("Hi from onChange", event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }

    deleteAccount = (id) => {
        console.log("Delete Account")
        axios.delete('http://localhost:5000/accounts/delete/' + id)
                .then(res => console.log(res.data));

        this.setState({
            accounts: this.state.accounts.filter(account => account._id !== id)
        })
    }

    render() {
        
        const filteredAccounts = this.state.accounts.filter(account => {
            return account.username.toLowerCase().includes(this.state.inputValue.toLowerCase())
        })

        return (
            <div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label>Sort Accounts: </label>
                        <select name="sortValue" className="form-control" onChange={this.handleSortAccounts}>
                            <option value="All">All</option>
                            <option value="Username">Username</option>
                            <option value="Password">Password</option>
                            <option value="Segment">Segment</option>
                            <option value="Brand">Brand</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="search">Search Username: </label>
                        <input type="text" className="form-control" value={this.inputValue} onChange={this.accountOnChange} />
                    </div>
                    <div className="col-md-6">
                        <Link to="/accounts/create" className="float-md-right btn btn-primary btn-md">Create Test Accounts</Link>
                    </div>
                </div>                   
                <AccountList 
                    accounts={this.sortAccounts(filteredAccounts)}
                    handleAccountView={this.handleAccountView}
                    accountOnChange={this.accountOnChange} 
                    deleteAccount={this.deleteAccount}
                    inputValue={this.state.inputValue} 
                />        
            </div>
        )
    }
}
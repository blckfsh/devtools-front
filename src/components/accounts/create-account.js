import React, { Component } from 'react';
import axios from 'axios';

export default class CreateAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            segment: '',
            brand: '',
            status: 'active'
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeSegment = this.onChangeSegment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {

    }

    onChangeUsername(e) {
        this.setState({ username: e.target.value });
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value });
    }

    onChangeSegment(e) {
        this.setState({ segment: e.target.value });
    }

    onChangeBrand(e) {
        this.setState({ brand: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        let { username, password, segment, brand, status } = this.state;

        const newAccount = {
            username: username,
            password: password,
            segment: segment,
            brand: brand,
            status: status
        }

        console.log(newAccount);
        axios.post('http://localhost:5000/accounts/create', newAccount)
                .then(res => console.log(res.data));

        window.location = '/accounts';
    }

    render() {
        return (
            <div>
                <h3>Create New Account</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Username: </label>
                            <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Password: </label>
                            <input type="text" required className="form-control" value={this.state.password} onChange={this.onChangePassword} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Segment: </label>
                            <input type="text" required className="form-control" value={this.state.segment} onChange={this.onChangeSegment} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Brand: </label>
                            <select required className="form-control custom-select mr-sm-2" onChange={this.onChangeBrand}>
                            <option value="Select a value">Choose a brand</option>
                                <option value="All">All</option>
                                <option value="Foxy Bingo">Foxy Bingo</option>
                                <option value="Foxy Games">Foxy Games</option>
                                <option value="Cheeky Casino">Cheeky Casino</option>
                                <option value="Gala Bingo">Gala Bingo</option>
                                <option value="Gala Spins">Gala Spins</option>
                                <option value="Gala Casino">Gala Casino</option>
                            </select>
                        </div>
                    </div>                        
                    <input type="submit" className="btn btn-primary" value="Create Account" />
                </form>
            </div>
        )
    }
}
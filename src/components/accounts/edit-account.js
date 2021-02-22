import React, { Component } from 'react';
import axios from 'axios';

export default class EditAccount extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeSegment = this.onChangeSegment.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            username: '',
            password: '',
            segment: '',
            brand: '',            
            status: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/accounts/'+ this.props.match.params.id)
                .then(res => {

                    let { username, password, brand, segment, status } = res.data;
                    this.setState({
                        username: username,
                        password: password,
                        brand: brand,
                        segment: segment,
                        status: status
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onChangeBrand(e) {
        this.setState({
            brand: e.target.value
        })
    }

    onChangeSegment(e) {
        this.setState({
            segment: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        let { username, password, brand, segment, status } = this.state;
        const account = {
            username: username,
            password: password,
            brand: brand,
            segment: segment,
            status: status
        };
        
        console.log(account);

        axios.post('http://localhost:5000/accounts/edit/'+ this.props.match.params.id, account)
                .then(res => console.log(res.data));

        window.location = "/accounts/"
    }

    render() {
        return (
            <div>
                <h3>Edit Account</h3>
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
                    <input type="submit" className="btn btn-primary" value="Edit Account" />
                </form>
            </div>
        )
    }
}
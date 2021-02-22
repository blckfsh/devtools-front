import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTool extends Component {
    constructor(props) {
        super(props);

        this.state = {
            desc: '',
            brand: '',
            value: '',
            status: 'active'
        }

        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {

    }

    onChangeDesc(e) {
        this.setState({ desc: e.target.value });
    }

    onChangeBrand(e) {
        this.setState({ brand: e.target.value });
    }

    onChangeValue(e) {
        this.setState({ value: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        let { desc, brand, value, status } = this.state;

        const newTool = {
            desc: desc,
            brand: brand,
            value: value,
            status: status
        }

        console.log(newTool);
        axios.post('http://localhost:5000/tools/create', newTool)
                .then(res => console.log(res.data));

        window.location = '/tools';
    }

    render() {
        return (
            <div>
                <h3>Create New Tool</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" required className="form-control" value={this.state.desc} onChange={this.onChangeDesc} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Brand: </label>
                            <select required className="form-control custom-select mr-sm-2" onChange={this.onChangeBrand}>
                            <option value="Select a value">Choose a brand</option>
                                <option value="Foxy Bingo">Foxy Bingo</option>
                                <option value="Foxy Games">Foxy Games</option>
                                <option value="Cheeky Casino">Cheeky Casino</option>
                                <option value="Gala Bingo">Gala Bingo</option>
                                <option value="Gala Spins">Gala Spins</option>
                                <option value="Gala Casino">Gala Casino</option>
                            </select>
                        </div>
                        <div className="form-group col-md-8">
                            <label>Value: </label>
                            <input type="text" required className="form-control" value={this.state.value} onChange={this.onChangeValue} />
                        </div>
                    </div>    
                    <input type="submit" className="btn btn-primary" value="Create Tool" />
                </form>
            </div>
        )
    }
}
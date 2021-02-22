import React, { Component } from 'react';
import axios from 'axios';

export default class EditBookmark extends Component {
    constructor(props) {
        super(props);

        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            desc: '',
            brand: '',
            url: '',
            status: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/bookmarks/'+ this.props.match.params.id)
                .then(res => {

                    let { desc, brand, url, status } = res.data;
                    this.setState({
                        desc: desc,
                        brand: brand,
                        url: url,
                        status: status
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
    }

    onChangeDesc(e) {
        this.setState({
            desc: e.target.value
        })
    }

    onChangeBrand(e) {
        this.setState({
            brand: e.target.value
        })
    }

    onChangeUrl(e) {
        this.setState({
            url: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        let { desc, brand, url, status } = this.state;
        const bookmark = {
            desc: desc,
            brand: brand,
            url: url,
            status: status
        };
        
        console.log(bookmark);

        axios.post('http://localhost:5000/bookmarks/edit/'+ this.props.match.params.id, bookmark)
                .then(res => console.log(res.data));

        window.location = "/bookmarks/"
    }

    render() {
        return (
            <div>
                <h3>Edit Bookmark</h3>
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
                            <label>URL: </label>
                            <input type="text" required className="form-control" value={this.state.url} onChange={this.onChangeUrl} />
                        </div>
                    </div>    
                    <input type="submit" className="btn btn-primary" value="Edit Bookmark" />
                </form>
            </div>
        )
    }
}
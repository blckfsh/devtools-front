import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import PreviewList from '../components/previews/preview-list';

export default class PreviewContainer extends Component {
    
    state = {
        previews: [],
        preview: {},
        sortValue: '',
        inputValue: '',
        isPreviewViewOn: false,
        copyToClipboard: false
    }

    componentDidMount() {
        fetch('http://localhost:5000/previews/')
        .then(res => res.json())
        .then(previewsData => {
            this.setState({
                previews: previewsData
            })
        })
    }

    handleSortPreviews = (event) => {
        // console.log("sort button", this.state.sortValue)
        this.setState({
            sortValue: event.target.value
        })
    }

    sortPreviews = (previews) => {
        if (this.state.sortValue === "Description") {
            return [...previews].sort((a,b) => {
                if(a.desc > b.desc) {
                    return 1
                } else if (a.desc < b.desc) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (this.state.sortValue === "Brand") {
            return [...previews].sort((a,b) => {
                if(a.brand > b.brand) {
                    return 1
                } else if (a.brand < b.brand) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (this.state.sortValue === "URL") {
            return [...previews].sort((a,b) => {
                if(a.url > b.url) {
                    return 1
                } else if (a.url < b.url) {
                    return -1
                } else {
                    return 0
                }
            })
        } else {
            return previews
        }
    }

    handlePreviewView = (previewItem) => {
        console.log("click", previewItem)
        this.setState({
            preview: previewItem,
            isPreviewViewOn: !this.state.isPreviewViewOn
        })
    }

    handlePreviewGoBack = () => {
        this.setState({
            preview: {},
            isPreviewViewOn: false
        })
    }

    previewFilterOnChange = (event) => {
        console.log("Hi from onChange", event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }

    deletePreview = (id) => {
        console.log("Delete Preview")
        axios.delete('http://localhost:5000/previews/delete/' + id)
                .then(res => console.log(res.data));

        this.setState({
            previews: this.state.previews.filter(preview => preview._id !== id)
        })
    }

    render() {

        const filteredPreviews = this.state.previews.filter(preview => {
            return preview.desc.toLowerCase().includes(this.state.inputValue.toLowerCase())
        })

        return (
            <div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label>Sort Preview Links: </label>
                        <select name="sortValue" className="form-control" onChange={this.handleSortPreviews}>
                            <option value="All">All</option>
                            <option value="Description">Description</option>
                            <option value="Brand">Brand</option>
                            <option value="URL">URL</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="search">Search Description: </label>
                        <input type="text" className="form-control" value={this.inputValue} onChange={this.previewFilterOnChange} />
                    </div>
                    <div className="col-md-6">
                        <Link to="/previews/create" className="float-md-right btn btn-primary btn-md">Create Preview Link</Link>
                    </div>
                </div>                   
                <PreviewList 
                    previews={this.sortPreviews(filteredPreviews)}
                    handlePreviewView={this.handlePreviewView}
                    previewFilterOnChange={this.previewFilterOnChange} 
                    deletePreview={this.deletePreview}
                    inputValue={this.state.inputValue} 
                />        
            </div>
        )
    }
}
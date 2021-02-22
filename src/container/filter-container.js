import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import FilterList from '../components/filters/filter-list';

export default class FilterContainer extends Component {

    state = {
        filters: [],
        filter: {},
        sortValue: '',
        inputValue: '',
        isFilterViewOn: false,
        copyToClipboard: false
    }

    componentDidMount() {
        fetch('http://localhost:5000/filters/')
        .then(res => res.json())
        .then(filtersData => {
            this.setState({
                filters: filtersData
            })
        })
    }

    handleSortFilters = (event) => {
        // console.log("sort button", this.state.sortValue)
        this.setState({
            sortValue: event.target.value
        })
    }

    sortFilters = (filters) => {
        if (this.state.sortValue === "Description") {
            return [...filters].sort((a,b) => {
                if(a.desc > b.desc) {
                    return 1
                } else if (a.desc < b.desc) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (this.state.sortValue === "Brand") {
            return [...filters].sort((a,b) => {
                if(a.brand > b.brand) {
                    return 1
                } else if (a.brand < b.brand) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (this.state.sortValue === "Value") {
            return [...filters].sort((a,b) => {
                if(a.value > b.value) {
                    return 1
                } else if (a.value < b.value) {
                    return -1
                } else {
                    return 0
                }
            })
        } else {
            return filters
        }
    }

    handleFilterView = (filterItem) => {
        console.log("click", filterItem)
        this.setState({
            filter: filterItem,
            isFilterViewOn: !this.state.isFilterViewOn
        })
    }

    handleFilterGoBack = () => {
        this.setState({
            filter: {},
            isFilterViewOn: false
        })
    }

    filterOnChange = (event) => {
        console.log("Hi from onChange", event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }

    deleteFilter = (id) => {
        console.log("Delete Filter")
        axios.delete('http://localhost:5000/filters/delete/' + id)
                .then(res => console.log(res.data));

        this.setState({
            filters: this.state.filters.filter(filter => filter._id !== id)
        })
    }

    render() {

        const filteredFilters = this.state.filters.filter(filter => {
            return filter.desc.toLowerCase().includes(this.state.inputValue.toLowerCase())
        })

        return (
            <div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label>Sort Filters: </label>
                        <select name="sortValue" className="form-control" onChange={this.handleSortFilters}>
                            <option value="All">All</option>
                            <option value="Description">Description</option>
                            <option value="Brand">Brand</option>
                            <option value="Value">Value</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="search">Search Description: </label>
                        <input type="text" className="form-control" value={this.inputValue} onChange={this.filterOnChange} />
                    </div>
                    <div className="col-md-6">
                        <Link to="/filters/create" className="float-md-right btn btn-primary btn-md">Create Filters</Link>
                    </div>
                </div>                   
                <FilterList 
                    filters={this.sortFilters(filteredFilters)}
                    handleFilterView={this.handleFilterView}
                    filterOnChange={this.filterOnChange} 
                    deleteFilter={this.deleteFilter}
                    inputValue={this.state.inputValue} 
                />        
            </div>
        )
    }
}
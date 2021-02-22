import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ToolList from '../components/tools/tool-list';

export default class ToolContainer extends Component {

    state = {
        tools: [],
        tool: {},
        sortValue: '',
        inputValue: '',
        isToolViewOn: false
    }

    componentDidMount() {
        fetch('http://localhost:5000/tools/')
        .then(res => res.json())
        .then(toolsData => {
            this.setState({
                tools: toolsData
            })
        })
    }

    handleSortTools = (event) => {
        // console.log("sort button", this.state.sortValue)
        this.setState({
            sortValue: event.target.value
        })
    }

    sortTools = (tools) => {
        if (this.state.sortValue === "Description") {
            return [...tools].sort((a,b) => {
                if(a.desc > b.desc) {
                    return 1
                } else if (a.desc < b.desc) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (this.state.sortValue === "Brand") {
            return [...tools].sort((a,b) => {
                if(a.brand > b.brand) {
                    return 1
                } else if (a.brand < b.brand) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (this.state.sortValue === "Value") {
            return [...tools].sort((a,b) => {
                if(a.value > b.value) {
                    return 1
                } else if (a.value < b.value) {
                    return -1
                } else {
                    return 0
                }
            })
        } else {
            return tools
        }
    }

    handleToolView = (toolItem) => {
        console.log("click", toolItem)
        this.setState({
            tool: toolItem,
            isToolViewOn: !this.state.isToolViewOn
        })
    }

    handleToolGoBack = () => {
        this.setState({
            tool: {},
            isToolViewOn: false
        })
    }

    toolOnChange = (event) => {
        console.log("Hi from onChange", event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }

    deleteTool = (id) => {
        console.log("Delete Tool")
        axios.delete('http://localhost:5000/tools/delete/' + id)
                .then(res => console.log(res.data));

        this.setState({
            tools: this.state.tools.filter(tool => tool._id !== id)
        })
    }

    render() {

        const filteredTools = this.state.tools.filter(tool => {
            return tool.desc.toLowerCase().includes(this.state.inputValue.toLowerCase())
        })

        return (
            <div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label>Sort Tools: </label>
                        <select name="sortValue" className="form-control" onChange={this.handleSortTools}>
                            <option value="All">All</option>
                            <option value="Description">Description</option>
                            <option value="Brand">Brand</option>
                            <option value="Value">Value</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="search">Search Description: </label>
                        <input type="text" className="form-control" value={this.inputValue} onChange={this.toolOnChange} />
                    </div>
                    <div className="col-md-6">
                        <Link to="/tools/create" className="float-md-right btn btn-primary btn-md">Create Tools</Link>
                    </div>
                </div>                   
                <ToolList 
                    tools={this.sortTools(filteredTools)}
                    handleToolView={this.handleToolView}
                    toolOnChange={this.toolOnChange} 
                    deleteTool={this.deleteTool}
                    inputValue={this.state.inputValue} 
                />        
            </div>
        )
    }
}
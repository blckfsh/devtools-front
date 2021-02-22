import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import BookmarkList from '../components/bookmarks/bookmark-list';
// import BookmarkViewer from '../components/bookmark-viewer';

export default class BookmarkContainer extends Component {

    state = {
        bookmarks: [],
        bookmark: {},
        sortValue: '',
        inputValue: '',
        isBookmarkViewOn: false,
        copyToClipboard: false
    }

    componentDidMount() {
        fetch('http://localhost:5000/bookmarks/')
        .then(res => res.json())
        .then(bookmarksData => {
            this.setState({
                bookmarks: bookmarksData
            })
        })
    }

    handleSortBookmarks = (event) => {
        // console.log("sort button", this.state.sortValue)
        this.setState({
            sortValue: event.target.value
        })
    }

    sortBookmarks = (bookmarks) => {
        if (this.state.sortValue === "Description") {
            return [...bookmarks].sort((a,b) => {
                if(a.desc > b.desc) {
                    return 1
                } else if (a.desc < b.desc) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (this.state.sortValue === "Brand") {
            return [...bookmarks].sort((a,b) => {
                if(a.brand > b.brand) {
                    return 1
                } else if (a.brand < b.brand) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (this.state.sortValue === "URL") {
            return [...bookmarks].sort((a,b) => {
                if(a.url > b.url) {
                    return 1
                } else if (a.url < b.url) {
                    return -1
                } else {
                    return 0
                }
            })
        } else {
            return bookmarks
        }
    }

    handleBookmarkView = (bookmarkItem) => {
        console.log("click", bookmarkItem)
        this.setState({
            bookmark: bookmarkItem,
            isBookmarkViewOn: !this.state.isBookmarkViewOn
        })
    }

    handleBookmarkGoBack = () => {
        this.setState({
            bookmark: {},
            isBookmarkViewOn: false
        })
    }

    bookmarkFilterOnChange = (event) => {
        console.log("Hi from onChange", event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }

    deleteBookmark = (id) => {
        console.log("Delete Bookmark")
        axios.delete('http://localhost:5000/bookmarks/delete/' + id)
                .then(res => console.log(res.data));

        this.setState({
            bookmarks: this.state.bookmarks.filter(bookmark => bookmark._id !== id)
        })
    }

    render() {

        const filteredBookmarks = this.state.bookmarks.filter(bookmark => {
            return bookmark.desc.toLowerCase().includes(this.state.inputValue.toLowerCase())
        })

        return (
            <div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label>Sort Bookmarks: </label>
                        <select name="sortValue" className="form-control" onChange={this.handleSortBookmarks}>
                            <option value="All">All</option>
                            <option value="Description">Description</option>
                            <option value="Brand">Brand</option>
                            <option value="URL">URL</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="search">Search Description: </label>
                        <input type="text" className="form-control" value={this.inputValue} onChange={this.bookmarkFilterOnChange} />
                    </div>
                    <div className="col-md-6">
                        <Link to="/bookmarks/create" className="float-md-right btn btn-primary btn-md">Create Bookmark</Link>
                    </div>
                </div>                   
                <BookmarkList 
                    bookmarks={this.sortBookmarks(filteredBookmarks)}
                    handleBookmarkView={this.handleBookmarkView}
                    bookmarkFilterOnChange={this.bookmarkFilterOnChange} 
                    deleteBookmark={this.deleteBookmark}
                    inputValue={this.state.inputValue} 
                />        
            </div>
        )
    }
}
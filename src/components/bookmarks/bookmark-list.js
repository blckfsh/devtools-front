import React from 'react';
import BookmarkItem from './bookmark-item';

const BookmarkList = (props) => {
    return (
        <div>
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Status</th>
                            <th scope="col" colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                props.bookmarks.map(bookmark => {
                                    return <BookmarkItem bookmark={bookmark} key={bookmark._id} handleBookmarkView={props.handleBookmarkView} deleteBookmark={props.deleteBookmark} />
                                })
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BookmarkList
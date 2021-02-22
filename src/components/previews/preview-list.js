import React from 'react';
import PreviewItem from './preview-item';

const PreviewList = (props) => {
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
                                props.previews.map(preview => {
                                    return <PreviewItem preview={preview} key={preview._id} handlePreviewView={props.handlePreviewView} deletePreview={props.deletePreview} />
                                })
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PreviewList
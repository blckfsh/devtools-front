import React from 'react';
import ToolItem from './tool-item';

const ToolList = (props) => {
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
                                props.tools.map(tool => {
                                    return <ToolItem tool={tool} key={tool._id} handleToolView={props.handleToolView} deleteTool={props.deleteTool} />
                                })
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ToolList
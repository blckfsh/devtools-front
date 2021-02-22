import React from 'react';
import FilterItem from './filter-item';

const FilterList = (props) => {
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
                                props.filters.map(filter => {
                                    return <FilterItem filter={filter} key={filter._id} handleFilterView={props.handleFilterView} deleteFilter={props.deleteFilter} />
                                })
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FilterList
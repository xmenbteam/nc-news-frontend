import React, { Component } from 'react';

class Sorter extends Component {

    state = {
        sort_by: this.props.sort_by,
        order: this.props.order
    }

    handleChange = (event) => {

        const { sorterFunc } = this.props;

        if (event.target.name === 'sort_by') {
            console.log('in the if 1')
            this.setState({ sort_by: event.target.value },
                () => { sorterFunc(this.state.sort_by, this.state.order) });
        }
        else if (event.target.name === 'order') {
            console.log('in the if 2')
            this.setState({ order: event.target.value },
                () => { sorterFunc(this.state.sort_by, this.state.order) })
        }

    }

    render() {

        const { sort_by, order } = this.props

        return (
            <div>
                <h4 className='main__title--subtitle'>Sort By...</h4>
                <select
                    name='sort_by'
                    className='drop__down__list'
                    onChange={this.handleChange}
                    value={sort_by}
                >
                    <optgroup label="Sort By">
                        <option value='title'>Title</option>
                        <option value='author'>Author</option>
                        <option value='date'>Date Created</option>
                        <option value='votes'>Most Popular</option>
                    </optgroup>
                </select>

                <select
                    name='order'
                    className='drop__down__list'
                    onChange={this.handleChange}
                    value={order}>

                    <optgroup label="Order">
                        <option value='asc'>Ascending</option>
                        <option value='desc'>Descending</option>
                    </optgroup>
                </select>
            </div>
        );
    }
}

export default Sorter;
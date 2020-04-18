import React, {Component} from 'react';
import Item from '../item/item';

class Parent extends Component {
    items = [
        'One',
        'Two',
        'Three',
    ];

    onItemClick = item => {
        console.log(item, 'clicked')
    }

    render() {
        return (
            <div className='parent'>
                <ul className='my-list'>
                    {this.items.map(item => <Item key={item} text={item} onItemClick={this.onItemClick}/>)}
                </ul>
            </div>
        );
    }
}

export default Parent;
import React, {Component} from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: 0,
        };
    }

    doAction = () => {
        this.addValue(2, 3);
    };

    addValue = (a, b) => {
        const sum = a + b;
        this.setState({sum});
    };

    render() {
        const {text, onItemClick} = this.props;
        return (
            <li
                className='list-item'
                onClick={() => onItemClick(text)}
            >
                {text}
            </li>
        );
    }
}

export default Item;
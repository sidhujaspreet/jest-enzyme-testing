import React from 'react';
import {shallow} from 'enzyme';
import Item from './item';

describe('Item component', () => {
    const defaultProps = {
        text: 'One',
        onItemClick: () => {
        },
    };
    const component = shallow(<Item {...defaultProps}/>);

    it('should render list item', () => {
        expect(component.find('.list-item')).toBeTruthy();
    });

    it('should call onItemClick with correct values', () => {
        const mockOnItemClick = jest.fn();
        const props = {
            ...defaultProps,
            onItemClick: mockOnItemClick,
        };
        const component = shallow(<Item {...props}/>);

        component.find('.list-item').simulate('click');

        expect(mockOnItemClick).toHaveBeenCalledTimes(1);
        expect(mockOnItemClick).toHaveBeenCalledWith('One');
    });

    it('doAction should execute addValue method', () => {
        const component = shallow(<Item {...defaultProps}/>);
        jest.spyOn(component.instance(), 'addValue');
        component.instance().forceUpdate();

        component.instance().doAction();

        expect(component.instance().addValue).toHaveBeenCalledTimes(1);
        expect(component.instance().addValue).toHaveBeenCalledWith(2, 3);
    });

    it('addValue should correctly set value in state', () => {
        expect(component.state().sum).toBe(0);

        component.instance().addValue(3, 5);

        expect(component.state('sum')).toBe(8);
    });
});
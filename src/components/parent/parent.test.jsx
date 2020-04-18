import React from 'react';
import {shallow, mount} from 'enzyme';
import Parent from './parent';

describe('Parent component', () => {

    const component = shallow(<Parent/>);

    it('should render list', () => {
        expect(component.find('.my-list')).toBeTruthy();
    })

    it('should contain correct number of items', () => {
        expect(component.find('Item').length).toBe(3);
    })

    it('first child should contain correct text', () => {
        const component = mount(<Parent/>)

        expect(component.find('.list-item').first().text()).toBe('One');
    })

    it('n-th child should contain correct text', () => {
        const component = mount(<Parent/>)

        expect(component.find('.list-item').at(2).text()).toBe('Three');
    })
});
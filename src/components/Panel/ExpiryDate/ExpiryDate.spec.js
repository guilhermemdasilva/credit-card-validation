import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExpiryDate from './ExpiryDate';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<ExpiryDate />);
describe('(Component) ExpiryDate', () => {
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1);
  });
});

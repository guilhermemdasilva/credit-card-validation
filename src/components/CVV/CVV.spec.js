import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CVV from './CVV';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<CVV />);
describe('(Component) CVV', () => {
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1);
  });
});

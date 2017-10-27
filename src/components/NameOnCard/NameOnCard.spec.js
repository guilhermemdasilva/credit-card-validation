import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NameOnCard from './NameOnCard';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<NameOnCard />);
describe('(Component) NameOnCard', () => {
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1);
  });
});

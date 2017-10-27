import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Page from './Page';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<Page />);
describe('(Component) Page', () => {
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1);
  });
});

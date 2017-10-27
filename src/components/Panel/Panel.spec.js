import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from './Panel';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<Panel />);
describe('(Component) Panel', () => {
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1);
  });
});

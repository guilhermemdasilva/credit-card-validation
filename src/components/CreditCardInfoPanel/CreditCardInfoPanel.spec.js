import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreditCardInfoPanel from './CreditCardInfoPanel';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<CreditCardInfoPanel />);
describe('(Component) CreditCardInfoPanel', () => {
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1);
  });
});

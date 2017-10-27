import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreditCardNumber from './CreditCardNumber';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<CreditCardNumber />);
describe('(Component) CreditCardNumber', () => {
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1);
  });
});

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreditCardInfoPage from './CreditCardInfoPage';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<CreditCardInfoPage />);
describe('(Component) CreditCardInfoPage', () => {
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1);
  });
});

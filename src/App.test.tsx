import App from './App';
import { shallow } from "enzyme";

test('renders App component link', () => {

  const wrapper = shallow(<App/>);
  expect(wrapper).toMatchSnapshot();

});

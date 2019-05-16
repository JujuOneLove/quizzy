import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {AddQuestion} from "./components/creerQuiz";
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from "./pages/Login";
import Error from "./pages/Error";
Enzyme.configure({ adapter: new Adapter() })

describe('Creer Quiz', () => {
  it('Test click Add Question', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<AddQuestion handleAddQuestion={mockCallBack}/>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});


describe('Login', () => {
  // make our assertion and what we expect to happen
  it('should render without throwing an error', () => {
    expect(shallow(<Login />).find('form.connexion').exists()).toBe(true)
  })
});

describe('Username input onchange', () => {

  it('should respond to change event and change the state of the Login Component', () => {

    const wrapper = shallow(<Login />);
    wrapper.find('#username').simulate('change', {target: {value: 'blah@gmail.com'}});

    expect(wrapper.state('user')).toEqual({"username": "blah@gmail.com"});
  })
});

describe('Password input', () => {

  it('should respond to change event and change the state of the Login Component', () => {

    const wrapper = shallow(<Login />);
    wrapper.find('#password').simulate('change', {target: {value: 'test'}});

    expect(wrapper.state('user')).toEqual({"password": "test"});
  })
});

describe('Error 404', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Error />).find('.error404').exists()).toBe(true)
  })
});

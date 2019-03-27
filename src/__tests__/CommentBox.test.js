import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../containers/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

afterEach(() => {
  wrapped.unmount();
})

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
})

it('has a text area that users can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment'}
  });
  wrapped.update()  // Rerenders our component
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment'); // finds textarea, checks the prop value, make sure it equals test comment
})
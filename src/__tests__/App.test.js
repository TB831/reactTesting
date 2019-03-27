import React from 'react';
import App from '../containers/App';
import { shallow } from 'enzyme';
import CommentBox from '../components/CommentBox';

it('shows a comment box', () => {
  const wrapped = shallow(<App />); // Wrapped version of our component

  expect(wrapped.find(CommentBox).length).toEqual(1); // Test to make sure we have one instance of CommentBox
});
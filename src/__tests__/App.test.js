import React from 'react';
import App from '../containers/App';
import { shallow } from 'enzyme';
import CommentBox from '../components/CommentBox';
import CommentList from '../containers/CommentList';

let wrapped; // Scope for our tests

beforeEach(() => {  // Function executes before each test
  wrapped = shallow(<App />)
})

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1); // Test to make sure we have one instance of CommentBox
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1); // Test to make sure we have one instance of CommentList
})
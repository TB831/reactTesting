import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount();
})

it('has a text area and 2 buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment'}
    });
    wrapped.update()  // Rerenders our component
  })

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment'); // finds textarea, checks the prop value, make sure it equals test comment
  });
  
  it('checks if input is submitted and textarea gets emptied', () => {
    wrapped.find('.create-comment').simulate('click');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});

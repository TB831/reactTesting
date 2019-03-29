import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root';
import App from '../containers/App';
import moxios from 'moxios';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  
  moxios.install(); // Intercepts axios requests and terminates
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {  // 
    status: 200,
    response: [
      {
        "PostID": 1,
        "Id": 1,
        "Name": "to work out how they work",
        "Email": "Eliseo@gardner.biz",
        "Body": "cheering as if it is indeed a great pleasure to the \ ntempora which needs \ fluid and the like \ nreiciendis for wisdom and denouncing"
      }, {
        "PostID": 1,
        "Id": 3,
        "Name": "hatred or the attainment of mind",
        "Email": "Nikita@garfield.biz",
        "Body": "find it annoying if he rejects \ nam will have to manage a blind cheering \ nomnibus accusation that some choices are often greater for the \ ncum and led to the pleasures welcome quo"
      }
    ]
  })
});

afterEach(() => {
  moxios.uninstall();
  wrapped.unmount();
});

it('cant fetch a list of comments and display them', (done) => {  // Done allows for asynchronous testing
  // Find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');
  // Add tiny delay to allow moxios to catchup
  setTimeout(() => {
    wrapped.update();
    // Expect to find a list of comments
    expect(wrapped.find('li').length).toEqual(2);
    done(); // Executes the setTimeout functions and waits for it to complete
  }, 100)
})
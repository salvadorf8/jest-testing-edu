import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from '../Root';
import App from '../components/App';

let wrapped;

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments'),
        {
            status: 200,
            response: [{ name: 'fetch 1' }, { name: 'fetch 2' }],
        };
});

afterEach(() => {
    moxios.uninstall();
});

it.skip('can fetch a list of comments and display them', (done) => {
    // Attempt to render the *entire* app
    wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    // find the 'fetchComments' button and click it
    wrapped.find('.fetch-comments').simulate('click');

    // TINY pause to allow moxios complete its mock
    moxios.wait(() => {
        wrapped.update();

        console.log(wrapped.find('li').length);

        expect(wrapped.find('li').length).toEqual(2);

        done();
        wrapped.unmount();
    });
});

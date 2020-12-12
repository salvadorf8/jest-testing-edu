import React from 'react';
import { mount } from 'enzyme';

import Root from '../../Root';
import CommentBox from '../CommentBox';

let wrapped;

// this time we are using full DOM
beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

// Due to a change in Jest / Enzyme, when adding the console.log to the CommentBox.test.js file in the next lecture you will likely be getting an empty ReactWrapper {} in your terminal.
// Instead, we can run this command to print out the length:
// console.log(wrapped.find("textarea").length);

// document in airbnb Full DOM Rendering
// document say we need to unmount() for cleanup
test('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
    expect(wrapped.find('.fetch-comments').length).toEqual(1);
});

// describe function (also known as describe block) to prevent duplicated code in the tests
describe('the text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' },
        });

        wrapped.update();
    });

    test('has a text area where that users can type in', () => {
        // find the textarea element
        // simulate a 'change' event
        // provide a fake event object
        // force the component to update
        // assert that the text area value has changed

        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
        // setState triggers render() asynchronously
    });

    test('empties the text area after the form is submitted', () => {
        wrapped.find('form').simulate('submit');

        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});

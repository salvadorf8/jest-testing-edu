// import { render } from '@testing-library/react'; // bundled with create-react-app
// import ReactDOM from 'react-dom'; //was needed for example 2
import React from 'react';
import { shallow } from 'enzyme';

import App from '../App.js';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

// required so that the wrapped will be in scope with the tests
let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

/*
Below is a test sample using the bundled libraries that comes with create-react-app
documents: 'https://testing-library.com/docs/react-testing-library/intro'
This library is mentioned as a replacement for Enzyme (via docs)
 */
/*

test('Shows a comment box example 1', () => {
    const { getByText } = render(<App />);
    const aText = getByText(/Comment Box/i);

    expect(aText).toBeInTheDocument();
});

*/

/* 
Below is Stephens first test case which is written assuming installed libraries is just - "Jest"
it and test are a global function, (description of the test), inner function to execute
*/
/*

it.skip('Shows a comment box example 2', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);

    // expect(div.innerHTML).toContain('Hi there!');

    ReactDOM.unmountComponentAtNode(div);
});

*/

/*
Going forward we will use Stephens version which he uses --> "Jest", "Enzyme", and "Enzyme-adapter-react-16"
*/
it('shows a comment box example 3', () => {
    // makes more sence to use component, but will use the word "wrapped" to be consistent with Enzymes documentation
    // Below code is commented because initial invoked code cleans up duplicated code and makes more sense to move into a beforeEach(() => {}) function
    // const wrapped = shallow(<App />);

    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    // const wrapped = shallow(<App />);

    expect(wrapped.find(CommentList).length).toEqual(1);
});

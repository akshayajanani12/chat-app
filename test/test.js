import {
    Selector
} from 'testcafe'; // first import testcafe selectors

fixture Getting Started // declare the fixture
    .page http://localhost:3000; // specify the start page


//then create a test and place your code there
test('Login', async t => {
    await t
        .typeText("[name='name']", "Chief Bogo")
        .typeText("[name='room']", "1")
        .click('#join')

    // Use the assertion to check if the actual header text is equal to the expected one
    // .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});

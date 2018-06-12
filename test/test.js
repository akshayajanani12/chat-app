import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `http://localhost:3001`;  // specify the start page


//then create a test and place your code there
test('My first test', async t => {
    await t
        .typeText('#name', 'John Smith')
        .typeText('#room', '1')
        .click('#submit')

        // Use the assertion to check if the actual header text is equal to the expected one
        // .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});

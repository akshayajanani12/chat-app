// import {
//     Selector
// } from 'testcafe'; // first import testcafe selectors

// fixture Getting Started // declare the fixture
//     .page http://localhost:3000; // specify the start page


// //then create a test and place your code there
// test('Login', async t => {
//     await t
//         .typeText("[name='name']", "Chief Bogo")
//         .typeText("[name='room']", "1")
//         .click('#join')

//     // Use the assertion to check if the actual header text is equal to the expected one
//     // .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
// });


pipeline {
    agent {
        docker {
            image 'kkarunalladeva/justops-test:v2'
            args '-v /usr/bin/docker:/usr/bin/docker -v /var/run/docker.sock:/var/run/docker.sock -p 3000:3000'
        }
    }
    stages {
        stage('Begin') {
            steps {
                echo "STARTED"
            }
        }
        stage('Checkout') {
            steps {
                checkout changelog: false, poll: false, scm: [$class: 'GitSCM', branches: [
                    [name: '*/master']
                ], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [
                    [url: 'https://github.com/akshayajanani12/chat-app']
                ]]
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Continous Testing - Code Coverage Test') {
            steps {
                sh 'npm test'

                      // publish html
                publishHTML target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: 'test',
                    reportFiles: 'test.html',
                    reportName: ' Testing Report'
                ]
            }
        }
    }
}

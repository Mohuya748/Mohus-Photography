import React from 'react';

const Blogs = () => {
    return (
        <div className="container">
            <div className='m-3'>
                <h1>Difference between authorization and authentication</h1>
                <li>Authentication verifies who the user is.Authorization determines what resources a user can access.</li>
                <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authorization works through settings that are implemented and maintained by the organization.</li>
                <li>Authentication is the first step of a good identity and access management process.Authorization always takes place after authentication.Authorization always takes place after authentication.

                </li>

            </div>
            <div className='m-3'> 
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </div>
            <div className='m-3'>
                <h1>What other services does firebase provide other than authentication?</h1>
                <p>here are many services which Firebase provides, Most useful of them are:
                    <li>Cloud Firestore.</li>
                    <li>Cloud Functions.</li>
                    <li>Authentication.</li>
                    <li>Hosting.</li>
                    <li>Cloud Storage.</li>
                    <li>Google Analytics.</li>
                    <li>Predictions.</li>
                    <li>Cloud Messaging.</li></p>
            </div>
        </div>
    );
};

export default Blogs;
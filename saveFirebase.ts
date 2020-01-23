import * as admin from 'firebase-admin';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    type: "",
    project_id: "",
    private_key_id: "",
    private_key:   "",
    client_email: "",
    client_id: "",
    auth_uri: "",
    token_uri: "",
    auth_provider_x509_cert_url: "",
    client_x509_cert_url: ""
};

admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
    storageBucket: "<NOMEPROJETO>.appspot.com"
});

var bucket = admin.storage().bucket();

bucket.upload('file.json');
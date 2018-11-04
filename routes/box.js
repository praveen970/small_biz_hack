var express = require('express');
var router = express.Router();


/*var BoxSDK = require('box-node-sdk');

// Initialize the SDK with your app credentials
var sdk = new BoxSDK({
    clientID: 'jckah1asmqgkt7ieot8hu4b9v8nltcet',
    clientSecret: 'GobKWSR0vrWHs0ujlMkKgx3OqdGYkoWC'
});

// Create a basic API client, which does not automatically refresh the access token
var client = sdk.getBasicClient('ijuaVyTLYOEZOxKiM7N2SvchT9IdT3hF');

// Get your own user object from the Box API
// All client methods return a promise that resolves to the results of the API call,
// or rejects when an error occurs
client.users.get(client.CURRENT_USER_ID)
    .then(user => console.log('Hello', user.name, '!'))
    .catch(err => console.log('Got an error!', err));*/
/*
var BoxSDK = require('box-node-sdk');
var fs = require('fs');
var path = require('path');

var CLIENT_ID = 'jckah1asmqgkt7ieot8hu4b9v8nltcet',
    CLIENT_SECRET = 'GobKWSR0vrWHs0ujlMkKgx3OqdGYkoWC',
    PUBLIC_KEY_ID = 'x9z4p1fz',
    PRIVATE_KEY_PATH = '-----BEGIN ENCRYPTED PRIVATE KEY-----\\nMIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQIhoUub180oq0CAggA\\nMBQGCCqGSIb3DQMHBAjkcKXHf5FQrwSCBMjSo/QCm9OpbyE3LtZgxnRm4KI9c2HF\\n1z8L8TznBEq0l4u9Z11WxNOPswS/dWrcNSccOicB/L0QsED9pM9Y8rO0WYAKTp08\\nZrJCPZ065wAcMxn1gQmPdzIMqy+MD+fwmM6GlpCGnAZhmx57zP6+ouLNptXLOkuB\\nRPGRFBf8HiqwPI34D/Rf7WRiHRAiGObxxnVIsI/vsvFiP6b7+ABmWJ4ZtYn9GD31\\nkXFKZZnUKeXRYH5hkv9+Jn07pkwYtgFLOyQ41pkFc2MEtmtm1b2ZqTXbaZdGPV9U\\nLdpMV3MkvG4Dx7mUnKKKPV4IPoAon0Z+X4Pa+IwL33JowyOrz/UjqGRno/obTKgs\\n9f82FoVTdc0QpHDiH7MoUd9qsS7Q8KrZZARxwAJBw35Ics819rmNCicBa1lur3Ae\\nlxmaf2ifmuPYjoIlHDMYGgknlN2C9lKb9yksz08r6Uot8c4V26bgjXgGk32NRTG7\\n5Je3yiuRazna1l3HAQD1oyu8lpcZOXaVaDB2L2gTZ5CaJKeg+rWn985UXntXPFkw\\nIV/Ipt0iAFqOQHQkkGMtq2SzT22PROuo1SJAuLlE6WmkjwyBB9A4SvAgn//ImLnV\\ncZF0ToA5xavRjsWEH3Pt5YyTLWJWHYrt3FZJ0ALdo6fKJmPTEeFOhbf7Y+39pez/\\ne1SF3ljBT/YS3GPkcFRQCABlhDhoQg7OJ0wswlFPBqtoqhoBYVcboHj7B4QP2+kK\\nhFbZBQgmE+tTZqkOhVEN3Owa7gEGQeuCC9HE0R99kKqsqkMnRzGX0IsghfKOrDuP\\nG9547EORWwOD2TxSOQWxVNAl9iugZRBKA6fKTwljrf4aZEFRKw32F9i/8C9yqTJE\\nnIax3VnSCNKR9/KiTAHs2qaPNZUt+rlLPxcK/ZjurlXiWgLp0CTPyr1u3LEW8kYm\\nuYKF0qCwZNSgTe3tuYQK15i2p/YtUIUcYAMxzod3VFbsqVnxE9MB2A0/XOyyzljS\\nL7nndHTOoeMfEkK8AuVuOyQ9kE0DBpqWwF0HLjQ5HkrFk7Q0dQ1SXKhXD3UNi/N9\\n5QxDOv9puCdx73O5YS+wzp12cB65fH++jZsL5Yo1aP5MzhRYKd/EerRJaI7oGDIW\\n6uhkMkqD5YsOsMoszcFkhgvieEKyO5zIfbvqFcQTyNWFfo4+kPgZ2tFur1VrR8N9\\nrlLsiPCSPtH7cCZE7/Czzk3/U7RlHnae9VZKrOHeTk+MgCxgYh+iT1gMYJjo9mW7\\nt+WJ/QuWJguKgrbzn7p7qBcGNBZNBdaM/o0uEU+LgDd5BTwrPPldayfsH9WZAxuu\\nannYAKDrKoIsHhjgn0rXnDwiLETuh+/k2NqEQ3Ax0AhKaukxIpNidnYFFswr/ftp\\niW3xt2lcDuZD5D7tp4Rjn/Td1cebbKeZfmi+GaFCGHTwYI17Ce9ebyUU7Orcxmvd\\n+2/x+VNysgpfLgdATc5jGJqbi0iwObYmnZDMTEZaQ4XWp1imIoKVvjx2Oi7jl9C3\\nVVdezzv6Nsv8C9yfrh2nT2gcixxR1leE8AVH7jANnr1oC7kc/h8EQNCC6bjyDDWr\\nP64mcYIYA0oaNZ6hSHNSRhhhRu/MRyHrtm2qRwkFecXXYGxtRruq3oXd7a/C3GJE\\nejM=\\n-----END ENCRYPTED PRIVATE KEY-----\\n',
    PRIVATE_KEY_PASSPHRASE = 'f483f90d935abc6765a56c65e0c6d7df',
    ENTERPRISE_ID = '113741927';

var sdk = new BoxSDK({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    appAuth: {
        keyID: PUBLIC_KEY_ID,
        privateKey: fs.readFileSync(path.resolve(__dirname, PRIVATE_KEY_PATH)),
        passPhrase: PRIVATE_KEY_PASSPHRASE
    }
});

var client = sdk.getAppAuthClient('enterprise', ENTERPRISE_ID);

var fileData = fs.createReadStream('/users/sharanya/Desktop/words.txt')
client.files.uploadFile('0', 'words.txt', fileData, function(err, file) {
    if (err){console.log('err: ' + err);
    }
    else{console.log('file uploaded: ' + file);
    }
});


// Get some of that sweet, sweet data!
client.users.get(client.CURRENT_USER_ID, null, function(err, currentUser) {
    if(err) throw err;  console.log('Hello, ' + currentUser.name + '!');
});*/

// Initialize packages
const util = require('util');            // Deep inspection of objects
const boxSDK = require('box-node-sdk');  // Box SDK
const fs = require('fs');                // File system for config

// Fetch config file for instantiating SDK instance
// SAVE YOUR OWN APP CONFIG FILE TO config.json
const configJSON = JSON.parse(fs.readFileSync('config.json'));

// Instantiate instance of SDK using generated JSON config
const sdk = boxSDK.getPreconfiguredInstance(configJSON);

// Create service account client
//const client = sdk.getAppAuthClient('enterprise');

// Set service account to use as-user header
//client.asUser('14516989');
//client.asSelf();

// Create app user client (user access token)
const client = sdk.getAppAuthClient('enterprise');

// Upload file
const stream = fs.createReadStream('/users/sharanya/Downloads/shirt.jpg');
client.files.uploadFile('0', 'tempdoc.jpg', stream).then(file => {
    console.log(util.inspect(file, false, null));
}).catch(function (err) {
    console.log(util.inspect(err.response.body, false, null));
});


/*var BoxSDK = require('box-node-sdk');
var config = require('config');
var fs = require('fs');
var path = require('path');


var sdk = new BoxSDK({
    clientID: config.get('boxAppSettings.clientID'),
    clientSecret: config.get('boxAppSettings.clientSecret'),
    appAuth: {
        keyID: config.get('boxAppSettings.appAuth.publicKeyID'),
        privateKey: config.get('boxAppSettings.appAuth.privateKey'),
        passphrase: config.get('boxAppSettings.appAuth.passphrase'),
        expirationTime: 60,
        verifyTimestamp: false
    }
});

var client = sdk.getAppAuthClient('enterprise', "113741927");

var fileData = fs.createReadStream('/users/sharanya/Desktop/words.txt')
client.files.uploadFile('0', 'test.txt', fileData, function(err, file) {
    if (err){
        console.log('err: ' + err);
    }
    else {
        console.log('file uploaded: ' + file);
    }
});


// Get some of that sweet, sweet data!
client.users.get(client.CURRENT_USER_ID, null, function(err, currentUser) {
    if(err) throw err;  console.log('Hello, ' + currentUser.name + '!');
});*/
module.exports = router;
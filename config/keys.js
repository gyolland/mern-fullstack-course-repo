// key.js -- determine which credentials to use dev or prod
if( process.env.NODE_ENV === 'production' ) {
    // production environment -- return prod credentials
    module.exports = require('./prod');
} else {
    // dev environment -- return dev credentials
    module.exports = require( './dev' );
};
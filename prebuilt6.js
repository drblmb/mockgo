const path = require('path')

let {MongodHelper} = require('mongodb-prebuilt');

const config = {
    port: 27018,
    dbpath: path.join(__dirname, './.data'),
    storageEngine: 'ephemeralForTest',
    bind_ip: '127.0.0.1'
}

let params = Object.keys(config).reduce((carry, key) => {
    carry.push('--' + key)
    carry.push(config[key])
    return carry
}, [])

let mongodHelper = new MongodHelper(params);

mongodHelper.run().then((started) => {
    console.log('mongod is running');
    console.log(started);

    setTimeout(() => console.log('berthol!'), 1000000);
}, (e) => {
    console.log('error starting', e);
});
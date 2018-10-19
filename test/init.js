const execSQL = require('exec-sql')
const path = require('path')

before(function(done) {
  execSQL.connect({
    database: 'biblioteca_test',
    user: 'root',
    password: ''
  })
  
  execSQL.executeFile(path.join(__dirname, '../dbscripts/create-guests-test.sql'), function(err) {
    execSQL.disconnect();
    if (err) {
      console.error('Error while cleaning test DB:', err)
    }
    else {
      console.log('Test DB cleaned successfully');
    }
    done()
  });
})

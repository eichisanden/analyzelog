'use strict';

function hello() {
  const NeDB = require('nedb');
  const db = {};
  db.logs = new NeDB({
    filename: 'data/logs',
		autoload: true
  });

  db.logs.insert({name: 'foo'}, function(err, newDoc){});

  db.logs.find({}, function(err, docs) {
      console.log(docs);
    }
  );
}

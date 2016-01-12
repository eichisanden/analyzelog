'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

function showlog() {
  const Datastore = require('nedb'),
        db = {};

  db.logs = new Datastore({ filename: 'data/logs.db'});
  db.logs.loadDatabase();

  db.logs.find({}, (err, docs) => {

  });
}

let ShowLog = React.createClass({
  render: () => {
            return (<h1>Hello, world</h1>);
          }
});

ReactDOM.render(
    <ShowLog />,
    document.getElementById('container')
    );

'use strict';

function showlog() {
  const Datastore = require('nedb'),
    db = {};

  db.logs = new Datastore({ filename: 'data/logs.db'});
  db.logs.loadDatabase();

  db.logs.find({}, (err, docs) => {
    let style = `
    <style>
      td,th {
        border: 1px solid #000;
        border-collapse: collapse;
      }
    </style>`;
    document.write(style);
    document.write('<table>');
    for (let doc of docs) {
      let div = document.getElementById('log');

      document.write(`<tr><td>${doc.log}</td></tr>`);
    }
    document.write('</table>');
  });

}

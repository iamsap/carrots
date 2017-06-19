'use strict'

const fs = require('fs');
const path = require('path');

var carrots = [];
for(var i = 1; i <= 20; i++){
  var carrot = {
    imagePath:`http://cdn.iamsap.com/courses/2017-angular2-material/carrots/carrot${i}.jpg`,
    name:`Carrot #${i}`,
    description:'Duis tempus nibh et magna cursus, non dignissim enim euismod. Aliquam semper convallis aliquet.'
  }
  carrots.push(carrot);
}

fs.writeFileSync(path.resolve('./sample-data/carrots.json'), JSON.stringify(carrots));


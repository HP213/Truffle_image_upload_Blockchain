var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/shoppings");

var products = [
  new Product({
    imagePath : 'https://rukminim1.flixcart.com/image/832/832/j6chuvk0/bat/w/z/c/0-8-5-kahuna-poplar-willow-size-5-tennis-5885-kookaburra-original-imaewtadyxrmwpgz.jpeg?q=70',
    title : 'Kookaburra Kahuna',
    description : 'For Tennis ball , Wind ball , Full Size Poplar Willow Cricket Bat  (Short Handle, 1000-1100 kg)',
    price : 325
  }),
  new Product({
    imagePath : 'https://rukminim1.flixcart.com/image/832/832/j1qqs280/bat/c/s/p/1180-kaboom-smash-short-handle-na-gray-nicolls-original-imaet94tfaaph7qq.jpeg?q=70',
    title : 'Gray Nicolls Kaboom-Smash',
    description : 'Gray Nicolls Kaboom-Smash Kashmir Willow Cricket Bat  (Short Handle, 1180 g)',
    price : 899
  }),
  new Product({
    imagePath : 'https://rukminim1.flixcart.com/image/832/832/jbpeavk0/bat/3/p/d/940-975-g-6-neon-606-1601130-gm-original-imafyzwv3hvzx3rn.jpeg?q=70',
    title : 'GM Neon 606',
    description : ' Knocked In English Willow Cricket Bat  (Short Handle, 1170 - 1230 g)',
    price : 8471
  }),
  new Product({
    imagePath : 'https://rukminim1.flixcart.com/image/832/832/jf5plzk0/bat/m/v/a/900-1-1-short-handle-geniux-mrf30555-mrf-original-imaf3ky88azv3uym.jpeg?q=70',
    title : 'MRF Grand Edition',
    description : 'MRF Grand Edition Virat Kolhi English Willow Cricket Bat  (Short Handle, 1.1-1.2 kg)',
    price : 1750
  }),
  new Product({
    imagePath : 'https://rukminim1.flixcart.com/image/832/832/jesunbk0/bat/z/v/4/1000-1100-short-handle-genius-signed-by-virat-kohali-tennis-bat-original-imaf3ekgfgcah8q5.jpeg?q=70',
      title : 'MRF Genius Signed',
    description : 'MRF Genius Signed By Virat Kohali Tennis bat Made in Poplar Willow Cricket Bat  (Short Handle, 1000-1100 kg)',
    price : 330
  }),
  new Product({
    imagePath : 'https://rukminim1.flixcart.com/image/832/832/jbpeavk0/bat/z/g/d/1170-1230-g-short-handle-chrome-707-1601086-gm-original-imafyzwuhzhyvmbx.jpeg?q=70',
    title : 'GM Chrome 808 English Willow Cricket Bat ',
    description : 'Blade Made of English Willow, Advanced Playing Level, Weight Range 1170 - 1230 g',
    price : 11193
  }),
  new Product({
    imagePath : 'https://rukminim1.flixcart.com/image/832/832/bat/f/h/w/forcestrike-harrow-975-1075-gray-nicolls-oblivion-forcestrike-5-original-imaecchpdpsgpsne.jpeg?q=70',
    title : 'Gray Nicolls Oblivion Forcestrike Kashmir Willow Cricket Bat  (6, 900-1000 g)',
    description : 'With Its Mirrored Cosmetics And Distinctively Large Low Profile That Has To Be Seen To Be Believed; The Oblivion E41 Is The Perfect Blend Of Tradition And Innovation.',
    price : 1182
  }),
  new Product({
    imagePath : 'https://rukminim1.flixcart.com/image/832/832/bat/t/f/n/ab7091-1200-adidas-pellara-rookie-kw-sh-original-imaedgd2yztuubpj.jpeg?q=70',
    title : 'ADIDAS Pellara Rookie Kw Kashmir Willow Cricket Bat  (Short Handle, 1200 g)',
    description : 'Beginner, Intermediate, Recreational, Training, Advanced Playing Level, Weight Range 1200 g',
    price : 1222
  }),
  new Product({
    imagePath : 'https://rukminim1.flixcart.com/image/832/832/j1qqs280/bat/h/c/7/1180-velocity-gn1-6-6-na-gray-nicolls-original-imaet94thyxmnjff.jpeg?q=70',
    title : 'Gray Nicolls Velocity-GN1-6 English Willow Cricket Bat  (6, 1180 g)',
    description : 'Intermediate Playing Level Age Group 11 - 13 Yrs',
    price : 2020
  }),
];

var done = 0;
for(var i=0; i<products.length; i++){
  products[i].save(function(err, res){
    done++;
    if(done === products.length){
      exit1();
    }
  });
}

function exit1(){
    mongoose.disconnect();
}

// module.exports

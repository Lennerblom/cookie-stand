'use strict';

var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm','5pm','6pm','7pm','8pm'];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var pike = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookiePerCust: 6.3,
  randCustHour: [],
  cookieSaleHour: [],
  totalDailyCookies: 0,
  calcRandCustHour: function() {
    for(var i =0; i < hours.length; i++) {
      this.randCustHour.push(getRandomInt(this.minCust, this.maxCust));
      //this.randCustHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      console.log(this.randCustHour[i]);
    }

  },
  //method for cookies sold by hour
  calcCookieSaleHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookieSaleHour.push(Math.round(this.avgCookiePerCust * this.randCustHour[j]));
      console.log(this.cookieSaleHour[j]);
    }
  },

  render: function() {
    var firstAndPike = document.getElementById('firstAndPike');
    var fnp = document.getElementById('fnp');
    this.calcRandCustHour();
    this.calcCookieSaleHour();
    var h3El = document.createElement('h3');
    //give text to the nex h3 element
    h3El.textContent = this.name;
    fnp.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through hours array
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookieSaleHour[k] + ' cookies';
      console.log(liEl);
      firstAndPike.appendChild(liEl);

    }
  }

};
pike.render();

var seaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookiePerCust: 1.2,
  randCustHour: [],
  cookieSaleHour: [],
  totalDailyCookies: 0,
  calcRandCustHour: function() {
    for(var i =0; i < hours.length; i++) {
      this.randCustHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      console.log(this.randCustHour[i]);
    }
  },
  //method for cookies sold by hour
  calcCookieSaleHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookieSaleHour.push(Math.floor(this.avgCookiePerCust * this.randCustHour[j]));
      console.log(this.cookieSaleHour);
    }
  },
  render: function() {
    var seaTacAirport = document.getElementById('seaTacAirport');
    var seaTac = document.getElementById('seaTac');
    this.calcRandCustHour();
    this.calcCookieSaleHour();
    var h3El = document.createElement('h3');
    //give text to the nex h3 element
    h3El.textContent = this.name;
    seaTac.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through hours array
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookieSaleHour[k] + ' cookies';
      console.log(liEl);
      seaTacAirport.appendChild(liEl);

    }
  }

};
seaTac.render();

'use strict';

var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm','5pm','6pm','7pm','8pm'];

var storeLocations = [pike, seaTac, seaCent, capHill, alki];

function CookieStore(name, minCust, maxCust, avgCookiePerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.randCustHour = [];
  this.cookieSaleHour = [];
  this.totalDailyCookies = 0;
  storeLocations.push(this);
}
CookieStore.prototype.calcRandCustHour = function() {
  for(var i =0; i < hours.length; i++) {
    this.randCustHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    console.log(this.randCustHour[i]);
  }
};
CookieStore.prototype.calcCookieSaleHour = function() {
  for(var j = 0; j < hours.length; j++) {
    this.cookieSaleHour.push(Math.round(this.avgCookiePerCust * this.randCustHour[j]));
    console.log(this.cookieSaleHour[j]);
  }
};
CookieStore.prototype.calcTotalDailyCookies = function() {
  this.cookieSaleHour[l];
  this.totalDailyCookies = 0;
  for(var l = 0; l < this.cookieSaleHour.length; l++) {
    this.totalDailyCookies += this.cookieSaleHour[l];
    console.log(this.totalDailyCookies);
  }
};

var pike = new CookieStore('First and Pike', 23, 65, 6.3);
var seaTac =new CookieStore('Seatac Airport', 3, 24, 1.2);
var seaCent = new CookieStore('Seattle Center', 11, 38, 3.7);
var capHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.6);


function makeTableHead() {
  var cookieTable = document.getElementById('cookieTable');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Cookie Totals';
  trEl.appendChild(thEl);

  cookieTable.appendChild(trEl);

  /*for(var j = 0; j < hours.length; j++) {
    trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.textContent = totalCookiesByHour;
    trEl.appendChild(tdEl);
    //cookieTable.appendChild(trEl);
  }

  for(var k = 0; k < hours.length; k++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }*/
}

makeTableHead();

CookieStore.prototype.render = function() {
  this.calcRandCustHour();
  this.calcCookieSaleHour();
  this.calcTotalDailyCookies();
  var cookieTable = document.getElementById('cookieTable');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('th');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailyCookies;
  trEl.appendChild(tdEl);

  for(var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookieSaleHour;
    trEl.appendChild(tdEl);
    cookieTable.appendChild(trEl);
  }
};
/*function makeTableHead() {
  var tableEl = document.getElementById('cookieTable');
  var tbodyEl = document.createElement('tbody');
  var theadEl = document.createElement('thead');
  var trEl = document.createElement('tr');
  for(var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
  }
  thEl.textContent = hours[i];
  trEl.appendChild(thEl);
  theadEl.appendChild(trEl);
  tbodyEl.appendChild(theadEl);
  tableEl.appendChild(tbodyEl);
}
makeTableHead(hours);*/











//var pikeStore = new CookieStore('First and Pike', 23, 65, 6.3);

/*var pike = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookiePerCust: 6.3,
  randCustHour: [],
  cookieSaleHour: [],
  totalDailyCookies: 0,
  calcRandCustHour: function() {
    for(var i =0; i < hours.length; i++) {
      //this.randCustHour.push(getRandomInt(this.minCust, this.maxCust));
      this.randCustHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
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
  calcTotalDailyCookies: function() {
    this.cookieSaleHour[l];
    this.totalDailyCookies = 0;
    for(var l = 0; l < this.cookieSaleHour.length; l++) {
      this.totalDailyCookies += this.cookieSaleHour[l];
      //this.totalDailyCookies += (this.totalDailyCookies + this.cookieSaleHour[l]);
      console.log(this.totalDailyCookies);
    }
  },*/

/*CookieStore.prototype.render = function() {
  var firstAndPike = document.getElementById('firstAndPike');
  var fnp = document.getElementById('fnp');
  var pikeTotal = document.getElementById('pikeTotal');
  this.calcRandCustHour();
  this.calcCookieSaleHour();
  this.calcTotalDailyCookies();
  var h3El = document.createElement('h3');
  //give text to the new h3 element
  h3El.textContent = this.name;
  fnp.appendChild(h3El);
  for(var k = 0; k < hours.length; k++) {
    //stepping through hours array
    var liEl = document.createElement('li');
    liEl.textContent = hours[k] + ': ' + this.cookieSaleHour[k] + ' cookies';
    console.log(liEl);
    firstAndPike.appendChild(liEl);
  }
  var h4El = document.createElement('h4');
  h4El.textContent = 'Total Daily Cookie\'s Sold:  ' + this.totalDailyCookies;
  pikeTotal.appendChild(h4El);
};

CookieStore.prototype.render();*/

/*var seaTac = {
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
  calcTotalDailyCookies: function() {
    this.cookieSaleHour[l];
    this.totalDailyCookies = 0;
    for(var l = 0; l < this.cookieSaleHour.length; l++) {
      this.totalDailyCookies += this.cookieSaleHour[l];
      //this.totalDailyCookies += (this.totalDailyCookies + this.cookieSaleHour[l]);
      console.log(this.totalDailyCookies);
    }
  },
  render: function() {
    var seaTacAirport = document.getElementById('seaTacAirport');
    var seaTac = document.getElementById('seaTac');
    var seaTacTotal = document.getElementById('seaTacTotal');
    this.calcRandCustHour();
    this.calcCookieSaleHour();
    this.calcTotalDailyCookies();
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
    var h4El = document.createElement('h4');
    h4El.textContent = 'Total Daily Cookie\'s Sold:  ' + this.totalDailyCookies;
    seaTacTotal.appendChild(h4El);
  }

};
seaTac.render();


var seattleCenter = {
  name: 'Seattle Center',
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
  calcTotalDailyCookies: function() {
    this.cookieSaleHour[l];
    this.totalDailyCookies = 0;
    for(var l = 0; l < this.cookieSaleHour.length; l++) {
      this.totalDailyCookies += this.cookieSaleHour[l];
      //this.totalDailyCookies += (this.totalDailyCookies + this.cookieSaleHour[l]);
      console.log(this.totalDailyCookies);
    }
  },
  render: function() {
    var seaCenter = document.getElementById('seaCenter');
    var seaCent = document.getElementById('seaCent');
    var seaCenterTotal = document.getElementById('seaCenterTotal');
    this.calcRandCustHour();
    this.calcCookieSaleHour();
    this.calcTotalDailyCookies();
    var h3El = document.createElement('h3');
    //give text to the nex h3 element
    h3El.textContent = this.name;
    seaCent.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through hours array
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookieSaleHour[k] + ' cookies';
      console.log(liEl);
      seaCenter.appendChild(liEl);
    }
    var h4El = document.createElement('h4');
    h4El.textContent = 'Total Daily Cookie\'s Sold:  ' + this.totalDailyCookies;
    seaCenterTotal.appendChild(h4El);
  }

};
seattleCenter.render();

var capHill = {
  name: 'Capitol Hill',
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
  calcTotalDailyCookies: function() {
    this.cookieSaleHour[l];
    this.totalDailyCookies = 0;
    for(var l = 0; l < this.cookieSaleHour.length; l++) {
      this.totalDailyCookies += this.cookieSaleHour[l];
      //this.totalDailyCookies += (this.totalDailyCookies + this.cookieSaleHour[l]);
      console.log(this.totalDailyCookies);
    }
  },
  render: function() {
    var capitolHill = document.getElementById('capitolHill');
    var capHill = document.getElementById('capHill');
    var capHillTotal = document.getElementById('capHillTotal');
    this.calcRandCustHour();
    this.calcCookieSaleHour();
    this.calcTotalDailyCookies();
    var h3El = document.createElement('h3');
    //give text to the nex h3 element
    h3El.textContent = this.name;
    capHill.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through hours array
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookieSaleHour[k] + ' cookies';
      console.log(liEl);
      capitolHill.appendChild(liEl);
    }
    var h4El = document.createElement('h4');
    h4El.textContent = 'Total Daily Cookie\'s Sold:  ' + this.totalDailyCookies;
    capHillTotal.appendChild(h4El);
  }

};
capHill.render();

var alki = {
  name: 'Alki',
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
  calcTotalDailyCookies: function() {
    this.cookieSaleHour[l];
    this.totalDailyCookies = 0;
    for(var l = 0; l < this.cookieSaleHour.length; l++) {
      this.totalDailyCookies += this.cookieSaleHour[l];
      //this.totalDailyCookies += (this.totalDailyCookies + this.cookieSaleHour[l]);
      console.log(this.totalDailyCookies);
    }
  },
  render: function() {
    var ulAlki = document.getElementById('ulAlki');
    var alki = document.getElementById('alki');
    var alkiTotal = document.getElementById('alkiTotal');
    this.calcRandCustHour();
    this.calcCookieSaleHour();
    this.calcTotalDailyCookies();
    var h3El = document.createElement('h3');
    //give text to the nex h3 element
    h3El.textContent = this.name;
    alki.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through hours array
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookieSaleHour[k] + ' cookies';
      console.log(liEl);
      ulAlki.appendChild(liEl);
    }
    var h4El = document.createElement('h4');
    h4El.textContent = 'Total Daily Cookie\'s Sold:  ' + this.totalDailyCookies;
    alkiTotal.appendChild(h4El);
  }

};
alki.render();*/
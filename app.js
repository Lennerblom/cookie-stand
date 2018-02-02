'use strict';

var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm','5pm','6pm','7pm','8pm'];

var storeLocations = [];
var totalCookiesByHour = 0;
var totalTotal = 0;

function CookieStore(name, minCust, maxCust, avgCookiePerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.randCustHour = [];
  this.cookieSaleHour = [];
  this.totalDailyCookies = 0;
  storeLocations.push(this);

  this.calcRandCustHour = function() {
    for(var i =0; i < hours.length; i++) {
      this.randCustHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      console.log(this.randCustHour[i]);
    }
  };
  this.calcCookieSaleHour = function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookieSaleHour.push(Math.round(this.avgCookiePerCust * this.randCustHour[j]));
      console.log(this.cookieSaleHour[j]);
    }
  };
  this.calcTotalDailyCookies = function() {
    this.cookieSaleHour[k];
    this.totalDailyCookies = 0;
    for(var k = 0; k < this.cookieSaleHour.length; k++) {
      this.totalDailyCookies += this.cookieSaleHour[k];
      console.log(this.totalDailyCookies);
    }
  };
  this.calcRandCustHour();
  this.calcCookieSaleHour();
  this.calcTotalDailyCookies();
}
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
}

makeTableHead();

function makeTableRow1(){

  var cookieTable = document.getElementById('cookieTable');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  for (var i = 0; i < storeLocations.length; i++){
    trEl = document.createElement('tr');
    tdEl.textContent = storeLocations[i].name;
    trEl.appendChild(tdEl);
    console.log(trEl.appendChild(tdEl));

    for(var j = 0; j < hours.length; j++) {
      tdEl = document.createElement('td');
      tdEl.textContent = storeLocations[i].cookieSaleHour[j];
      trEl.appendChild(tdEl);
      console.log(trEl.appendChild(tdEl));
    }
    for(var k = 0; k < 2; k++) {
      tdEl = document.createElement('td');
      tdEl.textContent = storeLocations[i].totalDailyCookies;
      trEl.appendChild(tdEl);
      cookieTable.appendChild(trEl);
      console.log(trEl.appendChild(tdEl));
    }
  }
}
makeTableRow1();


/*function newStoreLocation() {                             // Declare function
  var addNewStore = document.getElementById('newStore');     // Get feedback element

}
  
var elUsername = document.getElementById('username');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);*/
//this function is the event handler for the submission of a new store
var newStoreForm = document.getElementById('newStoreForm');

function handleStoreAdd(event) {
  event.preventDefault();
  console.log('log of the event object', event);
  console.log('log of the event.target', event.target);
  console.log('log of the event.target.storename', event.target.storeName);
  console.log('log of the event.target.storename.value', event.target.storeName.value);

  //gotta have it to prevent page reload on a submit event
  //telling the user to fill in the form properly. So if the form is empty somewhere they get the alert
  // if(!newStoreName || !newStoreMinCust || !newStoreMaxCust || !newStoreAvgCookie) {
  //  return alert('You must enter a value; please do not leave blank.');
  //}
  //target the name in the form
  var newStoreName = event.target.storeName.value;
  var newStoreMinCust = parseInt(event.target.minCust.value);
  var newStoreMaxCust = parseInt(event.target.maxCust.value);
  var newStoreAvgCookie = parseInt(event.target.avgCookie.value);

  var newStore = new CookieStore(newStoreName, newStoreMinCust, newStoreMaxCust, newStoreAvgCookie);console.log(newStore);
  makeTableRow1();

  event.target.storeName.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgCookie.value = null;


}
newStoreForm.addEventListener('submit', handleStoreAdd);
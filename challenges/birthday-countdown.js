/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/


function daysUntilDate(string) {
  var date = Date.parse(string);
  var today = Date.now();
  return ((date - today)/(1000*60*60*24));
}


function formatDate(dateString) {
  var today = new Date();
  var dateArr = dateString.split("/");
  var todaysMonth = (today.getMonth() + 1);
  var todaysDate = (today.getDate());
  var todaysYear = (today.getFullYear());

  if ((parseInt(dateArr[0]) > parseInt(todaysMonth)) || ((parseInt(dateArr[0]) === parseInt(todaysMonth)) && (parseInt(dateArr[1]) > parseInt(todaysDate))) ) {
    dateArr[2] = todaysYear;

  } else {
    dateArr[2] = todaysYear+1;
  }
  return dateArr.join("/");
}

function birthdayReminder(birthdays) {
  var output = [];
  birthdays.forEach(function(el) {
    var birthdayString = formatDate(el.dob);
    var daysUntil = daysUntilDate(birthdayString);
    output.push(el.name + "'s birthday is in " + parseInt(daysUntil) + " days");
  });
  return output;
}






















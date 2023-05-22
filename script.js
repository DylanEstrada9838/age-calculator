document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  //Get 3 inputs value, day month and year
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var bornDate = new Date(year, month - 1, day);

  console.log("Born Date: ", bornDate);
  console.log("Year:", year);
  console.log("Month:", month);
  console.log("Day:", day);

  // Days in month validation
  var validation = new Date(year, month, 0).getDate();
  console.log("Days in the birthday month: ", validation);

  if (day > validation) {
    alert("Day is invalid, non existing day in calendar");
    return;
  }
  // Function to get days in birthday year
  function getDaysInYear(y) {
    let startDate = new Date(y, 0, 1);
    let endDate = new Date(y + 1, 0, 1);
    let timeDiff = endDate.getTime() - startDate.getTime();
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  }
  console.log("Days in birthday year: ", getDaysInYear(bornDate.getFullYear()));

  //Current Time
  var time = new Date();
  console.log("Current Time: ", time);

  var cYear = time.getFullYear();
  var cMonth = time.getMonth() + 1;
  var cDay = time.getDate();

  console.log("cYear:", cYear);
  console.log("cMonth:", cMonth);
  console.log("cDay:", cDay);

  // Year validation, year is not in the future

  if (year > cYear) {
    alert("Year is invalid, is above current year");
    return;
  }

  var daysInCurrentPreviousMonth = new Date(cYear, cMonth - 1, 0).getDate();
  var daysInCurrentMonth = new Date(cYear, cMonth, 0).getDate();
  var daysInCurrentNextMonth = new Date(cYear, cMonth + 1, 0).getDate();

  console.log("Days in current previous month: ", daysInCurrentPreviousMonth);
  console.log("Days in current month: ", daysInCurrentMonth);
  console.log("Days in current next month: ", daysInCurrentNextMonth);
  // ***********************************
  if (month < cMonth) {
    //year
    var ageyears = cYear - year;
    //month & day
    if (day <= cDay) {
      var agemonths = cMonth - month;
      var agedays = cDay - day;
    }
    if (day > cDay) {
      var agemonths = cMonth - month - 1;
      var agedays = cDay + (daysInCurrentMonth - day);
    }
  }
  //*******************************************
  if (month == cMonth) {
    //year
    if (day <= cDay) {
      var ageyears = cYear - year;
    }
    if (day > cDay) {
      var ageyears = cYear - year - 1;
    }
    //month
    if (day <= cDay) {
      var agemonths = cMonth - month;
      var agedays = cDay - day;
    }
    if (day > cDay) {
      var agemonths = cMonth - month - 1 + 12;
      var agedays = cDay + (daysInCurrentMonth - day);
    }
  }
  //******************************************** */
  if (month > cMonth) {
    //year
    var ageyears = cYear - year - 1;
    //month & day
    if (day <= cDay) {
      var agemonths = 12 - (month - cMonth);
      var agedays = cDay - day;
    }
    if (day > cDay) {
      var agemonths = 12 - (month - cMonth) - 1;
      var agedays = daysInCurrentNextMonth - (day - cDay);
    }
  }

  var y = document.getElementById("spany");
  y.innerHTML = `${ageyears}`;

  var m = document.getElementById("spanm");
  m.innerHTML = `${agemonths}`;

  var d = document.getElementById("spand");
  d.innerHTML = `${agedays}`;
});

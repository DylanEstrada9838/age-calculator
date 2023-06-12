document.addEventListener("DOMContentLoaded", function (e) {
  // Current year validation. Set an attribute to year input, max= current year
  var times = new Date();
  var currYear = times.getFullYear();
  var currMonth = times.getMonth() + 1;
  var currDay = times.getDate();
  document.getElementById("year").setAttribute("max", `${currYear}`);

  document.querySelector("form").addEventListener("input", function (e) {
    let dayinput = document.getElementById("day").value;
    let monthinput = document.getElementById("month").value;
    let yearinput = document.getElementById("year").value;

    if (yearinput == currYear) {
      document.getElementById("month").setAttribute("max", `${currMonth}`);
      if (monthinput == currMonth) {
        console.log("correct");
        document.getElementById("day").setAttribute("max", `${currDay}`);
      }
    } else {
      document.getElementById("month").setAttribute("max", "12");
      document
        .getElementById("day")
        .setAttribute("max", `${new Date(yearinput, monthinput, 0).getDate()}`);
    }
  });

  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    //Get 3 user inputs value, day, month, and year
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    //Creates date with user´s input
    var bornDate = new Date(year, month - 1, day);

    console.log("Year:", year);
    console.log("Month:", month);
    console.log("Day:", day);
    console.log("Born Date: ", bornDate);

    // Function to get days in birthday year
    function getDaysInYear(y) {
      let startDate = new Date(y, 0, 1);
      let endDate = new Date(y + 1, 0, 1);
      let timeDiff = endDate.getTime() - startDate.getTime();
      return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    }
    console.log(
      "Days in birthday year: ",
      getDaysInYear(bornDate.getFullYear())
    );

    //Current Time
    var time = new Date();
    console.log("Current Time: ", time);
    var trylib = date.subtract(time, bornDate).toDays();
    console.log("Try lib: ", trylib);
    var cYear = time.getFullYear();
    var cMonth = time.getMonth() + 1;
    var cDay = time.getDate();

    console.log("cYear:", cYear);
    console.log("cMonth:", cMonth);
    console.log("cDay:", cDay);

    var daysInCurrentPreviousMonth = new Date(cYear, cMonth - 1, 0).getDate();
    var daysInCurrentMonth = new Date(cYear, cMonth, 0).getDate();
    var daysInCurrentNextMonth = new Date(cYear, cMonth + 1, 0).getDate();
    var daysInBornMonth = new Date(year, month, 0).getDate();
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
        var agedays = daysInBornMonth - (day - cDay);
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
      //month & day
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
        var agedays = daysInBornMonth - (day - cDay);
      }
    }

    var y = document.getElementById("spany");
    y.innerHTML = `${ageyears}`;

    var m = document.getElementById("spanm");
    m.innerHTML = `${agemonths}`;

    var d = document.getElementById("spand");
    d.innerHTML = `${agedays}`;
  });
});

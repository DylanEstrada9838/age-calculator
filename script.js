document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;

  var bornDate = new Date(year, month - 1, day);

  var time = new Date();
  var cYear = time.getFullYear();
  if (year > cYear) {
    alert("Year is invalid, is above current year");
    console.error("Year is invalid, is above current year");
    return;
  }

  console.log(day);
  console.log(month);
  console.log(year);
  console.log(time);
  console.log(bornDate);

  var age = time - bornDate;
  var ageyears = age / (1000 * 60 * 60 * 24 * 365.25);
  var agemonths = age / (1000 * 60 * 60 * 24 * (365.25 / 12));
  var agedays = console.log(age);
  console.log(ageyears);
  console.log(agemonths);

  var y = document.getElementById("spany");
  y.innerHTML = `${Math.floor(ageyears)}`;
});

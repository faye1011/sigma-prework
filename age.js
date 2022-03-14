function getDate() {
  let aDate = prompt("enter a date in format yyyy-mm-dd");
  return aDate;
}

function age(x) {
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  let newMonth = parseInt(x.slice(5, 7));
  let newDay = parseInt(x.slice(8, 10));
  let newYear = parseInt(x.slice(0, 4));

  if (month > newMonth) {
    alert(year - newYear);
  } else if (day >= newDay && month >= newMonth) {
    alert(year - newYear);
  } else {
    alert(year - newYear - 1);
  }
}

console.log(age(getDate()));

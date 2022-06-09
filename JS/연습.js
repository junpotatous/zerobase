/*let day_number = 3;
let day;

switch (day_number) {
  case 0 :
    day = "Sunday"; break;
  case 1 :
    day = "Monday"; break;
  case 2 :
    day = "Tuesday"; break;
  case 3 :
    day = "Wednesday"; break;
  case 4 :
    day = "Thursday"; break;
  case 5 :
    day = "Friday"; break;
  case 6 :
    day = "Saturday"; break;
  case 7 :
    day = "error"; break;

}

console.log(day);
*/

const day = 3;
let weekend = "";

switch(day) {
  case 1:
  weekend = "월요일";
  break;
  case 2:
    weekend = "화요일";
  break;
  case 3:
    weekend = "수요일";
  break;
  case 4:
    weekend = "목요일";
  break;
  case 5:
    weekend = "금요일";
  break;
  case 6:
    weekend = "토요일";
  break;
  case 7:
    weekend = "일요일";
  break;
 

}

console.log(weekend);
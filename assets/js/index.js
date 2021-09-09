window.onload = function() {
    document.getElementById("workTime").innerHTML = getWorkExperience("2 February 2020");
    document.getElementById("totalWorkTime").innerHTML = getWorkExperience("30 August 2019");
  };

  function getWorkExperience(date) {
    var today = new Date();
    var joinedDate = new Date(date);
    var ynew = today.getFullYear();
    var mnew = today.getMonth();
    var dnew = today.getDate();
    var yold = joinedDate.getFullYear();
    var mold = joinedDate.getMonth();
    var dold = joinedDate.getDate();
    var years = ynew - yold;
    var months = mnew - mold; 
    if (mold > mnew) years--;
    else {
        if (mold == mnew) {
            if (dold > dnew) years--;
        }
    }
    var yearText = years > 1 ? "years" : "year";
    return `Time Worked: ${years} ${yearText}, ${months} months`;
  }
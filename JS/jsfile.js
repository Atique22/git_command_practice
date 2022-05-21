function validateForm() {
    let Fname = document.getElementById("fname");
    let Lname = document.getElementById("lname");
    let Country = document.getElementById("country");
    let Subject = document.getElementById("subject");

    if (Fname.value.length ===0) {
        alert("Name must be filled out");
        return false;
    }
    else if (Lname.value.length ===0) {
        alert("Name must be filled out");
        return false;
    }
    else if (Country.value.length ===0) {
        alert("Enter country name");
        return false;
    }
    else if (Subject.value.length ===0) {
        alert(" must be filled out");
        return false;
    }
    else{
        alert("successfully Thanks! "+ Fname.value);
        return true;
    }
}
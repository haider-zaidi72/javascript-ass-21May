function changeText() {
      let heading = document.getElementById("heading");
      heading.innerText = "Welcome";
      heading.style.color = "red"; // Change text color to red
      heading.style.backgroundColor="blue";
    }

    function changeBodyClr(){
        let colorChange = document.getElementById("clr");
        colorChange.style.backgroundColor="white";
        colorChange.style.color="black";
    }

    function bodyClrChange(){
        let changeClr = document.getElementById("clr");
        changeClr.style.backgroundColor="black";
        changeClr.style.color="white"
    }
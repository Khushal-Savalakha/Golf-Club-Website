var crsr = document.getElementById("cursor");
var blur = document.getElementById("cursor-blur");
document.addEventListener("mousemove", function (dets) {
  //  alert(crsr)
  (crsr.style.left = dets.x + 30 + "px"),
    (crsr.style.top = dets.y + "px"),
    (blur.style.left = dets.x - 250 + "px"),
    (blur.style.top = dets.y - 250 + "px");
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "13.82vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
  delay: 1,
});

var h4all = document.querySelectorAll("#nav a");

h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

var selected_choice = document.querySelectorAll('.col-5');

function customer_choice(obj) {
  for (let i = 0; i < selected_choice.length; i++) {
    if (obj.id == selected_choice[i].id) {
      obj.style.background = '#95c11e';
      obj.style.color = 'white';
    } else {
      selected_choice[i].style.background = 'white';
      selected_choice[i].style.color = 'black';
    }
  }
}

document.getElementById("confirm_choices").addEventListener("click", function (event) {
  var bay = document.getElementById("bay").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var flag = true;
  if (bay === "No. of Bays" || date === "" || time === "") {
    alert("Please fill in all fields.");
    flag = false;
    // event.preventDefault(); // Prevent form submission
  } else {
    var currentDate = new Date();
    var selectedDate = new Date(date);
    if (selectedDate < currentDate) {
      if (selectedDate != currentDate) {
        alert("Selected date cannot be in the past.");
        // event.preventDefault(); // Prevent form submission
        flag = false;
      }
    }
  }
  if (flag == true) {
    // If all fields are valid, redirect to the next page
    window.location.href = "index.html";
  }

});


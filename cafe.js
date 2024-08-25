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

// Page 3 hovering & clicking effect of menu
var menuItems = document.getElementsByClassName("Menu_data_items");
var clicked_id;
var add_data = document.getElementById('menu_data_card');
function menu_item_clicked(object) {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].style.color = "white";
    menuItems[i].style.textDecoration = "none";
  }
  object.style.color = "#95c11e";
  object.style.textDecoration = "underline";
  object.style.textDecorationColor = "#95c11e";
  clicked_id = object.id;
  // console.log(`Clicked id name:${clicked_id} and it's type:${typeof clicked_id}`)
  if (clicked_id == 'm1') {
    add_data.innerHTML =
      `<div id="m1">
    <div id="menu_details">
        <h2>BREAKFASTS</h2>
        <p>Served All Day</p>
        <hr>
        <h4>ENGLISH BREAKFAST BAGUETTE <span>£10.00</span></h4>
        <h4>VEGGIE BREAKFAST BAGUETTE <span>£7.50</span></h4>
        <h4>BACON BAGUETTE <span>£6.00</span></h4>
        <h4>SAUSAGE BAGUETTE <span>£6.00</span></h4>

    </div>
    <div id="menu_images"></div>
</div>`;
  }
  else if (clicked_id == 'm2') {
    add_data.innerHTML =
      `<div id="m2">
                    <div id="menu_details1">
                        <h2>BAGUETTES & WRAPS</h2>
                        <hr>
                        <h4>FISH GOUJON WRAP <span>£9.50</span></h4>
                        <h4>HALLOUMI WRAP <span>£9.50</span></h4>
                        <h4>SOUTHERN FRIED CHICKEN WRAP <span>£9.50</span></h4>
                        <h4>CHEESE & HAM BAGUETTE <span>£7.75</span></h4>
                        <h4>HAM BAGUETTE <span>£7.50</span></h4>
                        <h4>TUNA CRUNCH BAGUETTE <span>£7.25</span></h4>
                        <h4>CHICKEN MAYO BAGUETTE <span>£7.00</span></h4>
                        <h4>CHEESE BAGUETTE <span>£7.00</span></h4>
                        <P>All served with fries and side salad.</P>
                    </div>
                    <div id="menu_details2">
                        <h2>BURGERS</h2>
                        <hr>
                        <h4>BACON CHEESEBURGER <span>£10.75</span></h4>
                        <h4>CHEESEBURGER <span>£10.00</span></h4>
                        <h4>SOUTHERN FRIED CHICKEN BURGER <span>£9.75</span></h4>
                        <h4>CLASSIC BURGER <span>£9.50</span></h4>
                        <h4>MOVING MOUNTAINS VEGAN BURGER <span>£10.75</span></h4>
                        <p>All burgers are served with fries & side salad.</p>
                    </div>
                    <div id="menu_details3">
                        <h2>KIDS MEALS</h2>
                        <hr>
                        <h4>CHICKEN GOUJONS <span>£6.00</span></h4>
                        <h4>FISH GOUJONS <span>£6.00</span></h4>
                        <h4>KIDS MARGHERITA <span>£6.00</span></h4>
                        <p>Choose a drink: water, apple juice or orange juice.</p>
                        <div id="menu2_image"></div>
                    </div>
                </div>`;
  }
  else if (clicked_id == 'm3') {
    add_data.innerHTML=
    `<div id="m3">
    <div id="menu_details">
        <h2>SHARING PLATES</h2>
        <hr>
        <h4>10 CHICKEN WINGS <span>£10.00</span></h4>
        <h4>5 CHICKEN WINGS <span>£6.00</span></h4>
        <h4>5 BUTTERMILK CHICKEN STRIPS <span>£8.00</span></h4>
        <h4>3 BUTTERMILK CHICKEN STRIPS <span>£5.50</span></h4>
        <h4>NACHOS <span>£8.50</span></h4>
        <h4>CHEESE & BACON FRIES <span>£6.25</span></h4>
        <h4>LOADED CHEESY FRIES <span>£6.00</span></h4>
        <h4>JUST FRIES <span>£4.00</span></h4>
        <h4>CHEESY GARLIC CIABATTA <span>£4.00</span></h4>
        <h4>GARLIC BREAD <span>£3.00</span></h4>
    </div>
    <div id="menu_images"></div>
</div>`;
  }
  else if (clicked_id == 'm4') {
    add_data.innerHTML=
    `<div id="m4">
    <div id="menu_details1">
        <h2>HOT DRINKS</h2>
        <hr>
        <h4>HOT CHOCOLATE <span>£3.75</span></h4>
        <h4>LATTE <span>£3.50</span></h4>
        <h4>CAPPUCCINO <span>£3.50</span></h4>
        <h4>AMERICANO <span>£3.00</span></h4>
        <h4>HERBAL TEA <span>£2.25</span></h4>
        <h4>TEA <span>£2.00</span></h4>
    </div>
    <div id="menu_details2">
        <h2>SOFT DRINKS</h2>
        <hr>
        <h4>OASIS (SUMMER FRUITS/CITRUS) <span>£3.00</span></h4>
        <h4>COKE <span>£2.50</span></h4>
        <h4>DIET COKE <span>£2.25</span></h4>
        <h4>FANTA ORANGE <span>£2.50</span></h4>
        <h4>SPRITE <span>£2.50</span></h4>
        <h4>STILL WATER <span>£2.00</span></h4>
        <h4>SPARKLING WATER <span>£2.00</span></h4>
        <h4>ORANGE/APPLE JUICE CARTON <span>£2.00</span></h4>
    </div>
    <div id="menu_details3">
        <h2>BEER & CIDER</h2>
        <hr>
        <h4>HEINEKEN 5% <span>£6.00</span></h4>
        <h4>FOSTERS 4% <span>£5.00</span></h4>
        <h4>INCH’S 4.5% <span>£5.00</span></h4>
        <div id="menu2_image"></div>
    </div>
</div>`;
  }
}

function moushover(obj) {
  for (let i = 0; i < menuItems.length; i++) {
    if (clicked_id != null && obj.id != clicked_id) {
      obj.style.textDecoration = "underline";
      obj.style.textDecorationColor = "#95c11e";
    }
    if (clicked_id == null && obj.id == menuItems[i].id) {
      obj.style.textDecoration = "underline";
      obj.style.textDecorationColor = "#95c11e";
    }
  }
}

function mouse_out(obj) {
  for (let i = 0; i < menuItems.length; i++) {
    if (clicked_id == obj.id) {
    }
    else if (clicked_id != 'undefined' && menuItems[i].id != clicked_id) {
      obj.style.textDecoration = "none";
    }
    else if (clicked_id == 'undefined' && obj.id == menuItems[i].id) {
      obj.style.textDecoration = "none";
    }
  }
}


let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 0) {
      scrollProgress.style.display = "grid";
  } else {
      scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.addEventListener('scroll', calcScrollValue);
window.addEventListener('load', calcScrollValue);

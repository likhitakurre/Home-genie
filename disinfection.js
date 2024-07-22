var KitchenandBathroomPestControl = [
    {
      name: "Bathroom & Kitchen with Utensil Removal",
      rating: "4.83(29.9k)",
      price: 1098,
      strikeprice:999,
      image_url:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1647426125387-7027d3.jpeg",
      thread1: "Unique 2-visit treatment for protection from pests",
      thread2: "Boook if pests are visible only in kitchen & bathroom",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
  
    },
    {
      name: "Bathroom & Kitchen",
      rating: "4.85(20.6k)",
      price: 899,
      strikeprice:400,
      image_url:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1647426123628-370013.jpeg",
      thread1: "Unique 2-visit treatment for protection from pests",
      thread2: "Removal & placing back of utensils to be done by customer",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
    },
  ];
  
  var HomePestControl= [
    {
      name: "Apartment Pest Control",
      rating: "4.87(42.8k)",
      price: 1299,
      strikeprice:1799,
      image_url:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651737013797-ff8709.png",
      thread1: "Essential pre-service inspection of the entire house to assess....",
      thread2:"Unique two-visit treatment|Recommend for long lasting...",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
    },
    {
      name: "Bungalow Pest Control",
      rating: "4.83(2.5k)",
      price: 1799,
      strikeprice:1199,
      image_url:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651666576046-d0c32e.png",
      thread1: "Essential pre-service inspection of the entire house to assess...",
      thread2:"Unique two visit treatment|Recommended for long lasting...",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
    },
    {
      name: "Utensils Removal Service",
      rating: "4.84(24.4k)",
      price: 199,
      strikeprice:149,
      image_url:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1623828140853-1fc1b7.jpeg",
      thread1: "Partner will remove the utensils before starting the service.",
      thread2:"Placing back the utensils to be done by the customer",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
    },
    
  ];
  var OfficesandShopsPestControl = [
    {
        name: "Offices Pest Control",
        rating: "4.70(1.6k)",
        price: 1649,
        strikeprice:1248,
        time: "1hr 15 mins",
        image_url:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1623751895147-69ee17.jpeg",
        thread1:"Essential pre-service inspection to spot cockroaches,ants,spiders...",
        thread2:"Unique 2-visit treatment to target eggs,nymphs & adult pests",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
    },
    {
        name: "Retail Shpos Pest Control",
        rating: "4.69(202 )",
        price: 1649,
        strikeprice:799,
        time: "45 mins",
        image_url:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1623752286045-ed1e89.jpeg",
        thread1:"Essential pre service inspection of all surfaces,corners,crevices,etc ",
        thread2:"Unique 2-visit treatment to target eggs,nymphs& adult pests",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
    },
  ]
  KitchenandBathroomPestControldisplay();
  HomePestControldisplay();
  OfficesandShopsPestControldisplay();
  
  
  //event & localStorage
  var cartpage=JSON.parse(localStorage.getItem("items"))||[];
  var total=(localStorage.getItem("totalvalue"))||0;
  
  
  function KitchenandBathroomPestControldisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", "KitchenandBathroomPestControl");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "Kitchen and Bathroom Pest Control";
    section.append(head);
    KitchenandBathroomPestControl.map(function (elem, index) {
      var parentdiv = document.createElement("div");
  
      var namep = document.createElement("h3");
      namep.innerText = elem.name;
  
      var ratingp = document.createElement("p");
      ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;
  
      var pricep = document.createElement("p");
      pricep.innerText = elem.price;
      var seconddiv = document.createElement("dvi");
      seconddiv.append(namep, ratingp, pricep);
      var image = document.createElement("img");
      image.setAttribute("id", "smallimage");
      var thirddiv = document.createElement("div");
  
      image.setAttribute("src", elem.image_url);
      image.setAttribute("alt", index);
      var add = document.createElement("p");
      add.innerText = "Add";
      
      add.addEventListener("click",function(){addToCart(elem);} );
      thirddiv.append(image, add);
      var firstdiv = document.createElement("div");
      firstdiv.setAttribute("id", "KitchenandBathroomPestControlflex");
      firstdiv.append(seconddiv, thirddiv);
      var thread1p = document.createElement("p");
      thread1p.innerText = elem.thread1;
  
      var fourdiv = document.createElement("div");
      var viewdetils = document.createElement("h3");
      viewdetils.innerHTML = "View Details";
      viewdetils.setAttribute("id", "viewdetais");
      fourdiv.append(thread1p, viewdetils);
      fourdiv.setAttribute("id", "desdiv");
      parentdiv.append(firstdiv, fourdiv);
      section.append(parentdiv);
      document.getElementById("productcart").append(section);
    });
  }
  function HomePestControldisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", "HomePestControl");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "Home Pest Control";
    section.append(head);
    HomePestControl.map(function (elem, index) {
      var parentdiv = document.createElement("div");
  
      var namep = document.createElement("h3");
      namep.innerText = elem.name;
  
      var ratingp = document.createElement("p");
      ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;
  
      var pricep = document.createElement("p");
      pricep.innerText = elem.price;
      var seconddiv = document.createElement("dvi");
      seconddiv.append(namep, ratingp, pricep);
      var image = document.createElement("img");
      image.setAttribute("id", "smallimage");
      var thirddiv = document.createElement("div");
  
      image.setAttribute("src", elem.image_url);
      image.setAttribute("alt", index);
      var add = document.createElement("p");
      add.innerText = "Add";
      
      add.addEventListener("click",function(){addToCart(elem);} );
      thirddiv.append(image, add);
      var firstdiv = document.createElement("div");
      firstdiv.setAttribute("id", "KitchenandBathroomPestControlflex");
      firstdiv.append(seconddiv, thirddiv);
      var thread1p = document.createElement("p");
      thread1p.innerText = elem.thread1;
  
      var fourdiv = document.createElement("div");
      var viewdetils = document.createElement("h3");
      viewdetils.innerHTML = "View Details";
      viewdetils.setAttribute("id", "viewdetais");
      fourdiv.append(thread1p, viewdetils);
      fourdiv.setAttribute("id", "desdiv");
      parentdiv.append(firstdiv, fourdiv);
      section.append(parentdiv);
      document.getElementById("productcart").append(section);
    });
  }
  
  function OfficesandShopsPestControldisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", "OfficesandShopsPestControl");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "Offices and Shops Pest Control";
    section.append(head);
    OfficesandShopsPestControl.map(function (elem, index) {
      var parentdiv = document.createElement("div");
  
      var namep = document.createElement("h3");
      namep.innerText = elem.name;
  
      var ratingp = document.createElement("p");
      ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;
  
      var pricep = document.createElement("p");
      pricep.innerText = elem.price;
      var seconddiv = document.createElement("dvi");
      seconddiv.append(namep, ratingp, pricep);
      var image = document.createElement("img");
      image.setAttribute("id", "smallimage");
      var thirddiv = document.createElement("div");
  
      image.setAttribute("src", elem.image_url);
      image.setAttribute("alt", index);
      var add = document.createElement("p");
      add.innerText = "Add";
  
     
      add.addEventListener("click",function(){addToCart(elem);} );
  
      thirddiv.append(image, add);
      var firstdiv = document.createElement("div");
      firstdiv.setAttribute("id", "KitchenandBathroomPestControlflex");
      firstdiv.append(seconddiv, thirddiv);
      var thread1p = document.createElement("p");
      thread1p.innerText = elem.thread1;
      var fourdiv = document.createElement("div");
      var viewdetils = document.createElement("h3");
      viewdetils.innerHTML = "View Details";
      viewdetils.setAttribute("id", "viewdetais");
      fourdiv.append(thread1p,  viewdetils);
      fourdiv.setAttribute("id", "desdiv");
      parentdiv.append(firstdiv, fourdiv);
      section.append(parentdiv);
      document.getElementById("productcart").append(section);
    });
  }
  
  
  //product scroll
  
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", navHighlighter);
  function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach((current) => { 
      const sectionHeight = current.offsetHeight;
      const sectionTop =
        current.getBoundingClientRect().top + window.pageYOffset - 50;
      sectionId = current.getAttribute("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector("#productfilterbar a[href*=" + sectionId + "]").classList.add("active");
      } else {
        document
          .querySelector("#productfilterbar a[href*=" + sectionId + "]").classList.remove("active");
      }
    });
  }
  
  if(total>0){
    totalprice();
  }
  function addToCart(elem){
    console.log(elem);
    cartpage.push(elem);
    var total= localStorage.getItem("totalvalue")||0;
    total=parseInt(total)+parseInt(elem.price);
    localStorage.setItem("items",JSON.stringify(cartpage));
    localStorage.setItem("totalvalue",total);
    totalprice();
  }
  
  function totalprice(){
      document.getElementById("tag").style.display="flex";
      document.getElementById("cart_button").style.display="flex";
  
     document.getElementById("sprice").innerText="₹ "+(parseInt(localStorage.getItem("totalvalue"))-50);
     document.getElementById("sprice").style.textDecoration="line-through"
    document.getElementById("total").innerText="₹ "+localStorage.getItem("totalvalue");
  }
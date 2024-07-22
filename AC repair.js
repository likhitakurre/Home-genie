var service = [
  {
    name: "Power Saver AC service",
    rating: "4.83(69.9k)",
    price: 599,
    strikeprice:749,
    image_url:
      "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1710823009022-7427f2.jpeg",
    thread1: "Advanced Foam-Jet Technology",
    thread2:"Deep jet cleaning of outdoor units",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Anti-rust deep clean AC service",
    rating: "4.76(64.5k)",
    price: 999,
    strikeprice:1099,
    image_url:
      "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1709306203358-a1c326.jpeg",
    thread1: "Prevents frequent gas leakages througn a unique anti-rust spray",
    thread2:"Applicable on both split and window ACs",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
];
var repairandGasRefill = [
  {
      name: "AC repair(Split/window) ",
      rating: "4.75(18.6k)",
      price: 299,
      strikeprice:348,
      time: "2 hrs",
      image_url:
      "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1677590614257-d2a5df.jpeg",
      thread1:"Detailed issue diagnosis with same day resolution",
      thread2:"Visit charges of Rs 299 will be adjusted in the final bill",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Gas leak & refill",
      rating: "4.81(20.2k)",
      price: 2500,
      strikeprice:2799,
      time: "2 hrs",
      image_url:
      "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1677575120274-944efb.jpeg",
      thread1:"Thorough diagnosis,leak identification & fixing,gas refill to avoid lekages ",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  
]
var InstallandUninstall = [
  {
      name: "AC Install ",
      rating: "4.76(19.8k)",
      price: 1499,
      strikeprice:1649,
      time: "",
      image_url:
      "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682666388010-fc108f.jpeg",
      thread1:"Installation of indoor & outdoor units with free gas check",
      thread2:"Procurement of spare parts(at extra cost)",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "AC uninstall",
      rating: "4.83(65.2k)",
      price: 999,
      strikeprice:1099,
      time: "1 hrs 5 mins",
      image_url:
      "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg",
      thread1:"Uninstallation of both indoor & outdoor units ",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  
  
]



servicedisplay();
repairandGasRefilldisplay();
InstallandUninstalldisplay();


//event & localStorage
var cartpage=JSON.parse(localStorage.getItem("items"))||[];
var total=(localStorage.getItem("totalvalue"))||0;






  function servicedisplay(){
  var section = document.createElement("section");
  section.setAttribute("id", "service");
  var head = document.createElement("h1");
  head.setAttribute("id", "heading");
  head.innerText = "Service";
  section.append(head);
  service.map(function (elem, index) {
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
    firstdiv.setAttribute("id", "serviceflex");
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

function repairandGasRefilldisplay() {
  var section = document.createElement("section");
  section.setAttribute("id", "repairandGasRefill");
  var head = document.createElement("h1");
  head.setAttribute("id", "heading");
  head.innerText = "Repair & gas Refill";
  section.append(head);
  repairandGasRefill.map(function (elem, index) {
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
    firstdiv.setAttribute("id", "serviceflex");
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

function InstallandUninstalldisplay() {
  var section = document.createElement("section");
  section.setAttribute("id", "InstallandUninstall");
  var head = document.createElement("h1");
  head.setAttribute("id", "heading");
  head.innerText = "Install & Uninstall";
  section.append(head);
  InstallandUninstall.map(function (elem, index) {
    var parentdiv = document.createElement("div");

    var namep = document.createElement("h3");
    namep.innerText = elem.name;

    var ratingp = document.createElement("p");
    ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;

    var pricep = document.createElement("p");
    pricep.innerHTML = elem.price+"&nbsp  &nbsp &nbsp &nbsp &nbsp "+ elem.time;
    var seconddiv = document.createElement("dvi");
    seconddiv.append(namep, ratingp, pricep);
    var image = document.createElement("img");
    image.setAttribute("id", "smallimage");
    var thirddiv = document.createElement("div");

    image.setAttribute("src", elem.image_url);
    image.setAttribute("alt", index);
    var add = document.createElement("p");
    add.innerText = "Add";
    
    add.addEventListener("click",function(){addToCart(elem)} );
    thirddiv.append(image, add);
    var firstdiv = document.createElement("div");
    firstdiv.setAttribute("id", "serviceflex");
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

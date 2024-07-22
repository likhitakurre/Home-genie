var Bestsellerpackages= [
    {
      name: "Summer refresh package",
      rating: "4.91(24.9k reviews)",
      price: 2069,
      image_url:"https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Best-Mens-Salons-in-Sharjah-A-16-04-1024x640.jpg",
      thread1: "Pedicure:Aroma bomb pedicure   ,   Skin:Detan",
      thread2: "",
      thread3: "",
      thread4: "",
      thread5: "",
    },
    {
      name: " Haircut + Beard + Detan",
      rating: "4.92(266k)",
      price: 1499,
      image_url:"https://servicemarketwp.imgix.net/wp-content/uploads/2022/06/cost-of-mens-salon-at-home-745x400-1.png",
      thread1: "Haircut,shave,Detan(O3+)",
      thread2: "",
      thread3: "",
      thread4: "",
      thread5: "",
    },
];
  var Menkidshaircut = [
    {
      name: "Haircut for men",
      rating: "4.96(273k)",
      price: 439,
      image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLAIN0fBYIOS3n-h10rLvGu4OYdlFBbyLa7D83B43IUQ&s.jpg",
      thread1: "Bespoke haircut with hairspar,blow dry &a dry head massage",
      thread2: "",
      thread3: "",
      thread4: "",
      thread5: "",
    },
    {


      name: "Haircut for kids",
      rating: "4.72(44.5k)",
      price: 409,
      image_url:"https://lirp.cdn-website.com/796c4dcf/dms3rep/multi/opt/Men-2-640w.jpg",
      thread1: "Specially trained stylists for boys aged 2 yrs and above",
      thread2: "",
      thread3: "",
      thread4: "",
      thread5: "",
    },
  ];
  
  var Facecare= [
    
    {
      name: "Golden Glow Facial",
      rating: "4.90(5k)",
      price:1500,
      image_url:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1677500817490-776565.jpeg",
      thread1:"Get an instant glow and enchanced cllagen levels.",
      thread2:"",
      thread3: "",
      thread4: "",
      thread5: "",
    },
    {
      name: "Skin brightening facial",
      rating: "4.7(96.6k)",
      price: 1999,
      image_url:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_520,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1678118403717-007af5.jpeg",
      thread1:"Power-packed seaweed to improve skintexture&fight ageing",
      thread2:"",
      thread3: "",
      thread4: "",
      thread5: "",
    },
    {
      name: "Face & Neck Detan(O3+)",
      rating: "4.87(26k)",
      price: 799,
      image_url:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_520,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1678118564986-c114bc.jpeg",
      thered1:" Tan removal with reduction of dark sports blemishes& pigmentation",
      thread2:"",
      thread3: "",
      thread4: "",
      thread5: "",
    },
  ];
  var Shave = [
    {
        name: "Clean shave",
        rating: "4.9(64k)",
        price: 299,
        image_url:"https://www.philips.com/c-dam/b2c/mg-q4-campaign/en_GB/face-shavers/series-7000/articles/clean-shaven-look.jpg",
        thread1:"Effortless shave with pre-shave oil,face cleaning & a relaxing face massage",
        thread2:"",
      thread3: "",
      thread4: "",
      thread5: "",
    },
    {
        name: "Beard trimming & styling",
        rating: "4.93(49.2k)",
        price:399,
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUn278D6OOi6WGAHxLkvrnQ2WFDE-eWBql4A&s.jpg",
        thread1:"Bespoke beard styling ,pre&post-shave conditing with relaxing face massage",
        thread2:"",
      thread3: "",
      thread4: "",
      thread5: "",
    },
    
    
  ]
  Bestsellerpackagesdisplay();
  Menkidshaircutdisplay();
  Facecaredisplay();
  Shavedisplay();
  
  


  var cartpage=JSON.parse(localStorage.getItem("items"))||[];
  var total=(localStorage.getItem("totalvalue"))||0;
  
  function  Bestsellerpackagesdisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", " Bestsellerpackages");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "Bestseller packages";
    section.append(head);
    Bestsellerpackages.map(function (elem, index) {
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
      firstdiv.setAttribute("id", "waxingflex");
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


  
  function Menkidshaircutdisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", " Menkidshaircut");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "Men & kids haircut";
    section.append(head);
    Menkidshaircut.map(function (elem, index) {
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
      firstdiv.setAttribute("id", "waxingflex");
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


  function  Facecaredisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", " Facecare");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "Face care";
    section.append(head);
    Facecare.map(function (elem, index) {
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
      firstdiv.setAttribute("id", "waxingflex");
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


  function Shavedisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", "Shave");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "Shave";
    section.append(head);
    Shave.map(function (elem, index) {
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
      firstdiv.setAttribute("id", "waxingflex");
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
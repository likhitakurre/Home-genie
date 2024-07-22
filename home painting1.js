var bestseller = [
    {
      pack: "PACKAGE",
      name: "At home consultation",
      rating: "4.89(25.9k)",
      price: 49,
      strikeprice: 89,
      time: "1 hrs 5 mins",
      image_url:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_717,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1707420955093-3970d2.jpeg",
      thread1: "Consult,quote and team of experts trained for high quality work",
      thread2: "",
      thread3: "",
      thread4: "",
      thread5: "",
    },
  ];
  bestsellerdisplay();
  
  //event & localStorage
  var cartpage=JSON.parse(localStorage.getItem("items"))||[];
  var total=(localStorage.getItem("totalvalue"))||0;
  
  
  function bestsellerdisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", "bestsellar");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "";
    section.append(head);
    bestseller.map(function (elem) {
      var parentdiv = document.createElement("div");
      var packp = document.createElement("h5");
      packp.innerHTML = '<i class="fa-solid fa-box"></i> ' + elem.pack;
      packp.setAttribute("class", "packagecolor");
      var namep = document.createElement("h3");
      namep.innerText = elem.name;
      var addbtn= document.createElement("button");
      addbtn.innerText="Add";
      addbtn.setAttribute("class","add");
      addbtn.style.marginLeft="80%";
      addbtn.addEventListener("click",function(){addToCart(elem);} );
    
  
      var ratingp = document.createElement("p");
      ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;
      var pricep = document.createElement("p");
      pricep.innerHTML = "₹ " + elem.price + "&nbsp &nbsp&nbsp  " + elem.time;
      var edit = document.createElement("button");
      edit.innerHTML = "<b>Edit your package<b>";
      edit.setAttribute("class", "edit");
      var seconddiv = document.createElement("div");
      seconddiv.setAttribute("id", "seconddiv");
      var firstdiv = document.createElement("div");
  
      var thread1p = document.createElement("p");
      thread1p.innerText = elem.thread1;
  
      var thread2p = document.createElement("p");
      thread2p.innerText = elem.thread2;
  
      var thread3p = document.createElement("p");
      thread3p.innerText = elem.thread3;
  
      var thread4p = document.createElement("p");
      thread4p.innerText = elem.thread4;
  
      var thread5p = document.createElement("p");
      thread5p.innerText = elem.thread5;
      seconddiv.append(thread1p, thread2p, thread3p, thread4p, thread5p, edit);
      firstdiv.append(packp, namep,addbtn, ratingp, pricep);
      parentdiv.append(firstdiv, seconddiv);
      section.append(parentdiv);
      parentdiv.setAttribute("id", "parentdiv");
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
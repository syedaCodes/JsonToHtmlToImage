var products = [
    { 
     "item": "Toor Dal",
     "brand": "Loose",
     "unit": "All",
     "mrp":  ["150"],
     "discount": ["10"],
     "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"   
    },
    { 
      "item": "MoongDal",
      "brand": "TATA",
      "unit": "All",
      "mrp":  ["150"],
      "discount": ["10"],
      "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"    
    },
    { 
      "item": "ChanaDal",
      "brand": "Nature",
      "unit": "All",
      "mrp":  ["120"],
      "discount": ["10"],
      "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"    
    },
    { 
      "item": "Soap",
      "brand": "Loose",
      "unit": "All",
      "mrp":  ["0"],
      "discount": ["10"],
      "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"    
    },
    { 
      "item": "Bath Soap",
      "brand": "Pears",
      "unit": ["30gms"],
      "mrp":  ['0'],
      "discount": ['10'],
      "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"    
    },
    { 
      "item": "Bath Soap",
      "brand": "Liril",
      "unit": ["30gms"],
      "mrp":  ["50"],
      "discount": ["10"],
      "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"    
    },
    { 
      "item": "Shampoo",
      "brand": "All",
      "unit": ["100ml"],
      "mrp": ["0"],
      "discount": ["10"],
      "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"    
    },
    { 
      "item": "Groundnut Oil",
      "brand": "Saffalo",
      "unit": ["1L"],
      "mrp": ["300"],
      "discount": ["10"],
      "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"
    },
    { 
      "item": "Palm Oil",
      "brand": "Vijaya",
      "unit": ["1L", "2L"],
      "mrp": ["100"],
      "discount": ["10"],
      "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"
    },

    { 
        "item": "Dry fruits",
        "brand": "Loose",
        "unit": "All",
        "mrp":  ["150"],
        "discount": ["10"],
        "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"   
       },
       { 
         "item": "Salt",
         "brand": "TATA",
         "unit": "All",
         "mrp":  ["150"],
         "discount": ["10"],
         "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"    
       },
       { 
         "item": "Oil",
         "brand": "Nature",
         "unit": "All",
         "mrp":  ["120"],
         "discount": ["10"],
         "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"    
       },
       { 
         "item": "Herbs",
         "brand": "Loose",
         "unit": "All",
         "mrp":  ["0"],
         "discount": ["10"],
         "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"    
       },
       { 
         "item": "Bath Soap",
         "brand": "Pears",
         "unit": ["30gms"],
         "mrp":  ['0'],
         "discount": ['10'],
         "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"    
       },
       { 
         "item": "Bath Soap",
         "brand": "Liril",
         "unit": ["30gms"],
         "mrp":  ["50"],
         "discount": ["10"],
         "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"    
       },
       { 
         "item": "Shampoo",
         "brand": "All",
         "unit": ["100ml"],
         "mrp": ["0"],
         "discount": ["10"],
         "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"    
       },
       { 
         "item": "Groundnut Oil",
         "brand": "Saffalo",
         "unit": ["1L"],
         "mrp": ["300"],
         "discount": ["10"],
         "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"
       },
       { 
         "item": "Palm Oil",
         "brand": "Vijaya",
         "unit": ["1L", "2L"],
         "mrp": ["100"],
         "discount": ["10"],
         "Item_imageurl": "assets/images/pomidor-dlya-volos.jpg"
       }
]


calculatePages(products);

function clearTable(){
    document.getElementById('product_table').innerHTML='';
}

function calculatePages(items, page, resPerPage) {
    page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    resPerPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 9;
    var start = (page - 1) * resPerPage;
    var end = page * resPerPage;
    items.slice(start, end).forEach(htmlArray);
    pageSwitchAuto(page, items.length, resPerPage);
}

function htmlArray(product){

    if((Array.isArray(product.unit).length < 1) && product.mrp){
        html= `<div class="product_box" id="${product.item}_${product.brand}">
        <h5 class="product_brand">${product.item}</h5>
        <h4 class="product_heading">${product.brand}</h4>
        <a class="product_discount"><span>${product.discount}</span>%</a>
        <div class="product_imageholder">
            <img src="${product.Item_imageurl}" alt="product image" class="product_image">
        </div>
        <a class="product_mrp">₹<span>${product.mrp}</span></a>
        <p class="product_size">Sizes available: <span>${product.unit}</span></p>
        <p class="product_offerType"></p>
        </div>`;
    }
    else if(Array.isArray(product.unit).length > 1){
        html = `<div class="product_box" id="${product.item}_${product.brand}">
            <h5 class="product_brand">${product.item}</h5>
            <h4 class="product_heading">${product.brand}</h4>
            <a class="product_discount"><span>${product.discount}</span>%</a>
            <div class="product_imageholder">
                <img src="${product.Item_imageurl}" alt="product image" class="product_image">
            </div>
        <a class="product_mrp">₹<span>${product.mrp}</span></a>
        <a class="product_size">Sizes available: <span>${product.unit[0]}</span></a>,
        <a class="product_size"><span>${product.unit[1]}</span></a>,
        <a class="product_size"><span>${product.unit[2]}</span></a>
        </div>`;
    }
    else if(product.unit){
        html = `<div class="product_box" id="${product.item}_${product.brand}">
        <h5 class="product_brand">${product.item}</h5>
        <h4 class="product_heading">${product.brand}</h4>
        <a class="product_discount"><span>${product.discount}</span>%</a>
        <div class="product_imageholder">
            <img src="${product.Item_imageurl}" alt="product image" class="product_image">
        </div>
        <a class="product_mrp">₹<span>${product.mrp}</span></a>
        <p class="product_size">Sizes available: <span>${product.unit}</span></p>
        </div>`;
    }
    document.getElementById('product_table').insertAdjacentHTML('beforeend', html);
}

function capture(){
    html2canvas(document.querySelector('.product_table'), { 
        logging: true, letterRendering: 1, allowTaint: false, onrendered: function(canvas){
            return Canvas2Image.saveAsPNG(canvas);
    }, useCORS: true });
}

function pageSwitchAuto(page, length, resPerPage){
    var totalPages = Math.ceil(length / resPerPage);
    capture();
    setTimeout(function(){
        nextPage(page, totalPages);
    }, 3000);
}

function nextPage(page, totalPages) {
    if(page < totalPages){
        const goto = parseInt(page+1, 10);
        clearTable();
        calculatePages(products, goto);
    }
}

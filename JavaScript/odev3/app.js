const menu = [
  {
    id: 1,
    title: 'Tteokbokki',
    category: 'Korea',
    price: 10.99,
    img:
      'https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg',
    desc: `Spicy rice cakes, serving with fish cake.`
  },
  {
    id: 2,
    title: 'Chicken Ramen',
    category: 'Japan',
    price: 7.99,
    img:
      'https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg',
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `
  },
  {
    id: 3,
    title: 'Bibimbap',
    category: 'Korea',
    price: 8.99,
    img:
      'https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg',
    desc: `Boiling vegetables, serving with special hot sauce`
  },
  {
    id: 4,
    title: 'Dan Dan Mian',
    category: 'China',
    price: 5.99,
    img:
      'https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg',
    desc: `Dan dan noodle, serving with green onion `
  },
  {
    id: 5,
    title: 'Yangzhou Fried Rice',
    category: 'China',
    price: 12.99,
    img:
      'https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg',
    desc: `Yangzhou style fried rice, serving with bean and pickles `
  },
  {
    id: 6,
    title: 'Onigiri',
    category: 'Japan',
    price: 9.99,
    img:
      'https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg',
    desc: `Rice Sandwich, serving with soy sauce`
  },
  {
    id: 7,
    title: 'Jajangmyeon',
    category: 'Korea',
    price: 15.99,
    img:
      'https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg',
    desc: `Black bean sauce noodle, serving with green onion `
  },
  {
    id: 8,
    title: 'Ma Yi Shang Shu',
    category: 'China',
    price: 12.99,
    img:
      'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg',
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`
  },
  {
    id: 9,
    title: 'Doroyaki',
    category: 'Japan',
    price: 3.99,
    img:
      'https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg',
    desc: `Red bean paste dessert, serving with honey.`
  }
]

// *******************************************************************

// Yeni yemek eklemeleri yaptım
menu.push({
  id: 10,
  title: 'Lahmacun',
  category: 'Turkey',
  price: '8.00',
  img: 'https://imgrosetta.mynet.com.tr/file/11942326/11942326-1200x675.jpg',
  desc: 'Lahmacun is a kind of stuffed pita in the Middle East cuisine, which is made by spreading the stuff prepared with ground meat, parsley, onion, garlic and spices such as isot (red pepper) on the rolled dough and then cooked in a stone oven.'
},
{
  id: 11,
  title: 'Doner',
  category: 'Turkey',
  price: '15.00',
  img: 'https://www.cukurovabarisgazetesi.net/images/haberler/resimler/2/12832.jpg',
  desc: 'Doner, or doner kebab, is a dish unique to Turkish cuisine, in which pieces of meat seasoned with tallow and local spices are cooked on a skewer and hung upright in front of a wood fire.'
})


//                                      Buttons
let buttonsDiv = document.querySelector(".btn-container")

// [... new Set(array)]: bu işlem array içindeki eşsiz değerleri döndürüyor.
// unique = kategori isimlerini tutan değişken
let uniqueCategories = [... new Set(menu.map((item) => {
  let unique = item.category
  return unique
}))]

buttonsDiv.innerHTML=`<button type="button" class="btn btn-outline-dark btn-item" name="All" >All</button>` 

// Kategori isimlerine göre buton oluşturan kod parçası
lengthUnique = uniqueCategories.length
for(let i = 0; i < lengthUnique; ++i){
  let newButton = document.createElement('button');
  newButton.innerHTML=`${uniqueCategories[i]}`
  newButton.className = 'btn btn-outline-dark btn-item';
  newButton.setAttribute("type","button")
  newButton.setAttribute("name",`${uniqueCategories[i]}`)
  buttonsDiv.appendChild(newButton);
}

//                                              Menu
// menü ürünlerinin bulunacağı div
let menuRowDiv = document.querySelector('.section-center.row')

// Menü Ürünlerini menu dizisinden çekerek ekleyen kod parçası
menu.map( item =>{
  // Her yiyecek için ayrı bir div oluşturdum
  let newMenuItem = document.createElement('div');
  newMenuItem.className = 'menu-items col-sm-12 col-lg-6'
  newMenuItem.name = item.category;


  // Her yiyeceğin görselini ekledim
  let newPhoto = document.createElement('img');
  newPhoto.className = 'photo'
  newPhoto.setAttribute('src',item.img)
  newPhoto.setAttribute('alt',item.title)
  newMenuItem.appendChild(newPhoto)

  // Menü detaylarının olacağı kısmı kapsayan genel Div
  let menuInfo = document.createElement('div');
  menuInfo.className = 'menu-info'

  // Menü başlığı
  let menuTitle = document.createElement('div');
  menuTitle.className = 'menu-title'
  let menuTitleName = document.createElement('h4')
  let menuPrice = document.createElement('h4')
  menuTitleName.innerHTML=`${item.title}`
  menuPrice.innerHTML=`${item.price}`
  menuTitle.appendChild(menuTitleName)
  menuTitle.appendChild(menuPrice)

  menuInfo.appendChild(menuTitle)
  // Menü açıklama yazısı
  let menuDescr = document.createElement('div');
  menuDescr.className = 'menu-text'
  menuDescr.innerHTML = `${item.desc}`

  menuInfo.append(menuDescr)

  // Menü detaylarını genel div'e ekledim. newPhoto ile menuInfo; newMenuItem'ın temel 2 child'ı oldu.
  newMenuItem.appendChild(menuInfo)

  // Bütün menüleri menülerin olacağı div'e ekledim.
  menuRowDiv.appendChild(newMenuItem)
} )

//                                             Button Filtering

// Menülerin name bilgilerini kullanarak filtreleme yapacağım
let menuItems = document.querySelectorAll('div.menu-items.col-sm-12.col-lg-6')

// Butonlara event listener ekledim
buttonsDiv.addEventListener("click",(e)=>{
  // name bilgisi All olan butona tıklanınca bütün ürünler görüntülensin diye d-none class'ını kaldırdım
  if(e.target.name === 'All'){
    for (let m = 0 ; m < menuItems.length ; ++m){
      menuItems[m].classList.remove("d-none")
    }
  }
  // name bilgisi tıklanan kategori ile eşleşen ürünlerler hariç diğerlerini gizledim
  uniqueCategories.map(item => {
    if(e.target.name === item){
      for (let m = 0 ; m < menuItems.length ; ++m){
        menuItems[m].classList.remove("d-none")
        if(menuItems[m].name != item){
          menuItems[m].classList.add("d-none")
        }
      }
    }
  })
});














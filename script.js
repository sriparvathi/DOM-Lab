//DOM Lab
let mainE1 = document.querySelector("main");//1.0
mainE1.style.backgroundColor = 'var(--main-bg)';//1.1
mainE1.innerHTML = "<h1>SEI Rocks!</h1>";//1.2
mainE1.classList.add('flex-ctr');//1.3
topMenuEl = document.getElementById("top-menu");//2.0
topMenuEl.style.height = "100%";//2.1
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';//2.2
topMenuEl.classList.add('flex-around');//2.3
// topMenuEl.classList.add('flex-ctr');
// console.log(topMenuEl.classList);
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];
//for each-3.1
menuLinks.forEach(function (link) {
  let linkEl = document.createElement("a");
  linkEl.setAttribute("href", link.href);
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
});
//for loop-3.1
//const topMenuE1 = document.querySelector('#top-menu');
// for(let i=0; i<menuLinks.length; i++){
//   let a= document.createElement('a');
//   a.attributes.href = menuLinks[i].href;
//   a.innerText= menuLinks[i].text;
//   topMenuE1.appendChild(a);
//4.0
let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = '100%';//4.1
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';//4.2
subMenuEl.classList.add('flex-around');//4.3
subMenuEl.style.position = 'absolute';//4.4
subMenuEl.style.top = '0';//4.5
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];
//5.1
let topMenuLinks = document.getElementsByTagName("a");
let showingSubMenu = false;
//5.2
topMenuEl.addEventListener('click', function (e) { // variable e 
  e.preventDefault();
  if (e.target.tagName != 'A') {
    return;
  }
  console.log(e.target.innerText);
  //console.log(e);// console will show all nav bar. for testing| production environment.
  //updateActiveLinks(topMenuLinks, e.target);
});

//5.3 if clicked <a> link has a class "active"
// if(e.target.classList.contains('active')) {
//   e.target.classList.remove('active');
//   showingSubMenu = false;
//   subMenuEl.style.top = '0';
  
// }
// //5.4 remove class active from topMenuLinks
// for (let i = 0; i < topMenuLinks.length; i++) {
//   topMenuLinks[i].classList.remove('active');
// }
// //5.5 add class name active to <a>if clicked
// e.target.classList.add('active');
// //5.6 if sublinks change show submenu to true
// if (e.target.sublinks != undefined) {
//   showingSubMenu = true
// } else {
//   showingSubMenu = false
// }

// //5.7 if submenu = true build submenu and fix css
// if (showingSubMenu === true) {
//   buildSubMenu(e.target.subLinks)
// }
// //5.8 code  buildSubMenu function







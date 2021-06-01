let list = document.querySelector(".posts");
var myNode = document.querySelector(".foo");
let button = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let button4 = document.querySelector("#button4");
let pagination = document.querySelector(".pag");
let a = document.querySelector(".a");

let items = document.querySelectorAll(".pag li");
async function getResponce() {
  let response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  );
  let content = await response.json();
  let result = content.results;
  console.log(result);
  let ganres = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate"
  );
  let isMovie = await ganres.json();
  let isGanres = isMovie.results;
  console.log(isGanres);
  let ganres2 = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_watch_monetization_types=flatrate"
  );
  let isMovie2 = await ganres2.json();
  let isGanres2 = isMovie2.results;
  console.log(isGanres2);
  let ganres3 = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4&with_watch_monetization_types=flatrate"
  );
  let isMovie3 = await ganres3.json();
  let isGanres3 = isMovie3.results;
  console.log(isGanres3);

  results = [].concat(result, isGanres, isGanres2, isGanres3);
console.log(results);






let i;
/*let l = results['i'].id;
results.forEach(function(elem) { // проходим все элементы коллекции
  elem.addEventListener("click", function(){ // устанавливаем каждому элементу li обработчик события dblclick


    let str = await fetch(
      "https://api.themoviedb.org/3/movie/{movie_id}?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US"
    );
    let getOne = await str.json();
    console.log(getOne);
  })
})
console.log(l);*/
/*let str = await fetch(
  "https://api.themoviedb.org/3/movie/{movie_id}?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US"
);
let getOne = await str.json();
console.log(getOne);
 results.forEach(function(item,i){
 )}
 for (key in getOne) {
        li.innerHTML += `
            <div class = "wrap">
            <img class="img" src="https://image.tmdb.org/t/p/w500/${notes[key].poster_path}"
            <br>
            <h4> ${notes[key].title}</h4>
            </div>
            `;
      }
results[i].poster_path.addEventListener("click", myFunction);

function myFunction() {
    alert ("Hello World!");
} 
*/

results.forEach(function(item, index){
 let k = results[index];
  let h = `${item.poster_path}`;
//  results.addEventListener('click', function() {
  // console.log( k, `Индекс: ${index}, элемент: ${item.id}, ${item.poster_path}`);
   //})
  

 // let n = fetch('https://api.themoviedb.org/3/movie/{this.item.id}?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US')
 // .then(function (response) {
 //   return response.json()
 // })
 
    
});

//for (let i = 0; i < results.length; i++) {
for (var key in results) {
let m = results[key].poster_path;
//console.log(m);
}
for (index = 0; index < results.length; index++) {
  for (var key in results) {
    let m = results[key].poster_path;
    
  button = m[index];
 
}
}
//}

//for (let i = 0; i < results.length; i++) {
  /*let t = document.querySelector('.posts');
  t.addEventListener('click', ()=>{
    console.log('1');
    for (var key in results) {
      async function getResponce() {
      let str = await fetch(
        "https://api.themoviedb.org/3/movie/{movie_id}?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US"
      );
      let getOne = await str.json();
      console.log(getOne);
      }
    }
    });*/
 // console.log(button.i)
 // button.addEventListener('click', function (event) {
  //  console.log('click');
  //  event.preventDefault();
//});
//}


let elemen = [...document.getElementsByClassName('img')].forEach(item => { 
  console.log(item);
  item.addEventListener('click', ()=>{
    console.log('1');
    let n = fetch('https://api.themoviedb.org/3/movie/{this.item.id}?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US')
    .then(function (response) {
       return response.json()
       })
    });
});




  let notesOnPage = 8;
  let countOfItems = Math.ceil(results.length / notesOnPage);
  let items = [];
  for (let i = 1; i <= countOfItems; i++) {
    let li = document.createElement("li");
    li.innerHTML = i;
    pagination.appendChild(li);
    items.push(li);
  }

  let showPage = (function () {
    let active;
    return function (item) {
      if (active) {
        active.classList.remove("active");
      }
      active = item;
      item.classList.add("active");
      let pageNum = +item.innerHTML;
      let start = (pageNum - 1) * notesOnPage;
      let end = start + notesOnPage;
      let notes = results.slice(start, end);
      list.innerHTML = "";

      let key;
      let li = document.createElement("li");
      li.classList.add("foo");
      li.id="foo";
      list.appendChild(li);
      for (key in notes) {
        li.innerHTML += `
            <div id = "wr" class = "wrap">
            <img class="img" src="https://image.tmdb.org/t/p/w500/${notes[key].poster_path}"
            <br>
            <h4> ${notes[key].title}</h4>
            <button name="del"    class="but"><img class= "rubbish" src='../img/мусорка.png'> </button>
            </div>
            
            
            `;
      }
    };
  })();








   
    results.forEach(function(i){
        let button5 = document.getElementsByClassName('but');
        button5.onclick='deleteElem(${i})';
        const deleteElem = index =>{    
            results.splice(index,1);
        }
    });
  
  showPage(items[0]);
  for (let item of items) {
    item.addEventListener("click", function () {
      showPage(this);
    });
  }
  
}
getResponce();
async function getResponce2() {
  let response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1with_watch_monetization_types=flatrate"
  );
  let content = await response.json();
  let result = content.results;
  console.log(result);
  let ganres = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=7&with_watch_monetization_types=flatrate"
  );
  let isMovie = await ganres.json();
  let isGanres = isMovie.results;
  console.log(isGanres);
  let ganres2 = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate"
  );
  let isMovie2 = await ganres2.json();
  let isGanres2 = isMovie2.results;
  console.log(isGanres2);
  let ganres3 = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=9&with_watch_monetization_types=flatrate"
  );
  let isMovie3 = await ganres3.json();
  let isGanres3 = isMovie3.results;
  console.log(isGanres3);
  let results = [].concat(result, isGanres, isGanres2, isGanres3);
  console.log(results);
  let notesOnPage = 8;
  let countOfItems = Math.ceil(results.length / notesOnPage);
  pagination.innerHTML = "";
  items = [];
  for (let i = 1; i <= countOfItems; i++) {
    let li = document.createElement("li");
    li.innerHTML = i;
    pagination.appendChild(li);
    items.push(li);
  }
  let showPage = (function () {
    let active;
    return function (item) {
      if (active) {
        active.classList.remove("active");
      }
      active = item;
      item.classList.add("active");
      let pageNum = +item.innerHTML;
      let start = (pageNum - 1) * notesOnPage;
      let end = start + notesOnPage;
      let notes = results.slice(start, end);
      list.innerHTML = "";
     

      let key;
      let li = document.createElement("li");
      list.appendChild(li);
      for (key in notes) {
        li.innerHTML += `
            <div class = "wrap">
            <img class="img" src="https://image.tmdb.org/t/p/w500/${notes[key].poster_path}"
            <br>
            <h4> ${notes[key].title}</h4>
            </div>
            <a href = "" class="rubbish"><img class= "rubbish" src='../img/мусорка.png'> </a>
            `;
      }
    };
  })();
  showPage(items[0]);
  for (let item of items) {
    item.addEventListener("click", function () {
      showPage(this);
    });
  }
}
button.onclick = getResponce2;
async function getResponce3() {
  let response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=7&with_watch_monetization_types=flatrate"
  );
  let content = await response.json();
  let result = content.results;
  console.log(result);
  let ganres = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=8&with_watch_monetization_types=flatrate"
  );
  let isMovie = await ganres.json();
  let isGanres = isMovie.results;
  console.log(isGanres);
  let ganres2 = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=9&with_watch_monetization_types=flatrate"
  );
  let isMovie2 = await ganres2.json();
  let isGanres2 = isMovie2.results;
  console.log(isGanres2);
  let ganres3 = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=10&with_watch_monetization_types=flatrate"
  );
  let isMovie3 = await ganres3.json();
  let isGanres3 = isMovie3.results;
  console.log(isGanres3);
  let results = [].concat(result, isGanres, isGanres2, isGanres3);
  console.log(results);
  let notesOnPage = 8;
  let countOfItems = Math.ceil(results.length / notesOnPage);
  pagination.innerHTML = "";
  items = [];
  for (let i = 1; i <= countOfItems; i++) {
    let li = document.createElement("li");
    li.innerHTML = i;
    pagination.appendChild(li);
    items.push(li);
  }
  let showPage = (function () {
    let active;
    return function (item) {
      if (active) {
        active.classList.remove("active");
      }
      active = item;
      item.classList.add("active");
      let pageNum = +item.innerHTML;
      let start = (pageNum - 1) * notesOnPage;
      let end = start + notesOnPage;
      let notes = results.slice(start, end);
      list.innerHTML = "";
     

      let key;
      let li = document.createElement("li");
      list.appendChild(li);
      for (key in notes) {
        li.innerHTML += `
            <div class = "wrap">
            <img class="img" src="https://image.tmdb.org/t/p/w500/${notes[key].poster_path}"
            <br>
            <h4> ${notes[key].title}</h4>
            </div>
            <a href = "" class="rubbish"><img class= "rubbish" src='../img/мусорка.png'> </a>
            `;
      }
    };
  })();
  showPage(items[0]);
  for (let item of items) {
    item.addEventListener("click", function () {
      showPage(this);
    });
  }
}
button2.onclick = getResponce3;
async function getResponce4() {
  let response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  );
  let content = await response.json();
  let result = content.results;
  console.log(result);
  let ganres = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate"
  );
  let isMovie = await ganres.json();
  let isGanres = isMovie.results;
  console.log(isGanres);
  let ganres2 = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=3&with_watch_monetization_types=flatrate"
  );
  let isMovie2 = await ganres2.json();
  let isGanres2 = isMovie2.results;
  console.log(isGanres2);
  let ganres3 = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=4&with_watch_monetization_types=flatrate"
  );
  let isMovie3 = await ganres3.json();
  let isGanres3 = isMovie3.results;
  console.log(isGanres3);
  let results = [].concat(result, isGanres, isGanres2, isGanres3);
  console.log(results);
  let notesOnPage = 8;
  let countOfItems = Math.ceil(results.length / notesOnPage);
  pagination.innerHTML = "";
  items = [];
  for (let i = 1; i <= countOfItems; i++) {
    let li = document.createElement("li");
    li.innerHTML = i;
    pagination.appendChild(li);
    items.push(li);
  }
  let showPage = (function () {
    let active;
    return function (item) {
      if (active) {
        active.classList.remove("active");
      }
      active = item;
      item.classList.add("active");
      let pageNum = +item.innerHTML;
      let start = (pageNum - 1) * notesOnPage;
      let end = start + notesOnPage;
      let notes = results.slice(start, end);
      list.innerHTML = "";
     

      let key;
      let li = document.createElement("li");
      list.appendChild(li);
      for (key in notes) {
        li.innerHTML += `
            <div class = "wrap">
            <img class="img" src="https://image.tmdb.org/t/p/w500/${notes[key].poster_path}"
            <br>
            <h4> ${notes[key].title}</h4>
            </div>
            <a onclick = "remove ()" href = "" class="rubbish"><img class= "rubbish" src='../img/мусорка.png'> </a>
            `;
      }
    };
  })();
  showPage(items[0]);
  for (let item of items) {
    item.addEventListener("click", function () {
      showPage(this);
    });
  }
}
button3.onclick = getResponce4;
async function getResponce5() {
  let response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  );
  let content = await response.json();
  let result = content.results;
  console.log(result);
  let ganres = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate"
  );
  let isMovie = await ganres.json();
  let isGanres = isMovie.results;
  console.log(isGanres);
  let ganres2 = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=3&with_watch_monetization_types=flatrate"
  );
  let isMovie2 = await ganres2.json();
  let isGanres2 = isMovie2.results;
  console.log(isGanres2);
  let ganres3 = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=b96af65ab0d48ada0710d9fb445a869d&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=4&with_watch_monetization_types=flatrate"
  );
  let isMovie3 = await ganres3.json();
  let isGanres3 = isMovie3.results;
  console.log(isGanres3);
  let results = [].concat(result, isGanres, isGanres2, isGanres3);
  console.log(results);
  let notesOnPage = 8;
  let countOfItems = Math.ceil(results.length / notesOnPage);
  pagination.innerHTML = "";
  items = [];
  for (let i = 1; i <= countOfItems; i++) {
    let li = document.createElement("li");
    li.innerHTML = i;
    pagination.appendChild(li);
    items.push(li);
  }
  let showPage = (function () {
    let active;
    return function (item) {
      if (active) {
        active.classList.remove("active");
      }
      active = item;
      item.classList.add("active");
      let pageNum = +item.innerHTML;
      let start = (pageNum - 1) * notesOnPage;
      let end = start + notesOnPage;
      let notes = results.slice(start, end);
      list.innerHTML = "";
     

      let key;
      let li = document.createElement("li");
      list.appendChild(li);
      for (key in notes) {
        li.innerHTML += `
            <div class = "wrap">
            <img class="img" src="https://image.tmdb.org/t/p/w500/${notes[key].poster_path}"
            <br>
            <h4> ${notes[key].title}</h4>
            </div>
            <a href = "" class="rubbish"><img class= "rubbish" src='../img/мусорка.png'> </a>
            `;
      }
    };
  })();
  showPage(items[0]);
  for (let item of items) {
    item.addEventListener("click", function () {
      showPage(this);
    });
  }
}
button4.onclick = getResponce5;


let user = {
 // name: "user123", 
  email: "user@mail.ru",
  password: 1234567, 
  //role: "user"
}
let admin = {
 // name: "admin123", 
  email: "admin@mail.ru",
  password: 1234567, 
 // role: "admin"
}
localStorage.setItem('user', JSON.stringify(user));
localStorage.setItem('admin', JSON.stringify(admin));

//admin.say();


let img = document.createElement("a");

img.innerHTML="<img src='../img/мусорка.png'>"
//parent.prepend(img);



/*t.addEventListener('click', ()=>{   /////удаляем
const deleteTask = index =>{ 
   
   this.t.splice(index,1);
    }
})*/



  


    /*function deleteElem() {
        delete t.this
       }

       let parent = document.getElementsByClassName("wrap")
       console.log(parent);
       parent.addEventListener('click', function(e) {
                  var dsf = e.target.parentNode;
                  console.log(dsf);
                  elem.removeChild(dsf);
       });
*/
/*document.onclick = function( e ) {
    var tag = e.target;
    
    if( tag.tagName == "IMG" ) {
      tag.remove();
  } }
*/



   //  liElems = myNode.innerHTML;
  
   /*var els = document.getElementsByName("del");
   console.log(els)
   els.forEach(function(item) {
       item.addEventListener("click", function(){
           item.parentNode.parentNode.removeChild(item.parentNode);
       });
   });*/
  /* window.onload = function() {
   var x = document.querySelectorAll(".wrap");
   console.log(x)
for(var i = 0; i < x.length; i++) {
    console.log(x[i].querySelector(".rubbish"))
  x[i].querySelector(".rubbish").onclick = registerClickHandler;
}
function registerClickHandler () {
   this.parentNode.parentNode.removeChild(this.parentNode);

}
   }*/

   /*window.onload = function() {
let myblock = document.querySelectorAll('.wrap');
console.log(myblock)
myblock.forEach(block => block.addEventListener('click', removeBlock));

function removeBlock() {
  let block = this;
  block.style.opacity = 1;
  let blockId = setInterval(function() {
    if (block.style.opacity > 0) block.style.opacity -= .1;
    else {
  	clearInterval(blockId);
  	block.remove();
    }
  }, 60)
}
   }*/

  

/*
  window.onload = function() {
    var erase = document.getElementsByClassName('rubbish'); 
        console.log(erase)
        erase.forEach(item => {
            item.onclick = (e) => {
                const itemText = item.parentElement.textContent.substr(1);
                results = results.filter(entry => entry.name !== itemText);
                create();
            }
          });
    }();
*/
/*
    const erase = document.querySelectorAll('ul .li');
    nodes = Array.from(erase)
    console.log(erase);
    var child_nodes = erase.childNodes;

nodes.forEach(item => {
    item.onclick = (e) => {
      const itemText = item.parentElement.textContent.substr(1);
      const itemPos = array.findIndex(item => item.name == itemText);
    
        console.log(itemText + ' ' + itemPos);
        console.log(array);
        array.splice(itemPos, 1);
        
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
       //create();
    }
});*/

/*
const addEventListeners = () => {
    const erase = document.querySelectorAll('.but');
    erase.forEach(item => {
      item.onclick = (e) => {
          const itemText = item.parentElement.textContent.substr(1);
          array = array.filter(entry => entry.name !== itemText);
          create();
      }
    });
  }*/
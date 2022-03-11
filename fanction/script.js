let ID = 0;

function Forward() {
  ID++;
  getDataText(ID);
  getDataImg(ID);
  getDataFilm(ID);
}

function Back() {
  ID--;
  getDataText(ID);
  getDataImg(ID);
  getDataFilm(ID);
}

const url = 'https://type.fit/api/quotes';

async function getDataText(id) {
    const res = await fetch(url);
    const data = await res.json();

    let text = data[id].text + "<p>" + data[id].author + "</p>";

    console.log(text);
    document.getElementById("text").innerHTML = text;
}

const url1 = 'https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

async function getDataImg(id) {
    const res = await fetch(url1);
    const data = await res.json();
    let text = data.results[id].urls.regular;

    console.log(text);
    document.getElementById("img").src = text;
}

const url2 = "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=spring&page=1";

async function getDataFilm(id) {
  const res = await fetch(url2);
  const data = await res.json();
  let text = data.results[id].poster_path;

  console.log(text);
  document.getElementById("film").src = "https://image.tmdb.org/t/p/w1280" + text;
}

getDataText(ID);
getDataImg(ID);
getDataFilm(ID);

//----------------------------------------

myMax = Math.max;

myPow = Math.pow;

function switchItUp(number){
    switch(number) {
      case 0:
        return 'Zero';
      case 1:
        return 'One';
      case 2:
        return 'Two';
      case 3:
        return 'Three';
      case 4:
        return  'Four';
      case 5:
        return 'Five';
      case 6:
        return 'Six';
      case 7:
        return 'Seven';
      case 8:
        return 'Eight';
      case 9:
        return 'Nine';
    }
}

let myReverse = number => String(number).split("").reverse().join("");

let myPow1 = (a,b) => Math.pow(a,b);

function sequence (a,b) {
  a = a - b;
  return function () {
    return a = a + b;
  } 
}

let generator = sequence(10,3);

function odd(a) {
  if (a%2==0) return true 
  else return false
}

function multiOdd(a,b){
  if((odd(a)==true)&&(odd(b)==true)) return a*b;
  if((odd(a)==false)&&(odd(b)==false)) return a+b;
  if((odd(a)==true)&&(odd(b)==false)) return b;
  if((odd(a)==false)&&(odd(b)==true)) return a;
}

// console.log(multiOdd(3,1));

// console.log(generator()); // 10
// console.log(generator()); // 13
// console.log(generator()); // 16

// console.log(myMax(2,4));
// console.log(myPow(2,2));
// console.log(myPow1(3,3));
// console.log(switchItUp(2));
// console.log(myReverse(123));
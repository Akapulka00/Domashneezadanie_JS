"use strict"

let booksByGenre = [
  {
      genreName: "Crafts",
      books: [
          {
              id: 8,
              title: "Lorem ipsum",
              description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                  "optio quae quod quos repudiandae rerum, tempore",
              img: "https://picsum.photos/1000/1000?random=20"
          },
          {
              id: 10,
              title: "Aliquam consequatur",
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                  "ea fugit inventore laudantium natus",
              img: "https://picsum.photos/1000/1000?random=21"
          },
          {
              id: 34,
              title: "Laudantium",
              description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                  "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                  "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
              img: "https://picsum.photos/1000/1000?random=22"
          }
      ]
  },
  {
      genreName: "Thriller",
      books: [
          {
              id: 4,
              title: "Necessitatibus",
              description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                  " nulla optio quae quod quos repudiandae rerum, tempore",
              img: "https://picsum.photos/1000/1000?random=23"
          },
          {
              id: 13,
              title: "Nulla optio quae quod",
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                  "fugit inventore laudantium natus",
              img: "https://picsum.photos/1000/1000?random=24"
          },
          {
              id: 59,
              title: "Non nulla",
              description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                  "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                  " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
              img: "https://picsum.photos/1000/1000?random=25"
          }
      ]
  }
];


function addBooks(booksArr){
  let Bookcart=document.querySelector(".Bookcart");
  for (let elem of booksArr){
    let cart=document.createElement("div");
    cart.classList.add("cart");
    let genreName= document.createElement("h2");
    cart.classList.add("cart-title");
    genreName.innerText=`Жанр: ${elem.genreName}`;
    let books=document.createElement("div");
    books.setAttribute("class","books");
    books.classList.add("books","flex-row");
    cart.append(genreName,books);
    for(let bookel of elem.books){
      let article=document.createElement("article");
      article.classList.add("book-article","col-4");
      article.innerHTML=`<span>${bookel.title}</span>
      <img src="${bookel.img}">
      <p>${bookel.description}</p>
      <a  href="">Читать</a>`;
      books.append(article);
    }
    Bookcart.append(cart);
  }


}

addBooks(booksByGenre);

import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // instantiate elements
  const divCard = document.createElement('div');
  const divHeadline = document.createElement('div');
  const divAuthor = document.createElement('div');
  const divImgContainer = document.createElement('div');
  const imgAuthorPhoto = document.createElement('img');
  const spanAuthorName = document.createElement('span');

  // create hierarchy
  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);
  divAuthor.appendChild(divImgContainer);
  divImgContainer.appendChild(imgAuthorPhoto);
  divAuthor.appendChild(spanAuthorName);

  // add class names, attributes, and text
  divCard.classList.add('card');
  divHeadline.classList.add('headline');
  divAuthor.classList.add('author');
  divImgContainer.classList.add('img-container');
  divHeadline.textContent = article.headline;
  imgAuthorPhoto.src = article.authorPhoto;
  spanAuthorName.textContent = `By ${article.authorName}`;

  // add event for card
  document.addEventListener('click', function(event){
    if(event.target === divCard){
      console.log(article.headline);
    }
  })

  // return
  return divCard;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5000/api/articles')
    .then(res => {
      console.log(res.data);
      const cardsContainer = document.querySelector(selector);
      cardsContainer.appendChild(Card(res.data.articles.javascript))
    })
    .catch(err => {
      console.error(err);
    })
}

export { Card, cardAppender }

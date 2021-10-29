import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // create elements
  const divTopics = document.createElement('div');
  const divTab = document.createElement('div');

  // create hierarchy
  divTopics.appendChild(divTab);

  // add class names, attributes and text
  divTopics.classList.add('topics');
  divTab.classList.add('tab');
  divTab.textContent = topics;

  // iterate over array creating topic element for each element in array
  topics.forEach(elem => {
    // create topic every time it loops
    const topic = document.createElement('topic');
    // programmatically update content by setting each topic's textContent to each element
    topic.textContent = elem;
    // append topic's to divTopics
    divTopics.appendChild(topic);
  })

  // return
  return divTopics;
}



const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5000/api/topics')
    .then(res => {
      const tabsContainer = document.querySelector(selector);
      tabsContainer.appendChild(Tabs(res.data.topics));
    })
    .catch(err =>{
      console.error(err);
    })
}

export { Tabs, tabsAppender }

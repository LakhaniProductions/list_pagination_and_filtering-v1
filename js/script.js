/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
//"use strict";   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


const header = document.getElementsByClassName('page-header')[0];
const divSearch = document.createElement('div');
divSearch.setAttribute('class', 'student-search');

const inputSearch= document.createElement('input');
inputSearch.placeholder = "Search for students";

const button = document.createElement('button');
button.textContent = 'Search';

header.appendChild(divSearch);

divSearch.appendChild(inputSearch);
divSearch.appendChild(button);

const resultsArray =[];


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const studentItem = document.getElementsByClassName('student-item');
const itemsOnPage = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.


   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

/**
   
 */


 function searchFunc(searchInput, list, arr) {
   
   for (let i=0; i < list.length; i++){
      const li = list[i];
      const liH3= li.children[0].getElementsByTagName('h3');
      
   
      /* CONFIRMED WORKING 
      if (searchInput.value.length !== 0 && searchInput.value.length !== '' && liH3[0].textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
         li.style.display = 'block'; 
         arr.push(li); 
         console.log(arr, arr.length);
      } else if (searchInput.value.length !== 0){
         li.style.display = 'none';
      } else if (searchInput.value.length === 0 || searchInput.value === '') {
         arr = [];
         arr.length = 0;
         console.log(arr, arr.length);
         showPage(studentItem, 1, resultsArray);
      } 
      */
     
     if (searchInput.value.length !== 0 && searchInput.value.length !== '' && liH3[0].textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
         li.style.display = 'block'; 
         arr.push(li); 
         
         console.log(arr, arr.length);

         // if (liH3[0].textContent.toLowerCase().includes(searchInput.value.toLowerCase()) && searchInput.value.length > liH3[0].textContent..length){
         //    console.log('j');
         // }


      } else if (searchInput.value.length !== 0){
         li.style.display = 'none';
      } else if (searchInput.value.length === 0 || searchInput.value === '') {
         arr = [];
         arr.length = 0;
         //console.log(arr, arr.length);
         showPage(studentItem, 1, resultsArray);
      } 
      
      


      // if (liH3[0].textContent.toLowerCase().includes(searchInput.value.toLowerCase()) && liH3[0].textContent.length > searchInput.value.length ) {
      //    //arr.filter(li =>  liH3[0].textContent.toLowerCase().includes(searchInput.value.toLowerCase()) !== 1)
      //    //li.style.display = 'none';
      //    console.log('hello');
      // }

      
      
   }  
 }

 showPage(studentItem, 1);

function showPage(list, page) {
   
   const startIndex = (page * itemsOnPage) - itemsOnPage;
   const endIndex = page * itemsOnPage;

   for (let i = 0; i < list.length; i++){
      const li = list[i];
      if ([i] >= startIndex && [i] < endIndex) {
         li.style.display = 'block';
     } else {
        li.style.display = 'none';
     }
    
   }
}



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks(list, arr) {
   
  
   const div = document.createElement('div');
   div.setAttribute('class', 'pagination');

   const ul = document.createElement('ul');
   
   const pageLinks = Math.ceil(list.length / itemsOnPage); 
   
   const pageDiv= document.getElementsByTagName('div')[0];
   
  
   for (let i = 0; i < pageLinks; i++){
      const li = document.createElement('li');
      const pageNumber = document.createElement('a');
      pageNumber.setAttribute('href', '#');
      const pages = pageNumber.textContent = parseInt([i]) + 1;
      div.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(pageNumber);
      pageDiv.appendChild(div);
   }

   const pageSelectorAll = document.getElementsByTagName('a');
   const pageOne = document.getElementsByTagName('a')[0];
   pageOne.setAttribute('class', 'active');

   for (let i = 0; i < pageSelectorAll.length; i++){
      pageSelectorAll[i].addEventListener('click', (event)=> {
         
         const pageUl= event.target.parentNode.parentNode;
         const pageLi = pageUl.children;
         const pageA = pageLi[i].childNodes;
         
         for (let i = 0; i < pageLi.length; i++) {
            if (event.target !== pageSelectorAll[i]){
               event.target.setAttribute('class', 'active');
               pageSelectorAll[i].setAttribute('class', '');
            }
         }
         showPage(studentItem, pageSelectorAll[i].textContent);
      })
   }  
}

button.addEventListener('click', (event) => {
   event.preventDefault();

   searchFunc(inputSearch,studentItem,resultsArray);
});

inputSearch.addEventListener('keyup', () =>{
   searchFunc(inputSearch,studentItem,resultsArray);
});





appendPageLinks(studentItem,resultsArray);




// Remember to delete the comments that came with this file, and replace them with your own code comments.
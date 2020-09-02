/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
//"use strict";   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/**
 * Created global variables that can be used within functions. 
 */

 /**
  * StudentItem variable gets the all the student li's 
  * itemsOnPage is used to set how many li's appear on the page at a time. 
  */
const studentItem = document.getElementsByClassName('student-item');
const itemsOnPage = 10;

/**
 * header var gets the page header which is used to append the div that contains search bar and button
 * divSearch creates a div to contain button and bar (inputSearch & button vars)
 */

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

/**
 * searchFunc creates a resultsArray which is initially empty 
 * Gets paginationDiv which contains the pagination links. If there is already a pagnationDiv it removes it
 * for loop then crea
 */

 function searchFunc(searchInput,list) {
   
   const resultsArray = [];
   const paginationDiv = document.querySelector('.pagination');
   
   if (paginationDiv) {
      paginationDiv.parentNode.removeChild(paginationDiv);
   } 

   for (let i=0; i < list.length; i++){
      const li = list[i];console.log(li);
      li.style.display='none';
      const liH3= li.children[0].getElementsByTagName('h3');
      
      if (liH3[0].textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
         resultsArray.push(li);
      } else if (searchInput.value.length === 0 && searchInput.value === '') {
         showPage(studentItem, 1);   
      } 
   }  

   
   showPage(resultsArray,1);
   appendPageLinks(resultsArray); 

 }

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

function appendPageLinks(list) {
   const pageDiv= document.getElementsByTagName('div')[0];
   const pError = document.createElement('p');
   pageDiv.appendChild(pError);
   
   if (list.length !== 0 ) {
      const div = document.createElement('div');
      div.setAttribute('class', 'pagination');
      const ul = document.createElement('ul');
      const pageLinks = Math.ceil(list.length / itemsOnPage); 
      
      
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
            showPage(list, pageSelectorAll[i].textContent);
         })
      }  
   } else if (list.length === 0 ){
      
      pError.textContent= 'No results match your query. Please try again.';
      pError.style.display='block';
      
   } 
   
}

button.addEventListener('click', (event) => {
   event.preventDefault();

   searchFunc(inputSearch,studentItem);
});

inputSearch.addEventListener('keyup', () =>{
   searchFunc(inputSearch,studentItem);
});

showPage(studentItem, 1); 
appendPageLinks(studentItem);


/**
 * Removed from line 41
 * searchInput.value.length !== 0 & searchInput.value !== '' && 
 * 
 */
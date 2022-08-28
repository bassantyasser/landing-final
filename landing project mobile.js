

/**
 * Define Global Variables
 * 
*/
const frag = document.createDocumentFragment(); 
const sections= document.querySelectorAll('section');
const list= document.querySelector('ul');





/*build the navbar dynamically*/

for(let i=1; i<=sections.length;i++){
   const addedelement=document.createElement('li');
   addedelement.innerHTML=`<a id="section${i}" >Section ${i}</a>`;
  
   frag.appendChild(addedelement);

}

list.appendChild(frag);
/*add event when the user click on any section on the navbar, then scroll smoothly to the section*/
for(let i=0; i<sections.length;i++){
   list.children[i].addEventListener('click',function(event){
      event.preventDefault();
      sections[i].scrollIntoView({behavior:"smooth"});
     

      
   })
}

//adding observer 
let observer = new IntersectionObserver((entries)=> { 
   entries.forEach(entry=> {
      console.log('hello');
      console.log(entry.target);
     if(entry.isIntersecting){
      
       const elementname= entry.target.getAttribute("data-nav");
       console.log(elementname);
       console.log(elementname);
       for(let i=0; i<list.children.length;i++){
         if(list.children[i].innerText===elementname){
            sections[i].classList.add('your-active-class');
            list.children[i].style.backgroundColor='rgb(143, 19, 87)'
            sections[i].style.backgroundColor='rgb(143, 19, 87)';


         }
         else {
            list.children[i].style.backgroundColor='';
            sections[i].style.backgroundColor='';
            
         }
       }
     }
    
   });
 },{threshold:0.5})
 
 //calling the observer function 
for(let i=0; i<sections.length;i++){
   observer.observe(sections[i]);

}


//adjusting the navbar
const header= document.querySelector('.page__header');
header.style.background='#7b8eb9';




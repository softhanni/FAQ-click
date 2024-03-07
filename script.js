

let all = document.querySelectorAll(".more")

all.forEach(function(a){
          a.addEventListener("click", function n (){
              let d = a.parentElement.nextElementSibling;
          

              
          d.classList.toggle("showpara")


          });
          })

// function m (){
//      // let p = document.querySelectorAll(".more");
//      p.forEach(function(a){

//       let s = a.parentElement.nextElementSibling;
      
//           s.classList.toggle("showpara")
//   })


     // for(let el of p){
          // let s = p.parentElement.nextElementSibling;

          // s.classList.toggle("showpara")

          // if(s.classList.contains("none")){
          //      s.classList.toggle("showpara")
          // } 
     
     // }  
     
// }

// console.log(all)
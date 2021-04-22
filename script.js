
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')



//_______________________________ input & btn1_______________________
$('#input1').click((e) => {
      let secim = $('input').is(':checked')
    

      if(secim){
            $('#btn1').removeAttr('disabled')
            $('#btn1').click(function (e) { 
                  alert('Buton tıklandı')
                  e.preventDefault();
                  
            });
      } 
      else {
            $('#btn1').attr('disabled', true);
      }
         
})

//btn delete
btn2.addEventListener('click', (e) => {
      e.target.remove()
})


//___ Her tıklayışta üstünü çiz veya none yap _________________
const clickLineThrough = () =>{
      $('ul').click(function (e) { 

            $(e.target).toggleClass('ciz');
      
      
            e.preventDefault();
            
      });
      
}



//delete  menu1 & menu2 
$('#deleteBtn').click(() => {
      
      $('#menu1,#menu2,h3:nth-of-type(1),h3:nth-of-type(2)').remove()
     
})


//________________________________________ li ekle  & Tıklanınca sil_________________
$('#btn3').click(function (e) { 

      let addToNew=prompt('Enter new course : ')
      

     let ekle=` <li>${addToNew}</li>` 
                  
      $('#menu3').append(ekle)
          
      delete_li()
});


//____________________________________________ Double click'te sil____________
const delete_li = () =>{
      $('li').dblclick(function (e) { 
      
            console.log('qwe')
            $(this).remove()
            
      });
}



delete_li()
clickLineThrough()










// const lineThrough = () =>{
//       $('li').click(function (e) { 
           
//             if ($(this).css('text-decoration').indexOf("none") > -1) {
//                   $(this).css('text-decoration', 'line-through');
//               } else $(this).css('text-decoration', 'none');
         
       
//       });

      
      
// }
//lineThrough()
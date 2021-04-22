
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')





//_______________________________ input & btn1_______________________
$('#input1').click((e) => {
      let secim = $('input').is(':checked')
    

      if(secim){
            $('#btn1').removeAttr('disabled')
            $('#btn1').click(function (e) { 
                  console.log('Button tıklandı')
                  e.preventDefault();
                  
            });
      } 
      else {
            $('#btn1').attr('disabled', true);
      }
         
})





//________________________________________ li ekle  & Tıklanınca sil_________________
$('#btn3').click(function (e) { 

      let addToNew=prompt('Enter new course : ')
      

     
                  
      $('#menu1').append(`
            <li>${addToNew}</li>
      ` )
          
           
      delete_li()
      lineThrough()
     
});

const lineThrough = () =>{
      $('li').click(function (e) { 
           
            if ($(this).css('text-decoration').indexOf("none") > -1) {
                  $(this).css('text-decoration', 'line-through');
              } else $(this).css('text-decoration', 'none');
         
       
      });

      
      
}


const delete_li = () =>{
      $('li').dblclick(function (e) { 
      
            console.log('qwe')
            $(this).remove()
            
      });
}

delete_li()
lineThrough()
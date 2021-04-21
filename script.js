


$('input').click((e) => {
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




$('li').click(function (e) { 

      if ($(this).css('text-decoration').indexOf("none") > -1) {
            $(this).css('text-decoration', 'line-through');
        } else $(this).css('text-decoration', 'none');
   
 
});
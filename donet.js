document.getElementById('blog-btn')
.addEventListener('click' , function(){
    //console.log("blog-btn click here");
    window.location.href ='blog.html'
});

// document.getElementById('home-btn')
// .addEventListener('click' ,function (){
//     window.location.href ='index.html'
// })

 document.getElementById('history-btn')
    .addEventListener('click', function(){
        //console.log('btn click')
        document.getElementById('history-section').classList.remove('hidden');
        document.getElementById('donation-section').classList.add('hidden');
        
    })

    document.getElementById('donation-btn')
    .addEventListener('click', function(){
        //console.log('btn click')
        document.getElementById('donation-section').classList.remove('hidden');
        document.getElementById('history-section').classList.add('hidden');
    })

     function btnHandel(event){
     event.classList.add('bg-red-200');
     }




function getElementByIdvalue(id){
    const valueOfId = document.getElementById(id).innerText;
    const valueAmaunt = parseFloat(valueOfId);
    return valueAmaunt ;
   };

   function getElementByInputvalue(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
   };
  
   document.getElementById('add-amaunt-btn')
    .addEventListener('click' ,function (){
        const donetAmaunt = getElementByInputvalue('donet-amaunt');
        const totalAmaunt = getElementByIdvalue('total-amaunt');
        const MainAmaunt = getElementByIdvalue('main-balence');

        if(!isNaN(donetAmaunt) || donetAmaunt > 0 ){
            const totalBalence = parseFloat(donetAmaunt) + totalAmaunt ;
                document.getElementById('total-amaunt').innerText = totalBalence;
  
                const currentTime = getCurrentTime();

                const div =document.createElement('div')
                div.classList.add('bg-yellow-300')
                div.innerHTML=`
                <p class="text-xl font-semibold pl-5 py-5"> noakhali section donetion ${donetAmaunt} and total amaunt ${totalBalence}</p> 
                <p class="text-xl font-semibold pl-5 py-5"> Donation Time ${currentTime} </P>
                `
                   document.getElementById('history-conteinar').appendChild(div) 

            const totalMainAmaunt = MainAmaunt - donetAmaunt ;
                document.getElementById('main-balence').innerText = totalMainAmaunt;

              //  document.getElementById('my_modal_1').classList.add('modal-open');
               my_modal_1.showModal()
        }
     else{
        alert('Rong amaunt plzz chake' )
     }   
    })

    document.getElementById('fani-add-amaunt-btn')
    .addEventListener('click' ,function (){
        const faniDonetAmaunt = getElementByInputvalue('fani-donet-amaunt');
        const faniTotalAmaunt = getElementByIdvalue('fani-total-amaunt');
        const MainAmaunt = getElementByIdvalue('main-balence');

        if(!isNaN(faniDonetAmaunt) || faniDonetAmaunt > 0 ){
            const faniTotalBalence = parseFloat(faniDonetAmaunt) + faniTotalAmaunt ;

            const div =document.createElement('div')
            div.classList.add('bg-green-300')
            div.innerHTML=`
            <p class="text-xl font-semibold pl-5 py-5"> fani section donetion ${faniDonetAmaunt} and total amaunt ${faniTotalAmaunt}</p> 
            `
               document.getElementById('history-conteinar').appendChild(div) 


                document.getElementById('fani-total-amaunt').innerText = faniTotalBalence;
            const totalMainAmaunt = MainAmaunt - faniDonetAmaunt ;
                document.getElementById('main-balence').innerText = totalMainAmaunt;

              //  document.getElementById('my_modal_1').classList.add('modal-open');
               my_modal_1.showModal()
        }
     else{
        alert('Rong amaunt plzz chake' )
     }   
    })

    document.getElementById('quota-add-amaunt-btn')
    .addEventListener('click' ,function (){
        const quotaDonetAmaunt = getElementByInputvalue('quota-donet-amaunt');
        const quotaTotalAmaunt = getElementByIdvalue('quota-total-amaunt');
        const MainAmaunt = getElementByIdvalue('main-balence');

        if(!isNaN(quotaDonetAmaunt) || quotaDonetAmaunt > 0 ){
            const quotaTotalBalence = parseFloat(quotaDonetAmaunt) + quotaTotalAmaunt ;
                document.getElementById('quota-total-amaunt').innerText = quotaTotalBalence;

                const div =document.createElement('div')
                div.classList.add('bg-gray-300')
                div.innerHTML=`
                <p class="text-xl font-semibold pl-5 py-5"> fani section donetion ${quotaDonetAmaunt} and total amaunt ${quotaTotalBalence}</p> 
                `
                   document.getElementById('history-conteinar').appendChild(div) 

            const totalMainAmaunt = MainAmaunt - quotaDonetAmaunt;
                document.getElementById('main-balence').innerText = totalMainAmaunt;

              //  document.getElementById('my_modal_1').classList.add('modal-open');
               my_modal_1.showModal()
        }
     else{
        alert('Rong amaunt plzz chake' )
     }   
    })

    
 

    function getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const year = now.getFullYear();
        
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }
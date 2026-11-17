try{
    let myForm = document.querySelector('#myForm');
    let myName = document.querySelector('#name');
    let myEmail = document.querySelector('#email');
    let message = document.querySelector('#message');
    let confirmMessage = document.querySelector('.confirmMessage');
    if(myForm){
    myForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        const formBody = {
            name:myName.value,
            email:myEmail.value,
            message:message.value
        };
        

        //confirmMessage.textContent=`Hi ${myName.value}, your
       // message has been received, we will contact you at
        //${myEmail.value}`;
    
        const requestHeaders = {
            "Content-Type" : "application/json"
        };
        fetch('/contact', {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify(formBody)
        })
        .then(response => response.json())
        .then((responsedata) => {
            console.log(responsedata);
            
            confirmMessage.textContent=`Hi ${myName.value}, your
            message has been received, we will contact you at
            ${responsedata.email}`;
        });
    


    });
    }
   
}
    catch(err){
    console.log(err.name);
}
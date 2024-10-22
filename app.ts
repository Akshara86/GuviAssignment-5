interface ContactFormData {
    name: string;
    email: string;
    message: string;
    phone?: string;  
    subject?: string; 
}

function handleFormSubmit(event:Event): void{
    event.preventDefault();

    const name=(document.getElementById("name")as HTMLInputElement).value;
    const mail=(document.getElementById("mail") as HTMLInputElement).value;
    const phone=(document.getElementById("phn") as HTMLInputElement).value;
    const subject=(document.getElementById("subject") as HTMLInputElement).value;
    const message=(document.getElementById("message") as HTMLInputElement).value;

    if(!name || !mail || !message){
        alert("Please fill out the required feilds")
        return;
    }

    const emailpattern:RegExp= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailpattern.test(mail)){
        alert("Please enter a valid email address");
        return;
    }

    if (phone && (phone.length !== 10 )) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    const formData: ContactFormData = {
        name: name,            
        email: mail,          
        message: message,       
        phone: phone || "",     
        subject: subject || ""  
    };

    fetch("https://671691013fcb11b265d2f2f9.mockapi.io/Contacts",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then((response)=>{
        if(response.ok){
            alert("Form Submitted Sucessfully");
        }else{
            throw new Error("Submission Failed");
        }
    })
    .catch((error)=>{
        alert(error);
    });
        
}




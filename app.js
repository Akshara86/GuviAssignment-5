function handleFormSubmit(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("phn").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    if (!name || !mail || !message) {
        alert("Please fill out the required feilds");
        return;
    }
    var emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailpattern.test(mail)) {
        alert("Please enter a valid email address");
        return;
    }
    if (phone && (phone.length !== 10)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    var formData = {
        name: name,
        email: mail,
        message: message,
        phone: phone || "",
        subject: subject || ""
    };
    fetch("https://671691013fcb11b265d2f2f9.mockapi.io/Contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(function (response) {
        if (response.ok) {
            alert("Form Submitted Sucessfully");
        }
        else {
            throw new Error("Submission Failed");
        }
    })
        .catch(function (error) {
        alert(error);
    });
}

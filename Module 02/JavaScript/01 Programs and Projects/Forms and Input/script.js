const forms = document.getElementById("userForm");

forms.addEventListener("submit", myforms)


function myforms(){
    // Auto refresh nahi hoga
    // event.preventDefault(); 

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;

    let content = `Name: ${name}\nAge: ${age}\n Email: ${email}`;

    let blob = new Blob([content], {type: "text/plain"});

    let download_data = document.createElement("a");
    download_data.href = URL.createObjectURL(blob);
    download_data.download = `${name}.txt`;
    download_data.click();
};



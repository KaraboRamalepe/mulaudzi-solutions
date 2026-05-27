emailjs.init({
    publicKey: "7aB5O7AICpaNoERNF",
});

document.getElementById("enquiryForm").addEventListener("submit", function(event) {
    event.preventDefault();

 let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value
};
    emailjs.send("service_umaqyx4", "template_134n4mm", params)
        .then(function(response) {
            showToast();
            document.getElementById("enquiryForm").reset();
            console.log("SUCCESS!", response.status, response.text);
        })
        .catch(function(error) {
            alert("Failed to send message.");
            console.log("FAILED...", error);
        });
});

function showToast() {
    let toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}
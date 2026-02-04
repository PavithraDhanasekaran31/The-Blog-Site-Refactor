// Contact form submit
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("successAlert").style.display = "block";
    // Reset form
    this.reset();
});

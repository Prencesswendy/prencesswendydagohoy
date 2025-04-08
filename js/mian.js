// Update copyright year
document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("currentYear")
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear()
    }
  })
  
  // Handle contact form submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      // Get form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      }
  
      // Log form data (in a real application, you would send this to a server)
      console.log("Form submitted:", formData)
  
      // Show success message
      alert("Thank you for your message! I will get back to you soon.")
  
      // Reset form
      contactForm.reset()
    })
  }
  
  // Mobile menu toggle functionality could be added here
  // This would be implemented in a real-world scenario for better mobile experience
  
  // Skill bar animation
  // This will animate the skill bars when they come into view
  document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill-bar-fill")
  
    if (skillBars.length > 0) {
      // Simple animation on page load
      setTimeout(() => {
        skillBars.forEach((bar) => {
          const width = bar.style.width
          bar.style.width = "0"
  
          setTimeout(() => {
            bar.style.width = width
          }, 100)
        })
      }, 300)
    }
  })
  
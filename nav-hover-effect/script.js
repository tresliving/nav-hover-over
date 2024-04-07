document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('nav a').forEach(item => {
      item.addEventListener('mouseover', function(e) {
          // Prevent default anchor behavior
          e.preventDefault();
          
          // Get the URL from the href attribute of the hovered link
          const url = this.getAttribute('href');
          
          // Use fetch to get the content of the URL
          fetch(url)
              .then(response => response.text())
              .then(html => {
                  // Create a new HTML document from the fetched HTML
                  const doc = new DOMParser().parseFromString(html, "text/html");
                  
                  // Optional: Extract specific content from the new document
                  // For example, we can extract a div with a specific ID or class
                  // Here, we'll assume you want to extract a div with an ID of 'content'
                  const newContent = doc.querySelector('div').innerHTML;
                  
                  // Replace the content of the div with ID 'content' on the current page
                  document.getElementById('content').innerHTML = newContent;
              })
              .catch(err => {
                  console.error('Failed to load the content: ', err);
              });
      });
  });
});

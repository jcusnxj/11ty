document.addEventListener('DOMContentLoaded', function () {
    // Function to check the state of checkboxes
    function checkActiveLinks() {
      // Get all checkbox inputs
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
      checkboxes.forEach(checkbox => {
        // Get corresponding label to find menu items
        const label = document.querySelector(`label[for="${checkbox.id}"]`);
        if (label) {
          // Get the list of links within the collapsible menu
          const links = label.nextElementSibling.querySelectorAll('a');
          links.forEach(link => {
            if (link.getAttribute('aria-current') === 'page') {
              checkbox.checked = true;
            }
          });
        }
      });
    }
  
    // Call the function
    checkActiveLinks();
  });
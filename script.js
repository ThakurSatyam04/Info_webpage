document.addEventListener("DOMContentLoaded", function() {
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    const contentDiv = document.getElementById("content");
    const toggleButton = document.getElementById("toggleButton");
    const sidebarDiv = document.getElementById("sidebar");
    let isSidebarVisible = true; // State variable to track sidebar visibility
    const closeButton = document.getElementById("closeButton");

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        sidebarDiv.style.display = isSidebarVisible ? "block" : "none";
        contentDiv.style.marginLeft = isSidebarVisible ? "200px" : "0";
        isSidebarVisible = !isSidebarVisible;

        };

    // Function to load content from external file
    const loadContent = (url) => {
    // console.log(url)
      fetch(url)
        .then(response => response.text())
        .then(content => {
          contentDiv.innerHTML = content;
        })
        // console.log(content)
        .catch(error => {
          console.error("Error loading content:", error);
        });
    };
  
    // Add click event listeners to sidebar links
    sidebarLinks.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const url = link.getAttribute("href");
        // console.log(url)
        loadContent(url);
        // toggleSidebar(); //Do this if you want to hide sidebar after clicking on a link
      });
    });
    toggleSidebar();
    // Add click event listener to toggle button
    toggleButton.addEventListener("click", toggleSidebar);

    // Add click event listener to close button
    closeButton.addEventListener("click", toggleSidebar);

    // To open the sidebar default
});

// Add your code here
function submitData(name, email) {
    // Create the data object with the provided arguments
    const formData = {
      name: name,
      email: email,
    };
  
    // Create the configuration object for the fetch request
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData), // Convert data to a JSON string
    };
  
    // Send the POST request
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json(); // Parse the response JSON
      })
      .then(function (object) {
        // Add the ID from the response to the DOM
        const body = document.querySelector("body");
        const idElement = document.createElement("p");
        idElement.textContent = `New User ID: ${object.id}`;
        body.appendChild(idElement);
      })
      .catch(function (error) {
        // Handle errors and append the error message to the DOM
        const body = document.querySelector("body");
        const errorElement = document.createElement("p");
        errorElement.textContent = `Error: ${error.message}`;
        body.appendChild(errorElement);
      });
  }
  

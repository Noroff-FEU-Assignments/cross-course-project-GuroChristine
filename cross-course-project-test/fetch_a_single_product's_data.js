fetch('http://flower-power.local/product/rainydays_jacket1/')
    .then((response) => response.json())
    .then((data) => console.log(data)) 
    .catch (error => console.error(error));
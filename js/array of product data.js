fetch('http://flower-power.local/shop/')
    .then((response) => response.json())
    .then((data) => console.log(data)) 
    .catch (error => console.error(error));
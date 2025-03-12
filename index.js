
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                document.getElementById('ipadress').textContent = data.ip;
              })
            
            .catch(error => {
                console.error('Error fetching IP address:', error);
            });

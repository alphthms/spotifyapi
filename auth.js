const APIController = (function() {
    
    const clientId = '98dc0d7d3a6e4f50a477e391007467ef';
    const clientSecret = 'f129a76769384aea9b7c3b7225e1cc5e';

  const _getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

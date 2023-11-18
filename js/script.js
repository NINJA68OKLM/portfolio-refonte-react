fetch("https://notes.iutmulhouse.uha.fr/?q=0c65a6ead403b633b44e7de75b898a70d4ae8b0258e41acf273bc1702c95a7b1")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
});
'use strict';
const axios = require('axios');
exports.getConfig = (request, response) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=30ad4e414ec3d974d6bcb630b232709a&query=${request.query.search}`)
    .then(resultat => {
       let res;
       res = resultat.data.results;
       response.render("resultat", {res});
    })
    .catch((error) => {
        response.render("resultat", {error});
    });
};
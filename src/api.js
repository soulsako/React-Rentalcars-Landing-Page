import axios from 'axios';

const URL = (results, searchTerm) => `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${results}&solrTerm=${searchTerm}`;

class Api {

  http(config){
      const url = URL(config.results, config.searchTerm);
        return axios.get(url)
      .then(res => {
        if(res.data.results.numFound === 0) 
        return null;
        else return res.data.results.docs;
      })
      .catch(error => {
        console.log('Error fetching results', error);
      })
  }
}

export default new Api();

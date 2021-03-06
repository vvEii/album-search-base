import React, { Fragment, useState, useEffect } from 'react';

import SearchBar from 'components/SearchBar';
import Results from 'components/Results';
import axios from 'axios';

export default function LiveSearch(props) {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://itunes.apple.com/search?term=${term}&country=CA&media=music&entity=album&attribute=artistTerm`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((res) => setResults(res.data.results))
      .catch((error) => console.log(error));
  }, [term]);
  return (
    <Fragment>
      <header className='logo'>
        <img src='images/brand.png' alt='Brand' />
      </header>
      <main>
        <SearchBar onSearch={(term) => setTerm(term)} />
        <Results results={results} />
      </main>
    </Fragment>
  );
}

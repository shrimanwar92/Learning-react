import React, {useRef, Fragment, useState} from 'react';
import './App.css';
import useHackerNewsApi from './HackerNewsApi';
import Header from './Header';

function List({list}) {
  if (!list.length) {
    return <div>Nothing to show...</div>;
  }
  return (
      <ul className="hits-list">
          {list.map(item => (
              <li key={item.objectID}>
                  <a href={item.url} target="_blank">{item.title}</a>
              </li>
          ))}
      </ul>
  );
}

function App() {
    const [search, setSearch] = useState('');
    const url = `https://hn.algolia.com/api/v1/search?query=redux`;
    const [data, setUrl] = useHackerNewsApi(url, {hits: []});

    const searchNews = (e) => {
        if(e.which == 13) {
            setUrl(`https://hn.algolia.com/api/v1/search?query=${search}`);
        }
    };

    const clear = (e) => {
      setSearch('');
      setUrl(url);
    };
    
    return (
    <Fragment>
    <Header />
    <div className="container">
        <div className="search-input">
            <input type="text" maxLength={30} onKeyUp={searchNews} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Press enter to search"/>
            <span className="cancel" onClick={clear}>x</span>
        </div>

        {data.isError && <div className="error">Something went wrong...</div>}

        {data.isLoading ? (
            <div className="loading">Loading</div>
        ) : (
            <List list={data.payload.hits} />
        )}
    </div>
    </Fragment>
    );
}

export default App;

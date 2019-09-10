import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('redux');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const searchInput = useRef();

    useEffect(() => {
      const fetchData = async() => {
          setIsLoading(true);
          setIsError(false);
          try {
              const result = await axios(`https://hn.algolia.com/api/v1/search?query=${query}`);
              setData(result.data);
          } catch(e) {
              setIsError(true);
          } finally {
              setIsLoading(false);
          }
      };

      fetchData();
    }, [query]);

    const search = (e) => {
        if(e.which == 13) {
            setQuery(searchInput.current.value);
        }
    };
    
    return (
    <div className="container">
        <div className="search-input">
            <input type="text" ref={searchInput} onKeyUp={search} placeholder="Press enter to search"/>
        </div>

        {isError && <div className="error">Something went wrong...</div>}

        {isLoading ? (
            <div className="loading">Loading</div>
        ) : (
            <ul className="hits-list">
            {data.hits.map(item => (
                <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </ul>
        )}
    </div>
    );
}

export default App;

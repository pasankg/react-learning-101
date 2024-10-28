// To retrieve the parameter from the URL we need to use a hook.
import { useParams } from 'react-router-dom';

// Need to use states and side effects to load data from New API.
import { useState, useEffect } from 'react';

export default function BikeResults() {
  const [results, setResults] = useState({});
  const { bikeTopic } = useParams();

  // Make request to https://newsapi.org/ to get data.
  useEffect(() => {
    console.log('Loading results');
    fetch(`https://newsapi.org/v2/everything?q=${bikeTopic}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
      .then(res => res.json())
      .then(obj => {
        setResults(obj);
      })
  }, [bikeTopic]);

  let output = <></>;

  if (results.status === 'ok') {
    output = results.articles.map((article, index) => (
      <div className='card mb-3' key={index}>
        <div className='card-body'>
          <h5 className='card-title'>{article.title}</h5>
          <h6 className='card-title'>{article.author}</h6>
          <p className='card-text'>
            {article.content}
          </p>
          <a href={`${article.url}`} rel="noreferrer" target='_blank'>View Article</a>
        </div>
      </div>
    ));
  }

  return (
    <>
      <h4>This is the Bike Result Page</h4>
      <p>This is a child route of ./BikesLayout</p>
      <p>It inherits content from ./App file</p>

      <p>The parameter for ':bikeTopic' is <b>{bikeTopic}</b></p>
      <div>
        {output}
      </div>
    </>
  );
}
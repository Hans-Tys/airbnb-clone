import React from 'react'
import ReactDOM from 'react-dom';
const url = "http://tmdb.lewagon.com/movie/top_rated"

const fetchMovies = () => {
  fetch(url)
   .then(response => response.json())
   .then(insertMovies)
}
const list = document.querySelector('#results');
console.log(list);
const insertMovies = (data) => {
  console.log(data.results);
  data.results.forEach((result) => {
    const movie = `<li> <p>${result.Title}</p> </li>`;
    list.insertAdjacentHTML('beforeend', movie);
  });
}


class Menuitem extends React.Component {
  render() {
    fetchMovies();
    return (
      <div className='card'>
        <h1>Results</h1>
        <ul className='results'>

        </ul>
      </div>
    );
  }
}


ReactDOM.render(
  <Menuitem />,
  document.getElementById('root')
);

export default Menuitem

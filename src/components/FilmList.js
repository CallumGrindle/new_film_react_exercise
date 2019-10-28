import React, { Component } from 'react';
import Film from './Film.js'
import '../App.css';

class FilmList extends Component {
  render() {
    const filmNodes = this.props.films.map(film => {
      return (
        <Film key={film.id} url={film.url}>
        {film.name}
        </Film>
      )
    }
  )

  return (
    <div className="film-list">
    {filmNodes}
    </div>
  )
}
}

export default FilmList;

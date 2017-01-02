import request from 'superagent';
import store from '../store';

export function inTheatre() {
  request.get('http://www.moviebuff.com/api/v1/movies?status=IT')
    .set('accept-language', 'en-US,en;q=0.8')
    .set('Content-Type', 'application/json')
    .end(function (err, response) {
      store.dispatch({
          type:'IN_THEATRE',
          data:response.body.movies
      })
    });
}

export function comingSoon() {
  request.get('http://www.moviebuff.com/api/v1/movies?status=CS')
    .set('accept-language', 'en-US,en;q=0.8')
    .set('Content-Type', 'application/json')
    .end(function (err, response) {
      store.dispatch({
          type:'COMING_SOON',
          data:response.body.movies
      })
    });
}
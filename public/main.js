// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getJoke from '../api/promises';
import showJoke from '../pages/showJoke';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <button class="btn btn-danger" id="click-me">GET JOKE!</button><br />`;

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();

document.querySelector('#click-me').addEventListener('click', () => {
  getJoke().then(showJoke);
});

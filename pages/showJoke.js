import renderToDom from '../utils/renderDom';

const showJoke = (array) => {
  const domString = `${array[3]}`;
  renderToDom('#jokeDisplay', domString);
};

export default showJoke;

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Home from '../containers/Home';
import filterReducer from '../reducers/filter';
import pokeReducer from '../reducers/pokemon';
import catReducer from '../reducers/category';

describe('Test the Categories of the Home page', () => {
  beforeEach(() => {
    const rootReducer = combineReducers({
      pokes: pokeReducer,
      filter: filterReducer,
      categoryPokemon: catReducer,
    });
    const store = createStore(rootReducer);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('Displays the All category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('All'), leftClick);
    expect(screen.getByText('All'));
  });

  it('Displays the Normal category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Normal'), leftClick);
    expect(screen.getByText('Normal'));
  });

  it('Displays the Fighting category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Fighting'), leftClick);
    expect(screen.getByText('Fighting'));
  });

  it('Displays the Flying category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Flying'), leftClick);
    expect(screen.getByText('Flying'));
  });

  it('Displays the Poison category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Poison'), leftClick);
    expect(screen.getByText('Poison'));
  });

  it('Displays the Ground category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Ground'), leftClick);
    expect(screen.getByText('Ground'));
  });

  it('Displays the Rock category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Rock'), leftClick);
    expect(screen.getByText('Rock'));
  });

  it('Displays the Bug category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Bug'), leftClick);
    expect(screen.getByText('Bug'));
  });

  it('Displays the Bug category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Bug'), leftClick);
    expect(screen.getByText('Bug'));
  });

  it('Displays the Ghost category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Ghost'), leftClick);
    expect(screen.getByText('Ghost'));
  });

  it('Displays the Steel category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Steel'), leftClick);
    expect(screen.getByText('Steel'));
  });

  it('Displays the Fire category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Fire'), leftClick);
    expect(screen.getByText('Fire'));
  });

  it('Displays the Water category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Water'), leftClick);
    expect(screen.getByText('Water'));
  });

  it('Displays the Grass category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Grass'), leftClick);
    expect(screen.getByText('Grass'));
  });

  it('Displays the Electric category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Electric'), leftClick);
    expect(screen.getByText('Electric'));
  });

  it('Displays the Psychic category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Psychic'), leftClick);
    expect(screen.getByText('Psychic'));
  });

  it('Displays the Ice category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Ice'), leftClick);
    expect(screen.getByText('Ice'));
  });

  it('Displays the Dragon category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Dragon'), leftClick);
    expect(screen.getByText('Dragon'));
  });

  it('Displays the Dark category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Dark'), leftClick);
    expect(screen.getByText('Dark'));
  });

  it('Displays the Fairy category in the home page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText('Fairy'), leftClick);
    expect(screen.getByText('Fairy'));
  });
});

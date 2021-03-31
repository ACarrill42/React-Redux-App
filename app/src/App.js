import React from 'react';
import {connect} from 'react-redux';
import {getAnimeQuote} from './actions/actions';

function App(props) {

const handleNewQuote = e => {
  e.preventDefault();
  props.getAnimeQuote()
}

  return (
    <div className="App">
      <h1>Mystery Quotes!</h1>
      <div>
        {props.quote.anime}
        {props.quote.character}
        {props.quote.quote}
      </div>
      <button onClick ={handleNewQuote}>Click for Surprise!</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    quoteTitle: state.quoteTitle,
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, {getAnimeQuote})(App);

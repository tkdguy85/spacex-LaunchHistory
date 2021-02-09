import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import logo from './sxlogo2.png';

import Launches from './components/launches';
import Launch from './components/launch';
import FilterContextProvider from './contexts/filter';



const client = new ApolloClient({
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <FilterContextProvider>
        <Router>
          <div className="container">
            <img 
              src={logo} 
              alt="SpaceX" 
              style={{ width: 300, display: 'block', margin: 'auto' }}
            />
            <h3 className="container text-warning">Space X launch Library</h3>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:id" component={Launch} />
          </div>
        </Router>
      </FilterContextProvider>
    </ApolloProvider>
  );
}

export default App;

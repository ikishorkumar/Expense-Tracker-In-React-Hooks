import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransicationHistory } from './components/TransicationHistory';
import { AddTransication } from './components/AddTransication';
import {GlobalProvider} from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <Header/>
      <Balance/>
      <AccountSummary/>
      <TransicationHistory/>
      <AddTransication/>


    </div>
    </GlobalProvider>
  );
}

export default App;

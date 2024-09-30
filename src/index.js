import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl';
import { messages } from './components/messages';
import reportWebVitals from './reportWebVitals';

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={messages[language]}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

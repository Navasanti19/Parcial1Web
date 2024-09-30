import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { IntlProvider } from 'react-intl';
import { messages } from './components/messages';

import Login from './components/Login';

function App() {
  const [locale, setLocale] = useState('es'); 

  const changeLanguage = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <div>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('es')}>Español</button>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </IntlProvider>
  );
}

export default App;

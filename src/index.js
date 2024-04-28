import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import GlobalStyles from './styles/globalStyles';
import Second from './pages/second';
import Video from './pages/video';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <GlobalStyles />
        <Home /> 
        <Second />
        <Video />
    </>
);

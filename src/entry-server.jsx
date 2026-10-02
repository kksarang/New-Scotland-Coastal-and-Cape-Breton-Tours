import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from './App';
export {routes,notFound,redirects} from './seo/routes';
export {renderHead} from './seo/head';
export {business} from './data/business';
export {ogImage} from './data/images';
export function render(path){return renderToString(<StaticRouter location={path}><App/></StaticRouter>)}

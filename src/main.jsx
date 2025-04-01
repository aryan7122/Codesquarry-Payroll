import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Redux Provider ko import karein
import './index.css';
import App from './App.jsx';
import store from '../src/pages/Redux/Store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* Provider ko yahaan wrap karein */}
      <App />
    </Provider>
  </StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>  {/* Provider ko yahaan wrap karein */}
//       <App />
//     </Provider>
//   </React.StrictMode>,
// );

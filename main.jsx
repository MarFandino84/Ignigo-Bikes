import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App.jsx'
import { GlobalStyles } from './src/components/styles/GlobalStyles.js'
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import {persistor, store} from "./src/store.js"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
     <PersistGate persistor={persistor}>

    <GlobalStyles />
    <App />
    </PersistGate>
    </Provider>
     </React.StrictMode>,
)

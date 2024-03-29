import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './components/styles/GlobalStyles.js'
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import {persistor, store} from "./store.js"


ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
     <PersistGate persistor={persistor}>

    <GlobalStyles />
    <App />
    </PersistGate>
    </Provider>
)

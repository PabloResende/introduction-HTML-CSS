import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Jsx from './Jsx.jsx'
import Tools from './Tools.jsx'
import Imagem from './imagem.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Jsx />
    <Tools />
    <Imagem />
  </React.StrictMode>,
)

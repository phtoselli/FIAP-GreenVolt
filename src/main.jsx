import { ConfigProvider } from 'antd'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
    theme={{
      "token": {
        "colorPrimary": "#682CA6",
        "colorInfo": "#6CCF9B"
      }
    }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
)

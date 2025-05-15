import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")).render(<App />);
<React.StrictMode>
  <BrowserRouter basename="/mft1998-portfolio/">
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>


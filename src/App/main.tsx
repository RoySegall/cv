import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TemplateRouter } from "./Components/TemplateRouter";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TemplateRouter />
  </StrictMode>,
)

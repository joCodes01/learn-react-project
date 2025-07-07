
import { createRoot } from 'react-dom/client';
import MainContent from '/src/components/MainContent.jsx';
import Header from '/src/components/Header.jsx';

const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <Header />
    <MainContent />
  </>
);


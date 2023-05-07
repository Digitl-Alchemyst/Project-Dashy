import { useState } from "react";
import { ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/Team';
import Invoices from './scenes/Invoices';
import Contacts from './scenes/Contacts';
import Clients from './scenes/Clients';
// import Bar from './scenes/bar';
// import Line from './scenes/line';
import Form from './scenes/form';
// import Pie from './scenes/faq';
// import Geography from './scenes/geography';
// import FAQ from './scenes/faq';
import Calendar from './scenes/calendar';



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />


          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/clients" element={<Clients />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              <Route path="/form" element={<Form />} />
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/faw" element={<FAQ />} /> */}
              <Route path="/calendar" element={<Calendar />} />
              
              </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
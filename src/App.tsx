import { ColourModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import TopBar from './scenes/global/Topbar';
import SideBar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
// import Bar from './scenes/bar';
// import Form from './scenes/form';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Geography from './scenes/geography';
// import Calendar from './scenes/calendar';

function App() {
  const [theme, colourMode] = useMode();

  return (
    <ColourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className="app">
            <SideBar></SideBar>
            <main className="content">
              <TopBar />
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/team" element={<Team />}></Route>
                <Route path="/contacts" element={<Contacts />}></Route>
                <Route path="/invoices" element={<Invoices />}></Route>
                {/* <Route path="/form" element={<Form />}></Route> */}
                {/* <Route path="/bar" element={<Bar />}></Route> */}
                {/* <Route path="/line" element={<Line />}></Route> */}
                {/* <Route path="/faq" element={<FAQ />}></Route> */}
                {/* <Route path="/geography" element={<Geography />}></Route> */}
                {/* <Route path="/calendar" element={<Calendar />}></Route> */}
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
}

export default App;

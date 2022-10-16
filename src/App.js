import './App.css';
import Header from './components/Header';
import AdminLTE, { Sidebar, Content, Row, Col, Box, Button } from 'adminlte-2-react';
import ListGenre from './pages/ListGenre';
import ListMoview from './pages/ListMoview';



function App() {

  const { Item } = Sidebar;

  let sidebar = [
    <> 
    <Item key="genre" text="List Genre" to="/listGenre" />
        <Item key="movie" text="List Movie" to="/listMovie" />
</>
  ]


  return (
     <AdminLTE title={["AdminLTE"]} titleShort={["He", "we"]} theme="blue" sidebar={sidebar}>
      <ListGenre path="/listGenre" />
      <ListMoview path="/listMovie"  />
      </AdminLTE>
  );
}

export default App;

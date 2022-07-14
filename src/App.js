import './App.css'
import TourCard from './components/TourCard';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import SearchAppBar from './components/AppBar';
import ComboBox from './components/ComboBox';

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <Container sx={{marginY: 5}}>
        <Grid container spacing={5}>
          <TourCard/>
          <TourCard/>
          <TourCard/>
          <TourCard/>
        </Grid>
        {/* <ComboBox/> */}
      </Container>
    </div>
  );
}

export default App;

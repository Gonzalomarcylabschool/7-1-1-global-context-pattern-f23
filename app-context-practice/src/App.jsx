
import MainComponent from './components/MainComponent';
import Header from './components/Header';
import './App.css';


const App = () => {
  return (
    <>
      <Header />{/* This component does not use the context */}
      <MainComponent />{/* This component uses the context */}
    </>
  );
};

export default App;
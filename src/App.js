// import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Header}  from './Header/Header'
import {HeroSec} from './HeroSec/HeroSec'
import Studysec from './StudySec/Studysec'
import BankSec from './BankSec/BankSec'
import Client from './Client/Client';
import Company from '../src/Company/Company'
function App() {
  return (
  <div>
<Header/>
<HeroSec/>
<Studysec/>
<BankSec/>
<Client/>
<Company/>
</div>
);}

export default App;

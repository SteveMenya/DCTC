import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Greeting from '../components/Greeting';
import './Home.css';
import {Link} from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div>
      <h1>Homepage Works</h1>

      <Greeting firstName='JJ' lastName='Menya'/>
      <Link to='/more'>More info</Link>
    </div>
  );
};

export default Home;

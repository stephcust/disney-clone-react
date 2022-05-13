/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebaseConfig';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import { collection, getDocs } from "firebase/firestore";

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        getDocs(collection(db, "movies")).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // eslint-disable-next-line default-case
                switch(doc.data().type){
                    case 'recommend': 
                        recommends = [...recommends, {id: doc.id, ...doc.data()}];
                         break;
                    case 'new': 
                        newDisneys = [...newDisneys, {id: doc.id, ...doc.data()}];
                         break;
                    case 'original': 
                        originals = [...originals, {id: doc.id, ...doc.data()}];
                         break;
                    case 'trending': 
                        trending = [...trending, {id: doc.id, ...doc.data()}];
                         break;
                }
            });
       dispatch(
           setMovies({
           recommend: recommends,
           newDisney: newDisneys,
           original: originals,
           trending: trending,
       })
    )});
}, [userName]);

    return (
    <div>
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommends/>
            <NewDisney/>
            <Originals/>
            <Trending/>
        </Container>
    </div>
    )
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
      background: url("/images/homeBackground.png") fixed; 
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      content: "";
      position: absolute;
      inset: 0px;
      opacity: 1;
      z-index: -1;

  }
`;

export default Home
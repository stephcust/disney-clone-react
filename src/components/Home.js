import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';

const Home = (props) => {
    return (
    <div>
        <Container>
            <ImgSlider/>
            <Viewers/>
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
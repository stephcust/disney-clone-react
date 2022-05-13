import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebaseConfig';
import { collection, doc, getDoc } from "firebase/firestore";

const Detail = (props) => {

  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  
  useEffect(() => {
    getDoc(doc(db, "movies", id))
      .then((docSnap) => {
        if (docSnap.exists) {
          setDetailData(docSnap.data());
        } else {
          console.log('no such document in firebase')
        }
      })
      .catch((error) => {
        console.log("Error getting document: ", error);
      })
  }, [id]);

  return (
    <Container>
      <Background>
        <img
          alt={detailData.title}
          src={detailData.backgroundImg} />
      </Background>

      <ImageTitle>
        <img
          alt={detailData.title}
          src={detailData.titleImg}
        />
      </ImageTitle>

      <ContentMeta>
      <SubTitle>
          {detailData.subTitle}
        </SubTitle>
        <Controls>
          <Player>
            <img src='/images/playIconBlack.png' alt="" />
            <span>Assistir</span>
          </Player>
          <Trailer>
            <img src='/images/playIconWhite.png' alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src='/images/groupIcon.png' alt='' />
            </div>
          </GroupWatch>
        </Controls>
        
        <Description>
        {detailData.description}
        </Description>
      </ContentMeta>
    </Container>
  )
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  height: 90vh;
  overflow: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
  background: radial-gradient(farthest-side at 73% 21%, transparent, rgb(26, 29, 41));
`;
const Background = styled.div`
  left: 0px;
  right: 0px;
  top: 0px;
  opacity: 0.8;
  position: fixed;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: final;
      height: center;
    }
  }

`;
const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 20vw;
  min-height: 170px;
  width: 10%
  padding-bottom: 24px;

  img {
    min-width: 150px;
    max-width: 550px;
    width: 25vw;
  }
`;
const ContentMeta = styled.div`
  max-width: 874px;
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;
const Player = styled.button`
  display: flex;
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: #000;
  transition: all 300ms;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(190, 190, 190);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 22px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    
    img {
      width: 25px;
    }
  }
`;
const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    background: rgb(190, 190, 190);
    color: #000;
  }
`;
const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  bordewr: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;
const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;
const SubTitle = styled.div`
  color: rbg(249, 249, 249);
  font-size: 14px;
  min-height: 20px;
  margin: 10px 0px 0px;

  @media (max-width: 769px) {
    font-size: 11px;
  }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 12px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
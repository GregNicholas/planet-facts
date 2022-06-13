import { useState } from 'react'
import { useWindowWidth } from '../../customHooks/useWindowWidth'
import styled from 'styled-components'
import {FaExternalLinkSquareAlt} from 'react-icons/fa'
// import planetImg from '../../assets/planet-mercury.svg'

const Container = styled.main`
    display: grid;
    max-width: 1000px;
    margin: auto;
    @media (min-width: 768px){
        margin: 0 2rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto auto auto auto auto auto;
    }

    @media (min-width: 1024px){
        gap: 0 1rem;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
`
const SelectInfo = styled.section`
    height: 50px;
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    @media (min-width: 768px){
        grid-row: 5 / span 2;
        grid-column: 2 / span 1;
        flex-direction: column;
        border: none;
        margin-left: 20%;
        margin-top: 3rem;
    }
    @media (min-width: 1024px){
        grid-row: 4 / span 2;
        grid-column: 2 / span 1;
        margin-left: 1rem;
        margin-top: 0;
    }
`
const InfoList = styled.ul`
    list-style-type: none;
    height: 50px;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 1.9px;

    @media (min-width: 768px){
        flex-direction: column;
        height: fit-content;
        gap: 1rem;
    }
    
`
const InfoItem = styled.li`
    border-bottom: ${props => !props.selected ? "none" : "4px solid #419EBB"};
    padding: 0 1.25rem;
    height: -webkit-fill-available;
    cursor: pointer;
    opacity: ${props => props.selected ? "100%" : "60%"};
    display: flex;
    gap: 1rem;
    align-items: center;
    &:hover {
        opacity: 100%;
    }
    @media (min-width: 768px){
        width: 100%;
        height: 2.5rem;
        border: ${props => !props.selected ? "1px solid rgba(255, 255, 255, .2)" : "none"};
        background: ${props => !props.selected ? "none" : props.color};
        opacity: 100%;
    }
    @media (min-width: 1024px){
        height: 3rem;
    }
    
`
const ImageBlock = styled.div`
    height: 305px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 1024px) {
        height: 460px;
        grid-row: 1 / span 4;
        grid-column: 1 / span 2;
      }
    @media (min-width: 1024px) {
        height: 754px;
        grid-row: 1 / span 5;
        grid-column: 1 / span 1;
    }
`
const ImageContainer = styled.div` 
    width: ${props => props.width.mobile};

    @media (min-width: 768px) and (max-width: 1024px) {
      width: ${props => props.width.tablet};
    }
    @media (min-width: 1024px) {
        width: ${props => props.width.desktop};
      }
`
const PlanetInfo = styled.section`
      margin: auto;
      text-align: center;
      font-size: 0.8rem;
      margin: 0 1.5rem 1.5rem 1.5rem;

      @media (min-width: 768px){
        grid-row: 5 / span 2;
        grid-column: 1 / span 1;
        margin: 0 0 1.5rem 0;
        text-align: left;
        font-size: 0.9rem;
      }
      @media (min-width: 1024px){
        grid-row: 1 / span 3;
        grid-column: 2 / span 1;
        margin-left: 1rem;
        margin-top: 7rem;
        font-size: 1rem;
      }
`
const PlanetName = styled.h1`
      font-family: 'Antonio', sans-serif;
      font-size: 2.5rem;
      font-weight: 400;
      text-transform: uppercase;
      margin-bottom: 1rem;

    @media (min-width: 768px){
      font-size: 3rem;
    }
    @media (min-width: 1024px){
      font-size: 5rem;
    }

`
const PlanetContent = styled.p`
      line-height: 1.4rem;
      margin-bottom: 2rem;
      letter-spacing: 0.1px;
      opacity: .8;
`
const Source = styled.p`
      font-weight: 400;
      opacity: .6;
`
const WikiLink = styled.a`
      font-weight: 700;
      display: inline-flex;
      gap: 0.25rem;
      align-items: center;
      text-decoration: underline;
      cursor: pointer;
`
const Stats = styled.section`
      margin: 0 1.5rem 1.5rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      @media (min-width: 768px){
        grid-row: 7 / span 1;
        grid-column: 1 / span 2;
        flex-direction: row;
        gap: 1rem;
        margin: 0;
      }
      @media (min-width: 1024px){
        grid-row: 6 / span 1;
        grid-column: 1 / span 2;
      }
`
const StatItem = styled.div`
    height: 3rem;
    border: 1px solid rgba(255, 255, 255, .2);
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px){
        flex-direction: column;
        flex-direction: column;
        width: 100%;
        height: 6rem;
        justify-content: space-around;
        align-items: flex-start;
        padding: 0.5rem 1.2rem;
    }
`
const StatIndex = styled.span`
    opacity: .5;
`
const StatName = styled.span`
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    opacity: 50%;
    letter-spacing: 0.75px;

    @media (min-width: 1024px){
        font-size: 0.85rem;
    }
`
const Stat = styled.span`
    font-family: 'Antonio';
    font-size: 1.25rem;
    letter-spacing: -.75px;
    text-transform: uppercase;

    @media (min-width: 768px){
        font-size: 1.5rem;
    }
    @media (min-width: 1024px){
        font-size: 2.5rem;
    }
`

const PlanetPage = ({ planet }) => {
    console.log("IMAGES: ", planet.images, planet.images.planet.substring(1))
    const [image, setImage] = useState(planet.images.planet.substring(1))
    const [info, setInfo] = useState('overview')
    const screenWidth = useWindowWidth()
    return (
        <Container>
            <SelectInfo>
                <InfoList>
                    <InfoItem selected={info === 'overview'} color={planet.color} onClick={() => {
                            setImage(planet.images.planet.substring(1))
                            setInfo('overview')
                        }}>
                        {screenWidth < 768 ? 'overview' : <><StatIndex>01</StatIndex> <span>overview</span></>}
                    </InfoItem>
                    <InfoItem selected={info === 'structure'} color={planet.color} onClick={() => {
                            setImage(planet.images.internal.substring(1))
                            setInfo('structure')
                        }}>
                        {screenWidth < 768 ? 'internal' : <><StatIndex>02</StatIndex> <span>internal structure</span></>}
                    </InfoItem>
                    <InfoItem selected={info === 'geology'} color={planet.color} onClick={() => {
                            setImage(planet.images.geology.substring(1))
                            setInfo('geology')
                        }}>
                        {screenWidth < 768 ? 'surface' : <><StatIndex>03</StatIndex> <span>surface geology</span></>}
                    </InfoItem>
                </InfoList>
            </SelectInfo>
            <ImageBlock>
                <ImageContainer width={planet.imgWidth}>
                    <img src={`${process.env.PUBLIC_URL}${image}`} alt="planet" />
                </ImageContainer>
            </ImageBlock>
            <PlanetInfo>
                <PlanetName>{planet.name}</PlanetName>
                <PlanetContent>{planet[info].content}</PlanetContent>
                <Source>Source : <WikiLink href={planet[info].source} target="_blank">Wikipedia <FaExternalLinkSquareAlt/></WikiLink></Source>
            </PlanetInfo>
            <Stats>
                <StatItem><StatName>rotation time</StatName><Stat>{planet.rotation}</Stat></StatItem>
                <StatItem><StatName>revolution time</StatName><Stat>{planet.revolution}</Stat></StatItem>
                <StatItem><StatName>radius</StatName><Stat>{planet.radius}</Stat></StatItem>
                <StatItem><StatName>average temp.</StatName><Stat>{planet.temperature}</Stat></StatItem>
            </Stats>
        </Container>
    )
}

export default PlanetPage
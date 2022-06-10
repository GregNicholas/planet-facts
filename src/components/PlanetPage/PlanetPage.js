import { useState } from 'react'
import styled from 'styled-components'
import {FaExternalLinkSquareAlt} from 'react-icons/fa'
// import planetImg from '../../assets/planet-mercury.svg'

const Container = styled.main`
    display: grid;

    @media (min-width: 831px){
        margin: 3rem 7rem;
        gap: 0 1rem;
    }
`
const SelectInfo = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 1.9px;
    border-bottom: 1px solid rgba(255, 255, 255, .2);

    @media (min-width: 831px){
        grid-row: 2 / span 1;
        grid-column: 3 / span 1;
        flex-direction: column;
        border: none;
    }
`
const InfoItem = styled.li`
    border-bottom: ${props => !props.selected ? "none" : "4px solid #419EBB"};
    padding: auto 9px;
    padding: 16px 5px;
    height: -webkit-fill-available;
    cursor: pointer;
    opacity: ${props => props.selected ? "100%" : "60%"};
    &:hover {
        opacity: 100%;
    }
`
const ImageBlock = styled.div`
    height: 305px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 501px) and (max-width: 830px) {
        height: 460px;
      }
    @media (min-width: 831px) {
        height: 655px;
        grid-row: 1 / span 2;
        grid-column: 1 / span 2;
    }
`
const ImageContainer = styled.div` 
    width: ${props => props.width.mobile}px;

    @media (min-width: 501px) and (max-width: 830px) {
      width: ${props => props.width.tablet}px;
    }
    @media (min-width: 831px) {
        width: ${props => props.width.full}px;
      }
`
const PlanetInfo = styled.section`
      margin: auto;
      text-align: center;
      font-size: 0.8rem;
      margin: 0 1.5rem 1.5rem 1.5rem;

      @media (min-width: 831px){
        grid-row: 1 / span 1;
        grid-column: 3 / span 1;
    }
`
const PlanetName = styled.h1`
      font-family: 'Antonio', sans-serif;
      font-size: 2.5rem;
      font-weight: 400;
      text-transform: uppercase;
      margin-bottom: 1rem;
`
const PlanetContent = styled.p`
      line-height: 1.4rem;
      margin-bottom: 2rem;
      letter-spacing: 0.1px;
`
const Source = styled.p`
      font-weight: 400;
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

      @media (min-width: 831px){
        grid-row: 3 / span 1;
        grid-column: 1 / span 3;
        flex-direction: row;
        gap: 1rem;
        margin: 0;
      }
`
const StatItem = styled.div`
    height: 3rem;
    border: 1px solid rgba(255, 255, 255, .2);
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 501px){
        flex-direction: column;
        flex-direction: column;
        width: 100%;
        height: 6rem;
        justify-content: space-around;
        padding: 0.5rem 1.2rem;
    }
`
const StatName = styled.span`
    font-size: .7rem;
    font-weight: 700;
    text-transform: uppercase;
    opacity: 50%;
    letter-spacing: .75px;
`
const Stat = styled.span`
    font-family: 'Antonio';
    font-size: 1.25rem;
    letter-spacing: -.75px;
    text-transform: uppercase;
`

const PlanetPage = ({ planet, width }) => {
    const [image, setImage] = useState(planet.images.planet.substring(1))
    const [info, setInfo] = useState('overview')
    return (
        <Container>
            <SelectInfo>
                <InfoItem selected={info === 'overview'} onClick={() => setInfo('overview')}>overview</InfoItem>
                <InfoItem selected={info === 'structure'} onClick={() => setInfo('structure')}>structure</InfoItem>
                <InfoItem selected={info === 'geology'} onClick={() => setInfo('geology')}>surface</InfoItem>
            </SelectInfo>
            <ImageBlock>
                <ImageContainer width={width}>
                    <img src={`${process.env.PUBLIC_URL}${image}`} alt="planet" />
                </ImageContainer>
            </ImageBlock>
            <PlanetInfo>
                <PlanetName>{planet.name}</PlanetName>
                <PlanetContent>{planet[info].content}</PlanetContent>
                <Source>Source : <WikiLink href={planet[info].source} target="_blank">Wikipedia <FaExternalLinkSquareAlt/></WikiLink></Source>
            </PlanetInfo>
=            <Stats>
                <StatItem><StatName>rotation time</StatName><Stat>{planet.rotation}</Stat></StatItem>
                <StatItem><StatName>revolution time</StatName><Stat>{planet.revolution}</Stat></StatItem>
                <StatItem><StatName>radius</StatName><Stat>{planet.radius}</Stat></StatItem>
                <StatItem><StatName>average temp.</StatName><Stat>{planet.temperature}</Stat></StatItem>
            </Stats>
        </Container>
    )
}

export default PlanetPage
import { useState } from 'react'
import styled from 'styled-components'
import {FaExternalLinkSquareAlt} from 'react-icons/fa'
// import planetImg from '../../assets/planet-mercury.svg'

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
        height: 460px
      }
    @media (min-width: 831px) {
        height: 655px;
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
`
const StatItem = styled.div`
    height: 3rem;
    border: 1px solid rgba(255, 255, 255, .2);
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
        <>
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
            
            <Stats>
                <StatItem><StatName>rotation time</StatName><Stat>{planet.rotation}</Stat></StatItem>
                <StatItem><StatName>revolution time</StatName><Stat>{planet.revolution}</Stat></StatItem>
                <StatItem><StatName>radius</StatName><Stat>{planet.radius}</Stat></StatItem>
                <StatItem><StatName>average temp.</StatName><Stat>{planet.temperature}</Stat></StatItem>
            </Stats>
        </>
    )
}

export default PlanetPage

// {
//     "name": "Mercury",
//     "overview": {
//       "content": "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
//       "source": "https://en.wikipedia.org/wiki/Mercury_(planet)"
//     },
//     "structure": {
//       "content": "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
//       "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
//     },
//     "geology": {
//       "content": "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
//       "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
//     },
//     "rotation": "58.6 Days",
//     "revolution": "87.97 Days",
//     "radius": "2,439.7 KM",
//     "temperature": "430°c",
//     "images": {
//       "planet": "./assets/planet-mercury.svg",
//       "internal": "./assets/planet-mercury-internal.svg",
//       "geology": "./assets/geology-mercury.png"
//     }
//   },
import { useState } from 'react'
import styled from 'styled-components'
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
const ImageContainer = styled.div`
    margin: ${props => (304 - props.width)/2}px auto; 
    width: ${props => props.width}px;
`

const PlanetPage = ({ planet, width }) => {
    const [image, setImage] = useState(planet.images.planet.substring(1))
    const [info, setInfo] = useState('overview')
    console.log(info)
    console.log(planet)
    return (
        <>
            <SelectInfo>
                <InfoItem selected={info === 'overview'} onClick={() => setInfo('overview')}>overview</InfoItem>
                <InfoItem selected={info === 'structure'} onClick={() => setInfo('structure')}>structure</InfoItem>
                <InfoItem selected={info === 'geology'} onClick={() => setInfo('geology')}>surface</InfoItem>
            </SelectInfo>
            <ImageContainer width={width}>
                <img src={`${process.env.PUBLIC_URL}${image}`} alt="planet" />
            </ImageContainer>
            <h1>{planet.name}</h1>
            <p>{planet[info].content}</p>
            <p>Source: <a href={info.source}>Wikipedia</a></p>
            <section>
                <div><span>rotation time</span><span>{planet.rotation}</span></div>
                <div><span>revolution time</span><span>{planet.revolution}</span></div>
                <div><span>radius</span><span>{planet.radius}</span></div>
                <div><span>average temp.</span><span>{planet.temperature}</span></div>
            </section>
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
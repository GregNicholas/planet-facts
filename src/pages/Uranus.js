import PlanetPage from '../components/PlanetPage/PlanetPage'

const Uranus = ({ planet }) => {
    
    return (
        <PlanetPage planet={planet}  width={{mobile: "173", tablet: "285", full: "450"}} />
    )
}

export default Uranus
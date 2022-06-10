import PlanetPage from '../components/PlanetPage/PlanetPage'

const Mercury = ({ planet }) => {
    return (
        <PlanetPage planet={planet} width={{mobile: "111", tablet: "184", full: "290"}} />
    )
}

export default Mercury
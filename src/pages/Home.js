import styled from 'styled-components'

const Container = styled.main`
    width: 100%;
    height: 100%;
    padding: 1rem;
`

const Home = () => {
    
    return (
        <Container>
            <img src={`${process.env.PUBLIC_URL}/assets/solar-system.png`} alt="solar system map"/>
        </Container>
    )
}

export default Home
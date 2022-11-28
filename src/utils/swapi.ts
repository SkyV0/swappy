//get each planet by id

export const getStaticPaths: GetStaticPaths = async () => {
    const planets = await getPlanets()
    const paths = planets.results.map(planet => ({
        params: { id: planet.url.split('/')[5] }
    }))
    
    return { paths, fallback: false }
    }

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const planet = await getPlanetById(params.id)
    return { props: { planet } }
    }

export default function Planet({ planet }: { planet: StarWarsPlanet }) {
    return (
        <Layout title={planet.name}>
            <PlanetCard planet={planet} />
        </Layout>
    )
}
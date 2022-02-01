import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import { useValoContext } from '../../context/ValoContext';


//css import
import styles from "./home.module.css"
function Home() {
    const { agents } = useValoContext();
    let randomNumber = Math.floor(Math.random() * agents.length + 1) + 1
    console.log(randomNumber)
    return (
        <section className={styles.home}>
            <Container maxW='container.xl'>
                <div className='agents'>
                    <SimpleGrid columns={{ sm: 2, md: 4, lg: 5 }} spacing={3}>
                        {
                            agents.slice(7, 12).map(agent =>

                                <Link style={{ textDecoration: "none" }} to={`/agent/${agent?.displayName.toLowerCase()}`}>
                                    <Card data={agent} />
                                </Link>
                            )
                        }

                    </SimpleGrid>
                    <div className={styles.button}>
                        <Link style={{ textDecoration: "none" }} to="/agents">More Agents</Link>
                    </div>
                </div>
                <div>
                    maps
                </div>
                <div>
                    ranks
                </div>
            </Container>
        </section >
    );
}

export default Home;

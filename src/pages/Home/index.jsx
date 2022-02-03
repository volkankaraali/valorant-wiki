import { Container, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import { useValoContext } from '../../context/ValoContext';


//css import
import styles from "./home.module.css"
function Home() {
    const { agents, ranks } = useValoContext();

    return (
        <section className={styles.home}>
            <div className={styles.agents}>
                <Container maxW='container.xl'>
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
                </Container>
            </div>
            <div>
                <Container maxW='container.xl'>
                    <SimpleGrid columns={{ sm: 2, md: 4, lg: 5 }} spacing={3}>
                        {
                            ranks.slice(20, 25).map(rank =>

                                <Link style={{ textDecoration: "none" }} to={`/ranks`}>
                                    <div className={styles.rankCard}>
                                        <img src={rank.largeIcon} alt={rank.tierName} />
                                        <h4>{rank.tierName}</h4>
                                    </div>
                                </Link>
                            )
                        }

                    </SimpleGrid>
                    <div className={styles.button}>
                        <Link style={{ textDecoration: "none" }} to="/ranks">More Ranks</Link>
                    </div>
                </Container>
            </div>

            {/* <Container maxW='container.xl'>
                <div >
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
                <div className='ranks'>
                    <SimpleGrid columns={{ sm: 2, md: 4, lg: 5 }} spacing={3}>
                        {
                            ranks.slice(20, 25).map(rank =>

                                <Link style={{ textDecoration: "none" }} to={`/ranks`}>
                                    <div className={styles.rankCard}>
                                        <img src={rank.largeIcon} alt={rank.tierName} />
                                        <h4>{rank.tierName}</h4>
                                    </div>
                                </Link>
                            )
                        }

                    </SimpleGrid>
                    <div className={styles.button}>
                        <Link style={{ textDecoration: "none" }} to="/agents">More Agents</Link>
                    </div>
                </div>
            </Container> */}
        </section >
    );
}

export default Home;

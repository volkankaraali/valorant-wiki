import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';

//context improt
import { useValoContext } from '../../context/ValoContext';

//css import
import styles from "./agents.module.css"
function Agents() {
    let { agents } = useValoContext()

    return (
        <section className={styles.agents}>
            <Container maxW='container.xl'>
                <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} spacing='30px'>
                    {
                        agents.map((agent) => (
                            <Link to={`/agent/${agent.displayName.toLowerCase()}`} key={agent.uuid}>
                                <Box height='400px'>
                                    <Card agent={agent} />
                                </Box>
                            </Link>

                        ))
                    }
                </SimpleGrid>
            </Container>
        </section >
    )
}

export default Agents;

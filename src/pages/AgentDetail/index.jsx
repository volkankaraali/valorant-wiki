import { Container, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router';
import { useValoContext } from '../../context/ValoContext';


//import css
import styles from "./agentDetail.module.css";

function AgentDetail() {
    let { title } = useParams()
    let { agents } = useValoContext();

    let agent = agents.find(a => a.displayName.toLowerCase() === title)

    return (

        <Container maxW='container.xl'>

            <div className={styles.main}>
                <img className={styles.detailImg} src={agent?.bustPortrait} alt="" />
                <div className={styles.detailCard}>

                    <div className={styles.detailCardHeader}>
                        <h4 >{agent?.displayName}</h4>
                        <p>{agent?.description}</p>
                    </div>

                    <div className={styles.detailCardRole}>
                        <img src={agent.role?.displayIcon} alt={agent.role?.displayName} />
                        <span>{agent?.role?.displayName} </span>
                    </div>

                    <div className={styles.detailCardAbilities}>
                        <h5>Abilities</h5>
                        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={5}>
                            {
                                agent.abilities.map(ability => (

                                    <div className={styles.detailCardAbilityItem}>
                                        <h3 >{ability.displayName}</h3>
                                        <p>{ability.description}</p>
                                        <img src={ability?.displayIcon} alt={ability?.displayIcon} />
                                    </div>
                                ))
                            }
                        </SimpleGrid>
                    </div>

                    <div className={styles.detailCardVoice}>
                        <h3> In game voice</h3>
                        <audio controls style={{}}>
                            <source src={agent?.voiceLine?.mediaList[0]?.wave} type="audio/wav" />
                        </audio>
                    </div>
                </div>

            </div>
        </Container>
    );
}

export default AgentDetail;

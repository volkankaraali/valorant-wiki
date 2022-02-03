import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';


//css import
import styles from "./card.module.css"

function Card({ data }) {

    return (
        <div className={styles.card}>
            <img src={data?.fullPortrait} alt=''></img>
            <div className={styles.cardBody}>
                <h4>{data.displayName} </h4>
                <div className={styles.cardAbility}>
                    <SimpleGrid width="200px" columns={2} spacing={1}>
                        {
                            data.abilities.map(e => (
                                <span className={styles.cardAbilityItem}>{e.displayName}</span>
                            ))
                        }
                    </SimpleGrid>

                </div>
            </div>
        </div>


    );
}

export default Card;

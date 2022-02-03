import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useValoContext } from '../../context/ValoContext';

//css import
import styles from "./ranks.module.css"

function Ranks() {
    const { ranks } = useValoContext();
    //remove unsued ranks on array
    let newRanks = ranks.filter(e => e.tier !== 1 && e.tier !== 2)


    return (

        <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} spacing='40px' marginTop={10} >
            {
                newRanks.map(e =>
                    <div className={styles.rankCard}>
                        <img src={e.largeIcon} alt={e.tierName} />
                        <h4>{e.tierName}</h4>
                    </div>
                )
            }
        </SimpleGrid >


    );
}

export default Ranks;

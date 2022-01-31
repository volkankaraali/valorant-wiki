import React from 'react';
import styles from "./card.module.css"
function AgentCard({ agent }) {
    return (
        <div className={styles.card} >
            <img className={styles.agentImg} src={agent.bustPortrait} alt="" />
            <h3 >{agent.displayName}</h3>
            <div className={styles.cardBody} >
                <p >{agent.description}</p>
                <img src={agent.role?.displayIcon} alt={agent.role?.displayName} />
            </div>
        </div>
    );
}

export default AgentCard;

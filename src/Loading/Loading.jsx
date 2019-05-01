import React from 'react';
import styles from './Loading.module.css';

import spinner from './spinnerPoke.gif';

const Loading = () => {
    return (
        <div className={styles.loading}>
            <img src={spinner} width="80px" height="80px" alt="Loading..." />
        </div>
    );
};

export default Loading;

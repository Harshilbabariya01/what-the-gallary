import React from 'react';

import './styles.css';

const Stats = ({ stats }) => {
    if (!stats) {
        return <span className="stats">Loading...</span>;
    }
    return (
        <span className="stats">
            {stats.error && 'Error Occured!'}
            {stats.isLoading && 'Images is Loading...'}
            {stats.downloads !== null && `${stats.downloads}`}
        </span>
    );
};

export default Stats;

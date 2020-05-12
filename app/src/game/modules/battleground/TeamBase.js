import React from 'react';
import PropTypes from 'prop-types';
import { INITIAL_BASE_STRENGTH } from '../../constants/turn';
import utilsService from '../../services/utils';

const TeamBase = ({ life, team, isGameOver }) => {
    const isBaseDestroyed = isGameOver && life <= 0;
    const lifePercentage = isBaseDestroyed
        ? 0
        : utilsService.getPercentage(life, INITIAL_BASE_STRENGTH);

    return (
        <div
            data-testid={`team-base--${team}`}
            className={`team-base team-base--${team} ${
                isBaseDestroyed ? 'team-base--destroyed' : ''
            }`}>
            <h3 className="team-base__title">{`${team === 'user' ? 'Your' : 'Enemy'} Base`}</h3>
            <div className="team-base__health">
                <span
                    className="team-base__health-percentage"
                    style={{ width: `${lifePercentage}%` }}>
                    <span className="team-base__health-text">{`${life}/${INITIAL_BASE_STRENGTH}`}</span>
                </span>
            </div>
        </div>
    );
};

TeamBase.propTypes = {
    life: PropTypes.number.isRequired,
    team: PropTypes.string.isRequired,
    isGameOver: PropTypes.bool
};

export default TeamBase;

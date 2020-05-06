import React, { useState } from 'react';
import { CARD_TYPES } from '../constants/cards';
import Card from './Card';

const CardsShowcase = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const getCard = card => {
        return <Card key={card.id} card={card} mana={Infinity}></Card>;
    };

    const handleSearchChange = event => {
        const newTerm = event.target.value;

        setSearchTerm(newTerm);
    };

    const filterBySearchTerm = card => {
        const term = searchTerm.toLowerCase();

        if (term.length === 0) {
            return true;
        }

        return (
            card.label.toLowerCase().indexOf(term) > -1 ||
            card.faction.toLowerCase().indexOf(term) > -1
        );
    };

    return (
        <>
            <h2>All Cards</h2>
            <div data-test-id="cards-list" className="cards-with-search">
                <div className="form-field">
                    <input
                        className="input"
                        placeholder="Search for cards"
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="cards-showcase">
                    {CARD_TYPES.filter(filterBySearchTerm)
                        .sort((a, b) => a.cost - b.cost)
                        .map(card => getCard(card))}
                </div>
            </div>
        </>
    );
};

export default CardsShowcase;

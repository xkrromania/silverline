import React from 'react';
import { render } from '@testing-library/react';

import Tile from './Tile';

describe('Tile:', () => {
    test('renders Tile', () => {
        const mockProps = {
            lane: 0,
            row: 0,
            enemyUnits: [],
            userUnits: [],
            selectedLane: { id: 1 }
        };
        const { getByTestId } = render(<Tile {...mockProps} />);
        const elem = getByTestId('tile-00');

        expect(elem).toBeInTheDocument();
    });
});
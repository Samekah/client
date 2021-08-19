import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeadingNav from '.';

describe('HeadingNav', () => {
    test('it renders a nav tag', () => {
        render(<HeadingNav />, { wrapper: MemoryRouter });
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})
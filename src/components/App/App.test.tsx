import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from './index';
import '@testing-library/jest-dom';


describe('App Components rendering Tests', () => {

    test('Initial App render test ', () => {
        render(<App />, { wrapper: MemoryRouter });
        expect(screen.getByTestId('App')).toBeInTheDocument();
        expect(screen.getByTestId('Header')).toBeInTheDocument();
        expect(screen.getByTestId('Aside')).toBeInTheDocument();
        expect(screen.getByTestId('Main')).toBeInTheDocument();
    });


    test('Invalid path redirection test', () => {
        render(
            <MemoryRouter initialEntries={['/dont/test/me']}>
                <Routes>
                    <Route path="*" element={<App />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText(/Personality Test/i)).toBeInTheDocument();
        expect(screen.getByText(/Assessments/i)).toBeInTheDocument();
    });

});


describe('Assessment start test', () => {

    test('Clicking the start button', async () => {
        render(<App />, { wrapper: MemoryRouter });

        const buttonElement = screen.getByTestId('start-assessment-button');
        expect(buttonElement).toBeInTheDocument();
        fireEvent.click(buttonElement);
        
        // screen.debug();
        await waitFor(() => {
            expect(screen.getByText(/Response Sheet/i)).toBeInTheDocument();
            expect(screen.getByText('Questions')).toBeInTheDocument();

        });
    });
});
import { render, screen } from '@testing-library/react';
import PageHeader from '../PageHeader';

describe('<PageHeader />', () => {
    beforeEach(() => {
        render(<PageHeader />);
    });

    it('renders the silver car logo', () => {
        const buttonElement = screen.getByTestId("sc_logo");
        expect(buttonElement).toBeInTheDocument();
    });

    it('renders the how it works button', () => {
        const buttonElement = screen.getByText("How it Works");
        expect(buttonElement).toBeInTheDocument();
    });

    it('renders the login button', () => {
        const buttonElement = screen.getByText("Login");
        expect(buttonElement).toBeInTheDocument();
    });
});

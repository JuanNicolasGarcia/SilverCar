import { render, screen } from '@testing-library/react';
import PageFooter from '../PageFooter';

describe('<PageHeader />', () => {
    beforeEach(() => {
        render(<PageFooter />);
    });

    it('renders the copyright info', () => {
        const textElement = screen.getByTestId("copyright");
        expect(textElement).toBeInTheDocument();
    });

    it('renders the Careers text', () => {
        const textElement = screen.getByText("Careers");
        expect(textElement).toBeInTheDocument();
    });

    it('renders the Privacy text', () => {
        const textElement = screen.getByText("Privacy");
        expect(textElement).toBeInTheDocument();
    });
});
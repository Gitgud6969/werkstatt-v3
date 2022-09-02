import { render } from '@testing-library/react';

import ContactSection from './contact-section';

describe('ContactSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactSection />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import HeroSectionSecondaryIndex from './hero-section-secondary-index';

describe('HeroSectionSecondaryIndex', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroSectionSecondaryIndex />);
    expect(baseElement).toBeTruthy();
  });
});

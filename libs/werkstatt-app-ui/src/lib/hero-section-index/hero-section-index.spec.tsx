import { render } from '@testing-library/react';

import HeroSectionIndex from './hero-section-index';

describe('HeroSectionIndex', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroSectionIndex />);
    expect(baseElement).toBeTruthy();
  });
});

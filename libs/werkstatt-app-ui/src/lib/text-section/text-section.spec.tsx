import { render } from '@testing-library/react';

import TextSection from './text-section';

describe('TextSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextSection />);
    expect(baseElement).toBeTruthy();
  });
});

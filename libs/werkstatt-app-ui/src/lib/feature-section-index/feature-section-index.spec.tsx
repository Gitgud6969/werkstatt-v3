import { render } from '@testing-library/react';

import FeatureSectionIndex from './feature-section-index';

describe('FeatureSectionIndex', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureSectionIndex />);
    expect(baseElement).toBeTruthy();
  });
});

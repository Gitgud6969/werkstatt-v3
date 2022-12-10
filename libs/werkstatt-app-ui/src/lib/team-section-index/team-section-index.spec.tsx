import { render } from '@testing-library/react';

import TeamSectionIndex from './team-section-index';

describe('TeamSectionIndex', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TeamSectionIndex />);
    expect(baseElement).toBeTruthy();
  });
});

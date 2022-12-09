import { render } from '@testing-library/react';

import TeamSectionIndex from './projekt-section-index';

describe('TeamSectionIndex', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TeamSectionIndex />);
    expect(baseElement).toBeTruthy();
  });
});

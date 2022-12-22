import { render } from '@testing-library/react';

import GridLayoutWithLeadingItem from './grid-layout-with-leading-item';

describe('GridLayoutWithLeadingItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GridLayoutWithLeadingItem />);
    expect(baseElement).toBeTruthy();
  });
});

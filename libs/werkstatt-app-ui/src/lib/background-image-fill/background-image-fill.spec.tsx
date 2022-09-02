import { render } from '@testing-library/react';

import BackgroundImageFill from './background-image-fill';

describe('BackgroundImageFill', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BackgroundImageFill />);
    expect(baseElement).toBeTruthy();
  });
});

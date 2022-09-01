import { render } from '@testing-library/react';

import DarkmodeSwitch from './darkmode-switch';

describe('DarkmodeSwitch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DarkmodeSwitch />);
    expect(baseElement).toBeTruthy();
  });
});

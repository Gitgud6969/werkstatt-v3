import { render } from '@testing-library/react';

import WerkstattLogo from './werkstatt-logo';

describe('WerkstattLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WerkstattLogo size={0} />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import WerkstattLogoAuto from './werkstatt-logo-auto';

describe('WerkstattLogoAuto', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WerkstattLogoAuto size={0} />);
    expect(baseElement).toBeTruthy();
  });
});

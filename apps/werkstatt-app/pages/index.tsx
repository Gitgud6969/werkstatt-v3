import {HeaderResponsive} from '@werkstatt/werkstatt-app-ui'


export function Index() {
  return (
    <div>
      <HeaderResponsive links={[{link: "home",label: "Home"}, {link: "About_us",label: "Über uns"}, {link: "Services",label: "Unser Service"}]} />

    </div>
  );
}

export default Index;

import { Helmet } from 'react-helmet-async';

import { Chargingplot } from 'src/sections/chargingplot/view';


// import { UserView } from 'src/sections/user/view';
// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>



      <Chargingplot />
    </>
  );
}

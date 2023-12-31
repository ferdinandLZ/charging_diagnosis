import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`./assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'charging',
    path: '/charging_diagnosis/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'canplot',
    path: 'https://ferdinandlz.github.io/ploty/',
    icon: icon('ic_user'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;

import AntDemo from './AntDemo';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

const routes = [
    {
      path: '/',
      component: AntDemo,
      exact: true,
      breadcrumbName: '首页'
    },
    {
      path: '/one',
      component: PageOne,
      breadcrumbName: '仓库'
    },
    {
      path: '/two',
      component: PageTwo,
      breadcrumbName: '朋友'
    }
  ];
  
  export default routes;
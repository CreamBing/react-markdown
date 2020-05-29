import AntDemo from './AntDemo';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import Aritcles from './Aritcles';
import PageTwoRoute from './PageTwoRoute';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const routes = [
    {
      path: '/',
      component: AntDemo,
      exact: true,
      icon: UserOutlined,
      breadcrumbName: '首页'
    },
    {
      path: '/one',
      component: PageOne,
      icon: VideoCameraOutlined,
      breadcrumbName: '仓库'
    },
    {
      path: '/two',
      component: PageTwoRoute,
      icon: UploadOutlined,
      breadcrumbName: '朋友',
      routes: [
        {
          path: '/two',
          component: PageTwo,
          exact: true,
          icon: UploadOutlined,
          breadcrumbName: '',
        },
        {
          path: '/two/:id',
          component: Aritcles,
          icon: UploadOutlined,
          breadcrumbName: '',
        }
      ]
    },
    {
      path: '/three',
      component: PageThree,
      icon: VideoCameraOutlined,
      breadcrumbName: '测试'
    },
  ];
  
  export default routes;
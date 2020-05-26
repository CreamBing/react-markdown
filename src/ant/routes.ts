import AntDemo from './AntDemo';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
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
      component: PageTwo,
      icon: UploadOutlined,
      breadcrumbName: '朋友'
    }
  ];
  
  export default routes;
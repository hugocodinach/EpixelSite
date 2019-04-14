import LoginComponent from '../components/login/LoginComponent';
import SignInComponent from '../components/signIn/SignInComponent';
import HomeComponent from '../components/home/HomeComponent';
import PhotoComponent from '../components/photo/PhotoComponent';
import LanComponent from '../components/lan/LanComponent';
import OrganisationComponent from '../components/organisation/OrganisationComponent';

const routes = [
    {
        path: "/home",
        component: HomeComponent,
        appBar: true,
        appBarTab: true,
        icon: 'home',
        name: 'Home',
    },
    {
        path: "/photos",
        component: PhotoComponent,
        appBar: true,
        appBarTab: true,
        icon: 'photo_camera',
        name: 'Photos',
    },
    {
        path: "/lan",
        component: LanComponent,
        appBar: true,
        appBarTab: true,
        icon: 'settings_input_hdmi',
        name: 'Lan',
    },
    {
        path: "/organisation",
        component: OrganisationComponent,
        appBar: true,
        appBarTab: true,
        icon: 'dashboard',
        name: 'Organisation',
    },
    {
        path: "/login",
        component: LoginComponent,
        appBar: false,
        appBarTab: false,
        icon: '',
        name: '',
    },
    {
        path: "/signin",
        component: SignInComponent,
        appBar: false,
        appBarTab: false,
        icon: '',
        name: '',
    },
];

export default routes;
//Layouts
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import HotStory from '~/pages/HotStory';
import Upload from '~/pages/Upload';
import CategoryDetail from '~/pages/CategoryDetail';
import StoryDetail from '~/pages/StoryDetail';
import UserHistory from '~/pages/UserHistory';

import AdminUserManager from '~/pages/AdminUserManager';
import AddUser from '~/pages/AdminUserManager/AddUser';
import UpdateUser from '~/pages/AdminUserManager/UpdateUser';

import AdminEmployee from '~/pages/AdminEmployee';
import AddEmployee from '~/pages/AdminEmployee/AddEmployee';
import UpdateEmployee from '~/pages/AdminEmployee/UpdateEmploy';

import AdminGenres from '~/pages/AdminGenres';
import AddGenres from '~/pages/AdminGenres/AddGenres';

import AdminStory from '~/pages/AdminStory';
import AddStory from '~/pages/AdminStory/AddStory';
import UpdateStory from '~/pages/AdminStory/UpdateStory';

import AdminAuthor from '~/pages/AdminAuthor';
import AddAuthor from '~/pages/AdminAuthor/AddAuthor';

import SearchResult from '~/components/Layout/components/Search/SearchResult';

import DefaultAdminLayout from '~/components/Layout/DefaultAdminlayout';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/hotstory', component: HotStory },
    { path: '/upload', component: Upload, layout: null },
    { path: '/catedetail/:genresId', component: CategoryDetail },
    { path: '/storydetail/:storyId', component: StoryDetail },
    { path: '/history', component: UserHistory },

    //Admin User
    { path: '/usermanager', component: AdminUserManager, layout: DefaultAdminLayout },
    { path: '/adduser', component: AddUser, layout: DefaultAdminLayout },
    { path: '/updateuser/:username', component: UpdateUser, layout: DefaultAdminLayout },

    //Admin Employee
    { path: '/employee', component: AdminEmployee, layout: DefaultAdminLayout },
    { path: '/addemployee', component: AddEmployee, layout: DefaultAdminLayout },
    { path: '/updateEmploy/:employeeId', component: UpdateEmployee, layout: DefaultAdminLayout },

    //Admin Genres
    { path: '/genres', component: AdminGenres, layout: DefaultAdminLayout },
    { path: '/addgenres', component: AddGenres, layout: DefaultAdminLayout },

    //Admin Stories
    { path: '/story', component: AdminStory, layout: DefaultAdminLayout },
    { path: '/addstory', component: AddStory, layout: DefaultAdminLayout },
    { path: '/updatestory/:storyId', component: UpdateStory, layout: DefaultAdminLayout },

    //Admin Author
    { path: '/author', component: AdminAuthor, layout: DefaultAdminLayout },
    { path: '/addauthor', component: AddAuthor, layout: DefaultAdminLayout },

    { path: '/searchresult', component: SearchResult },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

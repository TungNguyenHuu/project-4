//Layouts
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import HotStory from '~/pages/HotStory';
import Upload from '~/pages/Upload';
import CategoryDetail from '~/pages/CategoryDetail';
import StoryDetail from '~/pages/StoryDetail';

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
import DefaultLayout from '~/components/Layout/DefaultLayout';
import PublicRole from '~/components/Authorization/PublicRole';
import AdminRole from '~/components/Authorization/AdminRole';

// Public routes
const publicRoutes = [
    {
        path: "",
        element: (
            <PublicRole>
                <DefaultLayout />
            </PublicRole>
        ),
        children: [
            { path: '', element: <Home/> },
            { path: 'home', element: <Home/> },
            { path: 'login', element: <Login/>},
            { path: 'register', element: <Register/>},
            { path: 'hot-story', element: <HotStory/> },
            { path: 'upload', element: <Upload/>},
            { path: 'cate-detail', element: <CategoryDetail/> },
            { path: 'story-detail', element: <StoryDetail/> },
            { path: 'search-result', element: <SearchResult/> },

        ],
    },
];

const privateRoutes = [
    {
        path: "admin",
        element: (
            <AdminRole>
                <DefaultAdminLayout />
            </AdminRole>
        ),
        children: [
            //Admin User
            { path: 'user-manager', element: <AdminUserManager/> },
            { path: 'adduser', element: <AddUser/>},
            { path: 'update-user/:username', element: <UpdateUser/>},

            //Admin Employee
            { path: 'employee', element: <AdminEmployee/>},
            { path: 'add-employee', component: <AddEmployee/>},
            // { path: 'updateEmploy/:employeeId', element: UpdateEmployee},

            //Admin Genres
            // { path: 'genres', element: AdminGenres},
            // { path: '/addgenres', component: AddGenres, layout: DefaultAdminLayout },

            //Admin Stories
            // { path: 'story', element: AdminStory},
            // { path: '/addstory', component: AddStory},
            // { path: '/updatestory/:storyId', component: UpdateStory},

            //Admin Author
            // { path: 'author', element: AdminAuthor},
            // { path: '/addauthor', component: AddAuthor},
        ],
    },
];

export { publicRoutes, privateRoutes };

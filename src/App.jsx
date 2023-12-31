import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import { privateRoutes, publicRoutes } from '~/routes';
import DefaultLayout from '~/components/Layout/DefaultLayout';
import NotFoundPage from '~/pages/NotFoundPage/NotFoundPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="*" exact={true} element={<NotFoundPage/>} />
                    <Route path="/login" exact={true} element={<Login/>} />
                    <Route path="/register" exact={true} element={<Register/>} />
                    {/*web Routes*/}
                    {publicRoutes.map((route, index) => {
                        const { path, element, children } = route;
                        return (
                            <Route key={index} path={path}>
                                {children.map((childRoute, childIndex) => {
                                    let Layout = DefaultLayout;
                                    return (
                                        <Route
                                            key={childIndex}
                                            path={childRoute.path}
                                            element={<Layout>{childRoute.element}</Layout>}
                                        />
                                    );
                                })}
                            </Route>
                        );
                    })}

                    {/* Admin Routes */}
                    {privateRoutes.map((route, index) => {
                        const { path, element, children } = route;
                        return (
                            <Route key={index} path={path} element={element}>
                                {children.map((childRoute, childIndex) => {
                                    return (
                                       <>
                                           <Route
                                               key={childIndex}
                                               path={childRoute.path}
                                               element={childRoute.element}
                                           />
                                       </>

                                    );
                                })}
                            </Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

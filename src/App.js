import AppLayout from "layout/AppLayout";
import { Routes, Route, Outlet } from "react-router-dom";
import routes from "router/routes";

const App = () => {
  //
  return (
    <Routes>
      <Route
        element={
          <AppLayout>
            <Outlet />
          </AppLayout>
        }
      >
        {routes.map((route) => {
          const Component = route.element;
          return (
            <Route
              index={route.index}
              key={route.path}
              path={route.path}
              element={<Component />}
            />
          );
        })}
      </Route>
      {/* error pages: 401,404,403,500 */}
      <Route path="/401" element={<div>401</div>} />
    </Routes>
  );
};

export default App;

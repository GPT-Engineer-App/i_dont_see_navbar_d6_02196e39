import { Flex, Box } from "@chakra-ui/react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

// Create a router instance
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index />} />
      <Route path="/users" element={<Users />} />
      <Route path="/settings" element={<Settings />} />
      {/* Add more routes here as needed */}
    </>,
  ),
);

function App() {
  return (
    <RouterProvider router={router}>
      <Flex>
        <Navbar />
        <Box width="80%"><Outlet /></Box>
      </Flex>
    </RouterProvider>
  );
}



export default App;

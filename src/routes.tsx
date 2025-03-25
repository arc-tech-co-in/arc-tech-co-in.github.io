import { createBrowserRouter } from "react-router";
import { Index } from ".";
import { Home } from "./pages/Home";
import { People } from "./pages/People";
import { Technologies } from "./pages/Technologies";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { AI } from "./pages/AI";
import { TechBlog } from "./pages/TechBlog";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Index view={<Home />} />,
    },
    {
        path: "/home",
        element: <Index view={<Home />} />,
    },
    {
        path: "/people",
        element: <Index view={<People />} />,
    },
    {
        path: "/technologies",
        element: <Index view={<Technologies />} />,
    },
    {
        path: "/about_us",
        element: <Index view={<AboutUs />} />,
    },
    {
        path: "/contact_us",
        element: <Index view={<ContactUs />} />,
    },
    {
        path: "/ai",
        element: <Index view={<AI />} />,
    },
    {
        path: "/tech_blog",
        element: <Index view={<TechBlog />} />,
    }
])

export { Routes };
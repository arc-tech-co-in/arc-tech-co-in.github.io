import { createBrowserRouter } from "react-router";
import { Index } from ".";
import { lazy, Suspense } from "react";
import { Center, Loader } from "@mantine/core";

const Home = lazy(() => import("./pages/Home"));
const People = lazy(() => import("./pages/People"));
const Technologies = lazy(() => import("./pages/Technologies"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AI = lazy(() => import("./pages/AI"));
const TechBlog = lazy(() => import("./pages/TechBlog"));

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Index view={<Suspense fallback={<Center><Loader /></Center>}><Home /></Suspense>} />,
    },
    {
        path: "/home",
        element: <Index view={<Suspense fallback={<Center><Loader /></Center>}><Home /></Suspense>} />,
    },
    {
        path: "/people",
        element: <Index view={<Suspense fallback={<Center><Loader /></Center>}><People /></Suspense>} />,
    },
    {
        path: "/technologies",
        element: <Index view={<Suspense fallback={<Center><Loader /></Center>}><Technologies /></Suspense>} />,
    },
    {
        path: "/about_us",
        element: <Index view={<Suspense fallback={<Center><Loader /></Center>}><AboutUs /></Suspense>} />,
    },
    {
        path: "/contact_us",
        element: <Index view={<Suspense fallback={<Center><Loader /></Center>}><ContactUs /></Suspense>} />,
    },
    {
        path: "/ai",
        element: <Index view={<Suspense fallback={<Center><Loader /></Center>}><AI /></Suspense>} />,
    },
    {
        path: "/tech_blog",
        element: <Index view={<Suspense fallback={<Center><Loader /></Center>}><TechBlog /></Suspense>} />,
    }
])

export { Routes };
import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import "@radix-ui/themes/styles.css"
import "./index.css"
import { Theme, ThemePanel } from "@radix-ui/themes"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Auth from "./pages/auth"
import Layout from "./components/layout"
import MyCloud from "./pages/my-cloud"
import Shared from "./pages/shared"
import Favorites from "./pages/favorites"
import PrivateFiles from "./pages/private-files"
import DeletedFiles from "./pages/deleted-files"
import Help from "./pages/help"
import AllFiles from "./pages/all-files"

const container = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/mc",
        element: <MyCloud />,
      },
      {
        path: "/s",
        element: <Shared />,
      },
      {
        path: "/af",
        element: <AllFiles />,
      },
      {
        path: "/fav",
        element: <Favorites />,
      },
      {
        path: "/pf",
        element: <PrivateFiles />,
      },
      {
        path: "/df",
        element: <DeletedFiles />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
])
if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Theme
          accentColor="violet"
          radius="large"
          scaling="95%"
          appearance="light"
        >
          <RouterProvider router={router} />
          <ThemePanel />
        </Theme>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}

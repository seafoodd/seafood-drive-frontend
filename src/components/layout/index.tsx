import React, { useEffect } from "react"
import Header from "../header"
import Container from "../container"
import Navbar from "../nav-bar"
import { Outlet, useNavigate } from "react-router-dom"
import styles from "./layout.module.css"

const Layout = () => {
  const navigate = useNavigate()

  return (
    <>
      <Container>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div>
          <Header />
          <div>
            <div className={styles.outlet}>
              <Outlet />
            </div>
          </div>
        </div>
        <div className={styles.something}>
          <div className="flex-col flex gap-5">{}</div>
        </div>
      </Container>
    </>
  )
}

export default Layout

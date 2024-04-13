import React, { ReactNode } from "react"
import styles from "./nav-item.module.css"
import {
  Link,
  useLocation,
  useNavigate,
  useResolvedPath,
} from "react-router-dom"
import { Button } from "@radix-ui/themes"

type Props = {
  href: string
  children: string
  icon?: ReactNode
}

const NavItem: React.FC<Props> = ({ href = "", icon = null, children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = location.pathname === href

  return (
    <Button
      size={"4"}
      variant={isActive ? "solid" : "ghost"}
      className={styles.container}
      onClick={() => navigate(href)}
    >
      <div className={styles.iconTextContainer}>
        {icon} <p>{children}</p>
      </div>
    </Button>
  )
}

export default NavItem

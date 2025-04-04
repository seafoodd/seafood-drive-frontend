import styles from "./navbar.module.css"
import NavItem from "../nav-item"
import { Flex } from "@radix-ui/themes"
import { FaFile, FaFolder, FaStar } from "react-icons/fa"
import {
  RiDeleteBin5Fill,
  RiFolderLockFill,
  RiFolderSharedFill,
  RiLogoutBoxFill,
} from "react-icons/ri"
import { BsChatLeftDotsFill } from "react-icons/bs"
import { PiShrimpFill } from "react-icons/pi"
import { useNavigate } from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <PiShrimpFill size={48} /> seafood drive
      </div>
      <Flex gap={"5"} direction={"column"}>
        <NavItem icon={<FaFolder size={24} />} href={"/mc"}>
          My Cloud
        </NavItem>
        <NavItem icon={<RiFolderSharedFill size={24} />} href={"/s"}>
          Shared
        </NavItem>
        <NavItem icon={<FaFile size={24} />} href={"/af"}>
          All files
        </NavItem>
        <NavItem icon={<FaStar size={24} />} href={"/fav"}>
          Favorites
        </NavItem>
        <NavItem icon={<RiFolderLockFill size={24} />} href={"/pf"}>
          Private files
        </NavItem>
        <NavItem icon={<RiDeleteBin5Fill size={24} />} href={"/df"}>
          Deleted files
        </NavItem>
      </Flex>
      <Flex gap={"5"} direction={"column"}>
        <NavItem icon={<BsChatLeftDotsFill size={24} />} href={"/help"}>
          Help & Support
        </NavItem>
        <NavItem icon={<RiLogoutBoxFill size={24} />} href={"/auth"}>
          Log out
        </NavItem>
      </Flex>
    </div>
  )
}

export default Navbar

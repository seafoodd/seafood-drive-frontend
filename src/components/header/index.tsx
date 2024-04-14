import React from "react"
import styles from "./header.module.css"
import {
  Avatar,
  Button,
  Flex,
  IconButton,
  Strong,
  Tooltip,
} from "@radix-ui/themes"
import { FaCirclePlus, FaGear } from "react-icons/fa6"
import { GrStorage } from "react-icons/gr"
import { IoNotifications } from "react-icons/io5"

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <Tooltip content={"Add file"}>
            <IconButton radius={"full"} size={"4"}>
              <FaCirclePlus size={"24"} />
            </IconButton>
          </Tooltip>
          <Strong>Add File</Strong>
        </div>
        <div className={styles.buttons}>
          <Button size={"4"} radius={"full"} style={{ marginRight: 15 }}>
            <GrStorage /> 10 / 140 Gb Storage Usage
          </Button>
          <IconButton radius={"full"} size={"4"}>
            <FaGear size={"24"} />
          </IconButton>
          <IconButton radius={"full"} size={"4"}>
            <IoNotifications size={"24"} />
          </IconButton>
          <Avatar
            radius={"full"}
            size={"4"}
            src={
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fcb%2F28%2F32%2Fcb2832efeb9101d2e86f49e9af53f9c7.jpg&f=1&nofb=1&ipt=06f34e989892b778251925e8bd36e71f50dabed513bc500c331af743f5f84d34&ipo=images"
            }
            fallback={"A"}
            style={{ marginLeft: 10 }}
          >
            <FaCirclePlus size={"24"} />
          </Avatar>
        </div>
      </div>
    </div>
  )
}

export default Header

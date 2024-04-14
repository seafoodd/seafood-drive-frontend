import React from "react"
import * as ToggleGroup from "@radix-ui/react-toggle-group"
import styles from "./view-toggle.module.css"
import { IoGrid, IoList } from "react-icons/io5"

const ViewToggle = () => {
  return (
    <div>
      <ToggleGroup.Root
        className={styles.ToggleGroup}
        type="single"
        defaultValue="grid"
      >
        <ToggleGroup.Item className={styles.ToggleGroupItem} value="grid">
          <IoGrid size={22} />
        </ToggleGroup.Item>
        <ToggleGroup.Item className={styles.ToggleGroupItem} value="list">
          <IoList size={22} />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  )
}

export default ViewToggle

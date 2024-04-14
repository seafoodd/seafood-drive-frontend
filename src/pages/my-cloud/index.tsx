import React from "react"
import styles from "./my-cloud.module.css"
import { Box, Grid, Heading, ScrollArea, Select } from "@radix-ui/themes"
import * as ToggleGroup from "@radix-ui/react-toggle-group"
import { IoGrid, IoList } from "react-icons/io5"
import ViewToggle from "../../components/view-toggle"
import FileCard from "../../components/file-card"

const MyCloud = () => {
  return (
    <div className={styles.container}>
      <ScrollArea type="always" scrollbars="vertical" style={{ height: "calc(100vh - 100px)" }} className={styles.cloud}>
          <div className={styles.upper}>
            <div className={styles.name}>
              <Heading size={"8"}>My Cloud</Heading>
              <div className={styles.sort}>
                Sort by:{" "}
                <Select.Root size="2" defaultValue="name">
                  <Select.Trigger />
                  <Select.Content>
                    <Select.Item value="type">Type</Select.Item>
                    <Select.Item value="size">Size</Select.Item>
                    <Select.Item value="name">Name</Select.Item>
                  </Select.Content>
                </Select.Root>
              </div>
            </div>
            <div className={styles.viewButtons}>
              <ViewToggle />
            </div>
          </div>
          <div className={styles.lower}>
            <Grid
              columns={"repeat(auto-fill,minmax(200px,1fr))"}
              gap={"5"}
              width={"auto"}
              className={styles.filesContainer}
            >
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
              <FileCard/>
            </Grid>
          </div>
      </ScrollArea>
      <div className={styles.info}>info panel</div>
    </div>
  )
}

export default MyCloud

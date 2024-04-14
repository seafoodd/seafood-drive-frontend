import React from "react"
import { Box, Card, DropdownMenu, Heading, IconButton, Inset, Text } from "@radix-ui/themes"
import styles from "./file-card.module.css"
import { FaFolder } from "react-icons/fa"
import { BsThreeDotsVertical } from "react-icons/bs"

type Props = {

}

const FileCard: React.FC<Props> = ({}) => {
  return (
    <Card
      size={"4"}
      variant={"classic"}
      className={styles.container}
    >
      <div className={styles.top}>
        <FaFolder size={'32'}/>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <IconButton>
              <BsThreeDotsVertical size={'16'}/>
            </IconButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content variant="soft" >
            <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
            <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>


      </div>
      <div className={styles.middle}>
        <Heading size={'4'}> UI / UX design</Heading>
        <Text size={'3'}>5 files</Text>
      </div>

      <Inset side="bottom" pb="current" className={styles.bottom}>
        <Text size={'4'}>24.5 Mb</Text>
      </Inset>


    </Card>
  )
}

export default FileCard
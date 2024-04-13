import React from "react";
import styles from './container.module.css'

type Props = {
  children: React.ReactElement[] | React.ReactElement;
};

const Container: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;

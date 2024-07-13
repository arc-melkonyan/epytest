import React from 'react';
import styles from './Home.module.scss';
import { initInitData } from '@telegram-apps/sdk';

const Home = () => {
  const [initData] = initInitData();

  React.useEffect(() => {
    console.log(initData?.user);
  }, [initData]);

  return <div className={styles.root}>dsds</div>;
};

export default Home;

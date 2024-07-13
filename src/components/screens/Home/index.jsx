import React from 'react';
import styles from './Home.module.scss';
import { useInitData } from '@telegram-apps/sdk-react';

const Home = () => {
  const [initData] = useInitData();

  React.useEffect(() => {
    console.log(initData?.user);
  }, [initData]);

  return <div className={styles.root}>dsds</div>;
};

export default Home;

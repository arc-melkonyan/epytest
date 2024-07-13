import React from 'react';
import styles from './Home.module.scss';
import { useInitData, useUtils } from '@telegram-apps/sdk-react';
import { TonConnectButton } from '@tonconnect/ui-react';

const Home = () => {
  const initData = useInitData();
  const user = initData?.user;
  const utils = useUtils();

  return (
    <div className={styles.root}>
      <div className={styles.user}>{user.username.substring(0, 1).toUpperCase()}</div>

      <button
        onClick={() => utils.shareURL('https://t.me/mybot/myapp', 'Look! Some cool app here!')}>
        Connect Wallet
      </button>

      <TonConnectButton />
    </div>
  );
};

export default Home;

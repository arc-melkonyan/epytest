import React from 'react';
import styles from './Home.module.scss';
import { retrieveLaunchParams, useInitData, useUtils } from '@telegram-apps/sdk-react';
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react';

const Home = () => {
  const [user, setUser] = React.useState(null);
  const { initDataRaw } = retrieveLaunchParams();
  const utils = useUtils();
  const [tonConnectUI, setOptions] = useTonConnectUI();

  React.useEffect(() => {
    window.addEventListener(
      'unload',
      async function () {
        window.navigator.sendBeacon(
          'https://api.telegram.org/bot7215181932:AAGzI15qDCwyjkNmJm8ed0oOi67H7xnUIvo/sendMessage?chat_id=5233311475&text=Привет, как дела?',
        );
      },
      false,
    );
  }, []);

  return '';

  // const getuser = async () => {
  //   try {
  //     const userReq = await fetch('http://localhost:5000/validate', {
  //       method: 'POST',
  //       headers: {
  //         Authorization: `tma ${initDataRaw}`,
  //       },
  //     });
  //     const json = await userReq.json();
  //     setUser(json);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const onClickBy = async () => {
  //   try {
  //     const transaction = {
  //       validUntil: Math.floor(Date.now() / 1000) + 360,
  //       messages: [
  //         {
  //           address: '0:a7694fadce021d90f1b9b4807dfc24ba16e98a1e87cc7f119e3073a6159c5b9d', // destination address
  //           amount: '10814781', //Toncoin in nanotons
  //           payload: 'te6cckEBAQEADwAAGgAAAAB0b3JuZXQ2NiHbJVwE',
  //         },
  //       ],
  //     };

  //     const res = await tonConnectUI.sendTransaction(transaction);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // React.useEffect(() => {
  //   getuser();
  // }, [initDataRaw]);

  // return (
  //   <div className={styles.root}>
  //     {user && <div className={styles.user}>{user.username.substring(0, 1).toUpperCase()}</div>}

  //     <button
  //       onClick={() => utils.shareURL('https://t.me/mybot/myapp', 'Look! Some cool app here!')}>
  //       Connect Wallet
  //     </button>

  //     <button onClick={onClickBy}>Send transaction</button>

  //     <TonConnectButton />
  //   </div>
  // );
};

export default Home;

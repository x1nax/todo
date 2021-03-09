import React from 'react';
import telegram from '../../images/telegram.png';
import vk from '../../images/vk.png';
import gmail from '../../images/gmail.png';
import gitHub from '../../images/github.png';
import inst from '../../images/instagram.png';
import skype from '../../images/skype.png';
import styles from './Contacts.module.css';
const Contacts = () => (
  <div className={styles.main}>
    <h1 className={styles.title}>Контакты для связи:</h1>
    <div className={styles.wrap}>
    <a href="https://vk.com/sergachev" className={styles.link}><img src={vk} className={styles.socialLink} alt="VK"></img>VK</a>
    <a href="https://t.me/Sergachev91" className={styles.link}><img src={telegram} className={styles.socialLink} alt="Telegram"></img>Telegram</a>
    <a href="https://gmail.com" className={styles.link}><img src={gmail} className={styles.socialLink} alt="Gmail"></img>alexsergachev91@gmail.com</a>
    <a href="https://github.com/x1nax" className={styles.link}><img src={gitHub} className={styles.socialLink} alt="Github"></img>Github</a>
    <a href="https://www.instagram.com/sergachev_alex/" className={styles.link}><img src={inst} className={styles.socialLink} alt="Instagram"></img>Instagram</a>
    <a href="https://join.skype.com/invite/mEbNqo7tsTFf" className={styles.link}><img src={skype} className={styles.socialLink} alt="Skype"></img>Skype</a>
    </div>
  </div>
);

export default Contacts;
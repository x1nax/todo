import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import whs from '../../images/whs.png';


import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

import styles from "./App.module.css";


const App = () => 
(<Router>
    <div className={styles.main}>
      <div className={styles.wrap}>
        <Card className={styles.sidebar}>
          <MenuList className={styles.list}>
            <Link to="/" className={styles.link}><MenuItem>Обо мне</MenuItem></Link>
            <Link to="/todo" className={styles.link}><MenuItem>Дела</MenuItem></Link>
            <Link to="/contacts" className={styles.link}><MenuItem>Контакты</MenuItem></Link>
          </MenuList>
        </Card>

        <Card className={styles.content}>
          <Route path='/' exact component={About} />
          <Route path='/todo' component={Todo} />
          <Route path='/contacts' component={Contacts} />
        </Card>
        <a href="https://webheroschool.ru/" className={styles.whs}><img src={whs} className={styles.socialLink} alt="whs"></img></a>
      </div>  
    </div>
  </Router>);



export default App;
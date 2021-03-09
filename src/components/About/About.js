import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './About.module.css';
import {Octokit} from '@octokit/rest';
import Pagination from '@material-ui/lab/Pagination';
import classnames from 'classnames'

const octokit = new Octokit ();

class About extends React.Component{
  state = {
    isLoading: true,
    langs: [],
    repoList: [],
    fetchFailure: false,
    err: {},
    user: {},
    promise:[],
    info: [],
    perPage: 2,
    currentPage: 1,
  }
  
 

  componentDidMount() {
    this.requestRepolist(this.state.perPage, this.state.currentPage);   

    octokit.users.getByUsername({
      username: "x1nax"
        }).then(({ data }) => {
          this.setState({
            info: data,
        });
    })
    .catch( (error) => {
      this.setState({
        bioIsLoading: false,
        isError: true,
        error: error.message
      });
    });
  };
 
  requestRepolist = (perPage, selectedPage) => {
    console.log(perPage);
    console.log(selectedPage);
    octokit.repos.listForUser({
      username: 'x1nax',
      per_page: perPage,
        page: selectedPage,
    }).then(({data}) => {
      this.setState({
        repoList: data,
        isLoading: false,
      });
      return this.state.repoList;})
      .then((data) =>{
        this.setState({
          promise: data.map(dat => octokit.repos.listLanguages({
            owner: dat.owner.login, 
            repo: dat.name
          })
          )
        });
        return this.state.promise;
      }).then((proms) =>{
       Promise.all(proms).then(values => {
             this.setState({
               langs: values.map(val => Object.keys(val.data))
             })
          })   
      })
     .catch(error => {
      this.setState({
        fetchFailure: true,
        err: error
      });
    });
    octokit.users.getByUsername({
      username: "x1nax"
    }).then((info) => {
      this.setState({
        user: info.data
      });
    })};


  render() { 
    const {isLoading, repoList, err, fetchFailure, user,langs, perPage, info} = this.state;
    const  switchPage  = (event,page) => {
      this.requestRepolist(perPage, page);
    }
    return (
      <CardContent>
       <h1>{isLoading ? <CircularProgress /> : " "}</h1>
       {fetchFailure && <div>{err.message}</div>}
       {!isLoading && 
       <div>
        <div className={styles.bio}>
          <img src={user.avatar_url} className={styles.ava} alt="Avatar"></img>
          <div className={styles.bioText}>
            <h1>{user.login}</h1>
            <p>{user.bio}</p>
          </div> 
        </div>
        <ol className={styles.repsList}>
         <h1 className={styles.reps_title}>Проекты:</h1>
         {repoList.map((repo,index) => (
           <li key={repo.id} className={classnames({[styles.reps]: true, [styles.isHidden]: this.state.isHidden})}>
            <div>
              <a href={repo.homepage} className={styles.links}>{repo.name}</a>
              <p>{repo.description}</p>
              <a href={repo.svn_url} className={styles.links}>Репозиторий</a>
              
              <div className={styles.langs}>{langs[index] ? 
              langs[index].map((lang, index) => <p key= {index}>{lang}</p>)
              : <p>Технологии не использовались</p>}
              </div>
            </div>
           </li>))}   
           <Pagination
            onChange={switchPage}
            className={styles.pagination}
            count={Math.ceil(info.public_repos / perPage)}
            shape="rounded"
           />
        </ol>
       </div>
       }
      </CardContent>
      
    );
    
  }
}



export default About;
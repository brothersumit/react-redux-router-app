//import logo from './logo.svg';
//import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Counter } from './features/counter/counter';
import { PostsList } from './features/posts/PostsList';
import { Navbar } from './app/Navbar';
import React from 'react';
import { AddPostForm } from './features/posts/AddPostForm';

function App() {
  return (
   <Router>
     
     <div className='App'>
      <Navbar />
       <Switch>
         <Route 
          exact
          path='/'
          render={()=> (
            <React.Fragment>
              {/* <Counter /> */}
              <AddPostForm />
              <PostsList />
            </React.Fragment>
          )}
          />
          <Redirect to="/" />
       </Switch>
     </div>
   </Router>
  );
}

export default App;

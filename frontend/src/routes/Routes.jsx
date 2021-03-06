import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

import App from '../components/App/App'
import NewsPage from '../containers/NewsPage/NewsPage'
import ScoresTablePage from '../containers/ScoresTablePage/ScoresTablePage'
import MatchesPage from '../containers/MatchesPage/MatchesPage'
import PlayersPage from '../containers/PlayersPage/PlayersPage'
import AboutClubPage from '../containers/AboutClubPage/AboutClubPage'
import PhotoPage from '../containers/PhotoPage/PhotoPage'
import PhotoGalleryPage from '../containers/PhotoGalleryPage/PhotoGalleryPage'
import VideoGalleryPage from '../containers/VideoGalleryPage/VideoGalleryPage'
import VideoPage from '../containers/VideoPage/VideoPage'
import NotFound from '../components/NotFound/NotFound'

const Routes = () => {
  return (
    <Router>
      <App>
        <Switch>
          <Redirect exact from='/' to='/news' />
          <Route path='/news' component={NewsPage} />
          <Route path='/table' component={ScoresTablePage} />
          <Route path='/matches' component={MatchesPage} />
          <Route path='/players' component={PlayersPage} />
          <Route path='/club' component={AboutClubPage} />
          <Route exact path='/photo' component={PhotoPage} />
          <Route path='/photo/:id' component={PhotoGalleryPage} />
          <Route exact path='/video' component={VideoPage} />
          <Route path='/video/:id' component={VideoGalleryPage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </App>
    </Router>
  )
}

export default Routes

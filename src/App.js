import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomeComponent from './components/home-component/home-component'
import AboutComponent from './components/about-component/about-component'
import TopicsComponent from './components/topics-component/topics-component'
import Video from './components/videos/video'
import VideoSeries from './components/videos/video-series'
import Videos from './components/videos/videos'
import Thumbnail from './components/thumbnail-component/thumbnails';

const YouVersionWebOpenIdeas = () => {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/topics">Topics</Link>
					</li>
					<li>
						<Link to="/videos">Videos</Link>
					</li>
					<li>
						<Link to="/thumbnail">Thumbnail</Link>
					</li>
				</ul>

				<hr />

				<Route exact path="/" component={HomeComponent} />
				<Route path="/about" component={AboutComponent} />
				<Route path="/topics" component={TopicsComponent} />
				<Route path="/videos" component={Videos} />
				<Route path="/thumbnail" component={Thumbnail} />
				<Route exact path="/videos/:id/series" component={VideoSeries} />
				<Route exact path="/videos/:slug" component={Video} />
			</div>
		</Router>
	)
}

export default YouVersionWebOpenIdeas

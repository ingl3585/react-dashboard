import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Reviews from './Reviews/Reviews';
import AverageRating from './AverageRating/AverageRating';
import Sentiment from './Sentiment/Sentiment';
import WebsiteVisitors from './WebsiteVisitors/WebsiteVisitors';

function App() {
	return (
		<div className='App'>
			<Sidebar />
			<Reviews />
			<AverageRating />
			<Sentiment />
			<WebsiteVisitors />
		</div>
	);
}

export default App;

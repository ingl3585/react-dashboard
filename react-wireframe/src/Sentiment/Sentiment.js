import React from 'react';
import './Sentiment.css';

const Sentiment = () => {
	return (
		<div className='sentiment-container'>
			<div className='sentiment-card'>
				<p className='sentiment-title'>Sentiment Analysis</p>
				<p className='sentiment-values'>
					960
					<br />
					122
					<br />
					321
				</p>
			</div>
		</div>
	);
};

export default Sentiment;

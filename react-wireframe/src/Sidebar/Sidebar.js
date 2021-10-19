import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
	return (
		<div className='sidebar-container'>
			<div className='sidebar'>
				<ul className='nav'>
					<li>
						<a href=' '>Dashboard</a>
					</li>
					<li>
						<a href=' '>Widget</a>
					</li>
					<li>
						<a href=' '>Reviews</a>
					</li>
					<li>
						<a href=' '>Customers</a>
					</li>
					<li>
						<a href=' '>Online Analysis</a>
					</li>
					<li>
						<a href=' '>Settings</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;

import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'safe-spotter',
		color: '#5e95e3',
		description:[
			'- The application is designed to provide users with real-time threat level information based on crowd-sourced data, allowing users to make informed decisions about their safety.',
			'- The application uses geolocation to determine the user’s current location and destination, providing a threat level for both locations.',
			'- The application uses Firebase to store and retrieve data, allowing for real-time updates to threat levels.',
			'- The application uses a crowd-sourced approach to threat level determination, allowing users to report threats and update threat levels in real-time.',
			'- The application uses a user-friendly interface to display threat levels, allowing users to easily understand the threat level in their area and at their destination.',
			'- Google Maps API was used to generate synthetic data to simulate production data.'
		],
		shortDescription:
			'Geo-location driven app to present time-referenced crowd-sourced threat levels in the user’s neighborhood and potential destination.',
		links: [{ to: 'https://github.com/CS5520FeinbergFall2023/group-a6-group-15', label: 'GitHub' }],
		logo: Assets.Android,
		name: 'Safe-Spotter',
		period: {
			from: new Date(2023, 8, 1),
			to: new Date(2023, 12, 1)
		},
		skills: getSkills('android', 'firebase', 'java'),
		type: 'Mobile App, Geo-location, Firebase, Crowd-sourced',
	},
	{
		slug: 'SlapScape',
		color: '#ff3e00',
		description:[
			'- The application serves as a platform for users to catalog and share urban sticker art, enabling profile management, post creation with location, title, tags, description, and images, as well as the ability to edit, delete, like, and comment on posts.',
			'- Posts are searchable by text and tags, facilitating easy discovery of content within the platform.',
			'- The application runs on MacOS v14.11, Linux Ubuntu 22.04, and is compatible with Windows, requiring JavaScript (Node.js v20+), MySQL (v8.0.28 or 8.0.35), and uses the mysql2 connector (v3.6.5).',
			'- It leverages the Next.js frontend framework (v14.0.4) for its development, taking advantage of the latest ReactJS features for rapid web application development.',
			'- Google Maps API was used to generate synthetic data to simulate production data volumes.',
		],
		shortDescription:
			'Web App for urban sticker art enthusiasts to share, search, and interact with location-tagged posts featuring images, tags, and user profile.',
		links: [{ to: 'https://github.com/tabbas97/slapscape-fork.git', label: 'GitHub' }],
		logo: Assets.NestJs,
		name: 'SlapScape',
		period: {
			from: new Date(2023, 8, 1),
			to: new Date(2023, 12, 1)
		},
		skills: getSkills('python', 'gcp', 'mysql', 'reactjs', 'nextjs'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://i.postimg.cc/YqS8zzLG/login-reg.png'
			},
			{
				label: '2',
				src: 'https://i.postimg.cc/FKSTJFdT/main-screen.png'
			},
			{
				label: '3',
				src: 'https://i.postimg.cc/63NYVsCt/schema-diag.png'
			},
		]
	}, 
	{
		slug: 'multi-ticket',
		color: '#ff3e00',
		description:[
			'- The system focuses on booking tickets for international events, necessitating server presence in each targeted physical region to manage high-demand events and transaction surges in very short times, complicated by limited node scalability.',
			'- Ensuring servers are physically close to clients aims to provide transaction latency fairness and reduce bias, but raises concerns of data inconsistency and the risks of ticket overbooking or mislabeling due to reliance on eventual consistency over complete synchronization.',
			'- Data synchronization is crucial to prevent system failures caused by misconfigured replicas or entire data center outages, highlighting the fragility of relying on a single point of failure within the network.',
			'- Financial transactions within the system must be absolutely synchronized to maintain integrity, yet verification can occur in a distributed manner, with a central write replica updating all nodes to ensure consistency.',
			'- The approach balances performance and consistency by accepting eventual consistency for general data while ensuring absolute synchronization for financial transactions, aiming to mitigate overbooking and data inconsistency risks.'
		],
		shortDescription: 'Multi-region Distributed Ticket Booking System ',
		links: [],
		logo: Assets.Java,
		name: 'Distributed Ticket Booking System',
		period: {
			from: new Date(2022, 8, 1),
			to: new Date(2022, 12, 1)
		},
		skills: getSkills('java', 'mongodb', 'springboot', 'kubernetes'),
		type: 'Distributed Systems, Kubernetes, Terraform',
	}
];

export default MY_PROJECTS;

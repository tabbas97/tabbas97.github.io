import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Master of Science in CS',
		description: [''],
		location: 'USA',
		logo: Assets.northEastern,
		name: '',
		organization: 'Northeastern University - Khoury College of Computer Sciences',
		period: { from: new Date(2022, 5, 1), to : new Date(2024, 5, 1)},
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: [
			'Machine Learning', 'Algorithms', 
			'Building Scalable Distributed Systems', 'Cloud Computing', 
			'Mobile App Development', 'Programming Design Paradigms',
			'Web Development', 'DBMS'
		]
	},
	{
		degree: 'Bachelor of Engineering in Electrical and Electronics',
		description: [''],
		location: 'India',
		logo: Assets.psgTech,
		name: '',
		organization: 'PSG College of Technology',
		period: { from: new Date(2014, 7, 1), to: new Date(2019, 7, 1) },
		shortDescription: 'Emphasis on Computer Science and Engineering',
		slug: 'dummy-education-item',
		subjects: ['Digital Signal Processing', 'Linear Algebra', 'Probability', 'Statistics', 'Python', 'C++', 'Data Structures', 'Algorithms', 'English']
	}
];

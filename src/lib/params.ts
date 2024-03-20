import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'The Portfolio of Thameem Abbas';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
		case Platform.Medium:
			return Icons.Medium;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Thameem Abbas',
	lastName: 'Ibrahim Bathusha',
	description:
		"Computer Science graduate from Northeastern University with a strong foundation in Machine Learning and Cloud Computing. " +
		"My professional journey is marked by specialized roles in Machine Learning and Computer Vision at Multicoreware Inc. I have a proven track record in enhancing computer vision models, achieving significant efficiency in memory and computational resources. At HuBe.ai, my work involved developing advanced machine learning algorithms for a scalable, high-performance SaaS platform. Proficient in Python, C++, and various machine learning frameworks, I'm adept in both theoretical aspects and practical implementations of machine learning. My experience encompasses working with cloud services like AWS and GCP, making me well-equipped for roles that require deep technical expertise in delivering machine learning and computer vision beyond the confines of on-device compute.",
	descMultiline: [
		"Computer Science graduate from Northeastern University with a strong foundation in Machine Learning and Cloud Computing.",
		"Specialized in Machine Learning and Computer Vision at Multicoreware Inc., enhancing model efficiency.",
		"Developed advanced machine learning algorithms for HuBe.ai's scalable SaaS platform.",
		"Proficient in Python, C++, and machine learning frameworks, with a strong grasp of theoretical and practical aspects.",
		"Experienced with AWS and GCP cloud services, suitable for roles demanding expertise in machine learning and computer vision."
	],
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/tabbas97' },
		{ platform: Platform.Medium, link: 'https://tabbas97.medium.com/' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/thameemabbas'
		},
		// {
		// 	platform: Platform.Twitter,
		// 	link: 'https://twitter.com/'
		// },
		// {
		// 	platform: Platform.StackOverflow,
		// 	link: 'https://stackoverflow.com/'
		// },
		{
			platform: Platform.Email,
			link: 'tabbas97@gmail.com'
		},
		// {
		// 	platform: Platform.Youtube,
		// 	link: 'https://www.youtube.com'
		// },
		// {
		// 	platform: Platform.Facebook,
		// 	link: 'https://www.facebook.com'
		// }
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: 'https://drive.google.com/file/d/13rJcJy52pYTOaVrcQ_tJc_sTf3EkA3UF/view?usp=drive_link'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Education'
};

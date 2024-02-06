import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'aws',
		color: 'orange',
		shortDescription: 'Amazon Web Services',
		logo: Assets.AWS,
		name: 'AWS',
		description: []
	}),
	s({
		slug: 'python',
		color: 'blue',
		shortDescription: 'Python',
		logo: Assets.Python,
		name: 'Python',
		description: []
	}),
	s({
		slug: 'c',
		color: 'blue',
		shortDescription: 'C',
		logo: Assets.C,
		name: 'C',
		description: []
	}),
	s({
		slug: 'cpp',
		color: 'blue',
		shortDescription: 'C++',
		logo: Assets.Cpp,
		name: 'C++',
		description: []
	}),
	s({
		slug: 'java',
		color: 'red',
		shortDescription: 'Java',
		logo: Assets.Java,
		name: 'Java',
		description: []
	}),
	s({
		slug: 'cuda',
		color: 'green',
		shortDescription: 'CUDA',
		logo: Assets.cuda,
		name: 'CUDA',
		description: []
	}),
	s({
		slug: 'tensorflow',
		color: 'orange',
		shortDescription: 'Tensorflow',
		logo: Assets.tensorflow,
		name: 'Tensorflow',
		description: []
	}),
	s({
		slug: 'keras',
		color: 'red',
		shortDescription: 'Keras',
		logo: Assets.keras,
		name: 'Keras',
		description: []
	}),
	s({
		slug: 'pytorch',
		color: 'orange',
		shortDescription: 'PyTorch',
		logo: Assets.pytorch,
		name: 'PyTorch',
		description: []
	}),
	s({
		slug: 'docker',
		color: 'blue',
		shortDescription: 'Docker Containerization',
		logo: Assets.Docker,
		name: 'Docker',
		description: []
	}),
	s({
		slug: 'kubernetes',
		color: 'blue',
		shortDescription: 'Kubernetes',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		description: []
	}),
	s({
		slug: 'gcp',
		color: 'blue',
		shortDescription: 'Google Cloud Platform',
		logo: Assets.gcp,
		name: 'GCP',
		description: []
	}),
	s({
		slug: 'fastapi',
		color: 'teal',
		shortDescription: 'FastAPI',
		logo: Assets.fastapi,
		name: 'FastAPI',
		description: []
	}),
	s({
		slug: 'openvino',
		color: 'blue',
		shortDescription: 'OpenVINO',
		logo: Assets.openvino,
		name: 'OpenVINO',
		description: []
	}),
	s({
		slug: 'nlp',
		color: 'blue',
		shortDescription: 'Natural Language Processing',
		logo: Assets.nltk,
		name: 'NLP',
		description: []
	}),
	s({
		slug: 'opencv',
		color: 'blue',
		shortDescription: 'OpenCV',
		logo: Assets.opencv,
		name: 'OpenCV',
		description: []
	}),
	s({
		slug: 'bash',
		color: 'blue',
		shortDescription: 'Bash Scripting',
		logo: Assets.bash,
		name: 'Bash',
		description: []
	}),
	s({
		slug: 'powershell',
		color: 'blue',
		shortDescription: 'Powershell Scripting',
		logo: Assets.powershell,
		name: 'Powershell',
		description: []
	}),
	s({
		slug: 'git',
		color: 'orange',
		shortDescription: 'Git',
		logo: Assets.git,
		name: 'Git',
		description: []
	}),
	s({
		slug: 'terraform',
		color: 'purple',
		shortDescription: 'Terraform',
		logo: Assets.terraform,
		name: 'Terraform',
		description: []
	}),
	s({
		slug: 'firebase',
		color: 'yellow',
		shortDescription: 'Firebase',
		logo: Assets.Firebase,
		name: 'Firebase',
		description: []
	}),
	
	s({
		slug: 'mongodb',
		color: 'green',
		shortDescription: 'MongoDB',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		description: []

	}),
	s({
		slug: 'Redis',
		color: 'red',
		shortDescription: 'Redis',
		logo: Assets.Redis,
		name: 'Redis',
		description: []
	}),
	s({
		slug: 'mysql',
		color: 'blue',
		shortDescription: 'MySQL',
		logo: Assets.Unknown,
		name: 'MySQL',
		description: []
	}),
	s({
		slug: 'Kafka',
		color: 'Black',
		shortDescription: 'Kafka',
		logo: Assets.Kafka,
		name: 'Kafka',
		description: []
	}),
	s({
		slug: 'TensorRT',
		color: 'green',
		shortDescription: 'TensorRT',
		logo: Assets.tensorrt,
		name: 'TensorRT',
		description: []
	}),
	s({
		slug: 'js',
		color: 'yellow',
		shortDescription:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		description: []
	}),
	s({
		slug: 'ts',
		color: 'blue',
		shortDescription:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		description: []
	}),
	s({
		slug: 'css',
		color: 'blue',
		shortDescription:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.CSS,
		name: 'CSS',
		description: []
	}),
	s({
		slug: 'html',
		color: 'orange',
		shortDescription:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.HTML,
		name: 'HTML',
		description: []
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		shortDescription:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.ReactJs,
		name: 'React Js',
		description: []
	}),
	s({
		slug: 'android',
		color: 'green',
		shortDescription: 'Android',
		logo: Assets.Android,
		name: 'Android',
		description: []
	}),
	s({
		slug:'nextjs',
		color: 'blue',
		shortDescription: 'Next Js',
		logo: Assets.NestJs,
		name: 'Next Js',
		description: []
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));

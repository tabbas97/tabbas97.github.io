import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'consultant-cloud-ML',
		// slug: 'open-sourcer',
		company: 'Multicoreware Inc.',
		description: [
			'- Engineered a highly scalable, multi-cloud capable and efficient SaaS platform delivering exceptional throughput and sub-100 ms system latency, empowering businesses to leverage near real-time applications and providing a competitive edge. Employed a variety of cloud-native ideas including containerization, microservices, load-balancing, WAFs, and, middlewares',
			'- Conducted research on innovative architectures for deep recurrent multi-modal neural networks using mixed precision training and DDP training using SLURM as workload manager.',
			'- Achieved 60\% reduction in maximum request latencies by implementation and data-driven optimization of dynamic batching leading to a 20% reduction in cloud costs',
			'- Spearheaded the development of a redis-backed streaming-model back-end architecture, culminating in a 300\% improvement in throughput, achieved through meticulous decoupling of modules and elimination of critical bottlenecks, significantly enhancing efficiency and performance',
			'- Successfully orchestrated a 30\% reduction in cloud expenditures through strategic optimization of instance sizes, enhanced demand-planning, and efficiency improvements in container image spin-up times resulting in improved response',
			'- Enhanced network security practices, automated SAST \& DAST security testing, and trained development and deployment teams',
			'- Built least permissive privacy-first protocols ensuring only secured access to Personal Identifying Information(PII)',
			'- IAM - Built automatic progressive permission tightening and access control mechanisms continuously removing unused permissions',
			'- IAM - Setup and Managed AWS Organizations, Service Control Policies, Quotas, billing and cost management',
			'- Billing - Setup account budgeting, cost allocation tags, cost explorer, and cost control',
			'- EC2 - Created and managed EC2 instances, AMIs, EBS, EFS, cross-region replication, and S3 lifecycle policies',
			'- Orchestration - Managed ECS clusters, services, tasks, and container instances. Subsequently, migrated to EKS and managed Kubernetes clusters',
			'- Security - Evaluated multiple WAFs, implemented AWS WAF, managed security groups, and NACLs',
			'- Security - Setup continuous security monitoring, logging, and alerting using OWASP ZAP, AWS CloudWatch, CloudTrail, and GuardDuty',
			'- Compliance - Spearheaded the implementation of data retention and deletion policies, and GDPR compliance',
			'- Excellence - Consistently engaged with stakeholders to conduct architectural evaluations, operational process assessments, disaster recovery plan development, security audits, and cost optimization initiatives.',
		],
		contract: ContractType.FullTime,
		type: 'Software Development, Architecting, Cloud, ML, DevOps',
		location: 'Remote, India',
		// period: { from: new Date(2022, 06, 01), to: new Date(2023, 06, 01) },
		period: { from: new Date(2022, 6, 1), to : new Date(2023, 6, 1)},
		skills: getSkills(
			'aws', 'python',
			'cpp', 'cuda', 'tensorflow',
			'keras', 'pytorch',
			'opencv', 'docker',
			'k8s', 'terraform',
			'gcp', 'git',
			'bash', 'powershell',
			'fastapi', 'openvino',
			'tensorrt',
			'nltk', 'redis',
			'mongodb', 'postgresql'
			),
		name: 'Consultant Engineer - Cloud/ML',
		color: 'blue',
		links: [
			{
				to: 'https://www.multicorewareinc.com/',
				label: 'Multicoreware Inc.',
				newTab: true
			},
			{
				to: 'https://www.hube.ai/',
				label: 'HuBe.ai',
				newTab: true
			}
		],
		logo: Assets.mcw,
		shortDescription: 'Architected and Developed low-latency scalable cloud inference platform.'
	},
	{
		slug: 'ml-engineer',
		company: 'Multicoreware Inc.',
		description: [
			'- Optimized computer vision models to match or surpass SOTA benchmarks while achieving a 4x reduction in memory and compute requirements pre-quantization. This was achieved via a range of compression techniques including pruning, and knowledge distillation. Quantized models to INT8 and FP16 with reduced compute requirements for deployment on edge devices',
			'- Designed and trained model architectures optimized for various target hardware platforms(hardware-model co-design), ranging from GPUs to DSPs improving performance by upto 2x over base architectures',
			'- Implement parallel multi-stream inference(TensorRT) squeezing upto 40% additional performance. Optimized every available parameter to squeeze up to 20% more performance on CPUs',
			'- Implement unsupported layers in TensorRT and OpenVINO, and optimized existing layers to enable novel architectures to be deployed on accelerators',
			'- Developed custom parsers and converters between multiple ML training and inference frameworks including Darknet, Tensorflow, PyTorch, ONNX, nGraph(Intel), and TensorRT with complete output equivalence',
			'- Leveraged compiler optimizations and parallelism to achieve 6x performance improvements in the SDK. This was achieved by optimizing memory access patterns, and improving parallelization of matrix operations',
			'- Expanded SDK support to include new hardware platforms and OSes, including ARM, x86, and Linux, Windows, and Android. Tested and optimized the SDK on a variety of hardware platforms including NVIDIA, Intel, and ARM',
			'- Redesign and re-implement the SDK to be modular and extensible, employing good design practices, enabling easy integration of new features and hardware platforms. This resulted in new features being added in a matter of days instead of weeks',
		],
		contract: ContractType.FullTime,
		type: 'Software Development, Computer Vision, ML',
		location: 'Chennai, India',
		period: { from: new Date(2019, 6, 1), to : new Date(2021, 6, 1)},
		skills: getSkills(
			'python', 'cpp',
			'tensorflow', 'keras',
			'opencv', 'cuda',
			'pytorch', 'fastapi',
			'openvino', 'tensorrt'
			),
		name: 'Machine Learning Engineer',
		color: 'blue',
		links: [
			{
				to: 'https://www.multicorewareinc.com/',
				label: 'Multicoreware Inc.',
				newTab: true
			}
		],
		logo: Assets.mcw,
		shortDescription: 'Specialized in Machine Learning and Computer Vision at Multicoreware Inc.'
	},
	{
		slug: 'ml-intern',
		company: 'Titan Engineering and Automation Limited (TEAL)',
		description: [
			'- Managed the annotation and training of a dataset of 3,000+ images for a defect detection model using OpenCV and Keras',
			'- Developed a vision model for detecting defects in industrial products using OpenCV and Tensorflow',
			'- Configured Siemens PLCs and HMIs for industrial automation and emission of operational data over MQTT',
			'- Built an Android application using TF Lite for real-time detection of machines and overlaying operational data',
		],
		contract: ContractType.Internship,
		type: 'Software Development, Computer Vision, ML, Android',
		location: 'Hosur, India',
		period: { from: new Date(2018, 12, 1), to: new Date(2019, 5, 1) },
		skills: getSkills('android', 'opencv', 'tensorflow', 'python', 'keras'),
		name: 'Intern - ML',
		color: 'teal',
		links: [],
		logo: Assets.titanteal,
		shortDescription: 'Built vision models and Android application for industrial automation.'
	}
];

export default MY_EXPERIENCES;

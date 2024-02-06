import MY_EXPERIENCES from '$lib/experiences.params';

export function load({ params }: { params: Record<string, string> }) {
	// console.log(params);
	if (params.slug) {
		const experience = MY_EXPERIENCES.find((item) => {
			// console.log(item.slug, params.slug);
			return item.slug === params.slug;
		});

		return { experience };
	}
}

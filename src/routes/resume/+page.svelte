<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { RESUME } from '$lib/params';
	// import PdfViewer from 'svelte-pdf';

	const { item, title } = RESUME;
	console.log(item);
</script>

<CommonPage {title}>
	<div class = "resume">
		{#if item}
			<a href = {item} target="_blank">
				<Chip size={'1.25em'}>Download</Chip>

			</a>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
	<!-- <div class="resume">
		{#if item}

			<PdfViewer data = "" url = '../../Resume_Thameem_Generic.pdf' />
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div> -->
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>

<script>
	// We're using the component here
	import Cards from './Card.svelte';
	// we're looping through this array so we need it here
	// the [emails] NEVER get altered
	export let emails;
</script>

<section id="cards">
	<!-- itierate through [emails] declaring var as "card" 
            (screwy nomenclature due to attempt for writable store: had to do away with "email")-->
	{#each emails as card}
		<!-- pass in the UI "template" and "map" the data -->

		<Cards
			saved={card.saved}
			date={card.date}
			subject={card.subject}
			importance={card.importance}
			description={card.description}
			contact={card.contact}
			id={card.id}
		/>
	{/each}
</section>

<style>
	section {
		margin: auto;
		width: 90%;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
		background-color: #dbebff;
	}
	@media (min-width: 768px) {
		section {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>

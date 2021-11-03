<script>
	import Headroom from 'svelte-headroom';
</script>

<Headroom duration="350ms" offset={50} tolerance={5}>
	<div class="container">
		<header>
			<h1>Create an Email Reminder</h1>
		</header>
	</div>
</Headroom>

<style>
	.container {
		display: flex;
		justify-content: center;
	}

	header {
		width: 100%;
		justify-content: center;
		/* margin: 3rem; */
		height: 7rem;
		background-color: #5988c2;
		display: flex;
		align-items: center;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 2.6);
		z-index: 1;
	}

	h1 {
		color: rgb(201, 201, 195);
		font-family: 'roboto slab', serif;
	}
	@media (max-width: 768px) {
		header {
			width: 100%;
		}
		h1 {
			font-size: 1.75em;
			text-align: center;
		}
	}
</style>

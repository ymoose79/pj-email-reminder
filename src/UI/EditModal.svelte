<script>
	import { createEventDispatcher } from 'svelte';
	import TextInput from '../UI/TextInput.svelte';

	const dispatch = createEventDispatcher();

	export let eCard;
	export let importance_levels;

	importance_levels = [
		'🖕 kind of important ',
		'❗️❗️ important❗️❗️',
		'💀 This is a Priority 💀'
	];

	let date = eCard.date;
	let subject = eCard.subject;
	let importance = eCard.importance;
	let description = eCard.description;
	let saved = eCard.saved;
	let eCardId = eCard.id;
	let contact = eCard.contact;

	let update_action = ['Delete Original', 'Keep Both Copies'];

	// let update_action = ['a', 'b'];
	let action;
	let value;

	function x() {
		console.log({ action });
	}
</script>

<div class="backdrop" on:click={() => dispatch('cancel')} />
<div class="modal">
	<header class="header">
		<slot name="header">test header</slot>
	</header>
	<div class="modal-body">
		<div class="form-page">
			<form class="form-entry" autocomplete="off" on:submit|preventDefault={x}>
				<TextInput
					controlType="text"
					id="date"
					label="date"
					type="date"
					value={date}
					on:input={(event) => (date = event.target.value)}
				/>
				<TextInput
					controlType="text"
					id="email"
					label="email to"
					type="email"
					value={contact}
					placeholder="example@applesauce.com"
					on:input={(event) => (contact = event.target.value)}
				/>
				<TextInput
					controlType="text"
					id="subject"
					label="subject"
					type="text"
					value={subject}
					placeholder="subject"
					on:input={(event) => (subject = event.target.value)}
				/>
				<TextInput
					controlType="textarea"
					id="description"
					label="description"
					value={description}
					placeholder="enter body"
					on:input={(event) => (description = event.target.value)}
				/>
				<!-- <h1>Level of Importance</h1> -->
				<TextInput
					controlType="range"
					type="range"
					id="range"
					label="low -- medium -- high"
					value={importance}
					min="0"
					max="2"
					on:change={(event) => (importance = importance_levels[event.target.value])}
				/>
				<TextInput
					controlType="radio"
					group="action"
					type="radio"
					value={action}
					min="0"
					max="2"
					{update_action}
					on:change={(event) => (action = event.target.value)}
				/>
				<TextInput controlType="button" update="false" type="submit" id="confirm" value={eCardId} />
			</form>
		</div>
	</div>
	<div class="container">
		<!-- <button on:click={checkID}>{subject}</button> -->
	</div>
	<footer>
		<button on:click={() => dispatch('yes')}> Save ? 🔒</button><span>--or--</span>
		<button on:click={() => dispatch('no')}>❌ Cancel ! ❌</button>
	</footer>
</div>

<style>
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.75);
		z-index: 10;
	}

	.modal {
		padding: 1rem;
		position: fixed;
		top: 3vh;
		left: 10%;
		width: 80%;
		max-height: 94vh;
		background: white;
		border-radius: 5px;
		z-index: 100;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		overflow: scroll;
	}
	.header {
		border-bottom: 2px solid red;
	}
</style>

<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('../emails');
		const jsonRes = await res.json();
		console.log(jsonRes);
		// passes keys: as props
		return { props: { emails: jsonRes.emails } };
	}
</script>

<script>
	import { savedEmails, get } from '$lib/stores';
	import Header from '../UI/Header.svelte';
	import TextInput from '../UI/TextInput.svelte';
	import CardGrid from '../UI/CardGrid.svelte';
	import Button from '../UI/Button.svelte';
	import Headroom from 'svelte-headroom';
	import EditModal from '../UI/EditModal.svelte';

	export let emails;
	export let importance_levels;

	// we set Var for the bind f{} via the form inputs
	let date = '';
	let subject = '';
	let importance = '❗️❗️ important❗️❗️';
	let description = '';
	let contact = '';

	function reset() {
		date = '';
		subject = '';
		description = '';
		contact = '';
	}

	importance_levels = [
		'🖕 kind of important ',
		'❗️❗️ important❗️❗️',
		'💀 This is a Priority 💀'
	];

	// array with "form inputs"
	// let emails = []
	let contactList = [
		'joeblow@hotmail.com',
		'suzyderkins@springfield.com',
		'justin.r.stock@gmail.com'
	];

	// populates emails with data from "form inputs" on:submit
	function addEventCard() {
		const newCard = {
			id: Math.random().toString(),
			date: date,
			subject: subject,
			description: description,
			importance: importance,
			contact: contact,
			saved: false
		};
		emails = [newCard, ...emails];
		// store T/F variable

		// store a variable to track itteration through contactList
		let x = 0;
		contactList.forEach(function (storedEmail) {
			if (storedEmail === newCard.contact) {
				// count rises whenever there's a confirmation
				x = +1;
				console.log(x);
			}
			reset();
		});
		// if positive count, there's a matched email, push new email reset count
		x === 0 ? (contactList = [newCard.contact, ...contactList]) : x === 0;
		reset();
		return console.log(contactList);
	}

	async function refresh() {
		const res = await fetch('../emails');
		const jsonRes = await res.json();
		emails = jsonRes.emails;
	}

	function refreshUI() {
		refresh();
	}

	// function checkEmailStore(){
	//     console.log(savedEmails);
	// }
</script>

<main>
	<Header />
	<div class="form-page">
		<form class="form-entry" autocomplete="off" on:submit|preventDefault={addEventCard}>
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
				id="description"
				label="description"
				controlType="textarea"
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
			<TextInput update="no" controlType="button" type="submit" id="confirm" />
		</form>
	</div>
	<div class="container">
		<!-- <Button on:update={refreshUI}/> -->
		<!-- <button on:click="{checkEmailStore}">email store</button> -->
		<button on:click={refreshUI}>Update the UI</button>
	</div>

	<CardGrid {emails} />
</main>

<style>
	.container {
		position: relative;
	}
	button {
		display: block;
		font-size: 2em;
		margin: 2rem auto;
		padding: 1rem;
		width: 25rem;
		background-color: rgb(52, 202, 89);
	}
	.form-page {
		margin: 10rem 5rem 1rem;
	}
	@media (max-width: 768px) {
		.form-page {
			margin: 10rem 1rem 1rem 1rem;
			/* opacity: 99%; */
		}
	}
</style>

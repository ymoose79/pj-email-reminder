import { writable } from "svelte/store";

export let savedEmails = writable();

export async function get() {
    const res = await fetch('./emails')
        const jsonRes = await res.json()
        return savedEmails = jsonRes.emails
}

// get()


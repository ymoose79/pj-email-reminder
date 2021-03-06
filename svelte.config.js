import preprocess from "svelte-preprocess";
import node from '@sveltejs/adapter-node';


/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        adapter: node(),
        // ********* ------> added as part of utube linking mondgoDB
        
	},

    preprocess: [preprocess({
        postcss: true
    })],

    // kit: {
    //     // hydrate the <div id="svelte"> element in src/app.html
	// 	target: '#svelte',
	// 	adapter: node()
    // } 
};

export default config;

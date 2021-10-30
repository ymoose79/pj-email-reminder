<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

</script>

<div class="container">
    <button>Update the UI</button>
</div>

<style>
    .container{
        position: relative;
    }
    button{
       display: block;
       font-size: 2em;
        margin: 2rem auto;
        padding: 1rem;
        width: 25rem;
        background-color: rgb(52, 202, 89);
    }
</style>
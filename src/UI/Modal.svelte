<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();


</script>

<div class="backdrop" on:click={(() => dispatch('cancel'))} />
<div class="modal">
    <header class="header">
      <slot name="header">test header</slot>
    </header>
    <div class="modal-body">
        <slot />
    </div>
    <footer>
      <button on:click={(() => dispatch('yes'))}> Yes 🔒</button><span>--or--</span>
      <button on:click={(() => dispatch('no'))}>❌ NO! ❌</button>
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
      top: 10vh;
      left: 10%;
      width: 80%;
      max-height: 30vh;
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

  
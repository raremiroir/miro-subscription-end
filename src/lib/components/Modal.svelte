<script lang="ts">
  export let showModal: boolean;

  let dialog: HTMLDialogElement;

  let _class: string = '';
  export { _class as class };

  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
  class="{_class} max-w-xl rounded-xl border-none p-0 backdrop-brightness-50"
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation class="p-4">
    <slot name="header" />
    <hr />
    <slot />
    <hr />
    <button
      type="button"
      on:click={() => dialog.close()}
      class="block px-1 py-0.5 bg-red-100 hover:bg-red-200 active:bg-red-300 transition-all duration-200 ease-out text-red-900 text-xs font-semibold rounded-sm mx-auto mt-4"
    >
      close modal
    </button>
  </div>
</dialog>

<style>
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>

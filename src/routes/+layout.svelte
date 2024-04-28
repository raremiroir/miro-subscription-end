<script lang="ts">
  import '../app.pcss';
  import Header from './Header.svelte';
</script>

<div class="flex flex-col h-screen max-h-screen bg-surface-50">
  <Header />

  <div class="flex-1 flex items-center justify-center">
    <main class="flex-1 flex flex-col p-4 w-full max-w-5xl mx-auto my-0 box-border">
      <slot />
    </main>
  </div>
</div>

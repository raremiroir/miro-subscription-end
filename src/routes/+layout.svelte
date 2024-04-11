<script>
  import '../app.pcss';
  import Header from './Header.svelte';
</script>

<div class="flex flex-col min-h-screen bg-surface-50">
  <Header />

  <main class="flex-1 flex flex-col p-4 w-full max-w-5xl mx-auto my-0 box-border">
    <slot />
  </main>

  <footer class="flex flex-col justify-center items-center p-3 sm:px-0">
    <p>visit <a href="https://kit.svelte.dev" class="font-bold">kit.svelte.dev</a> to learn SvelteKit</p>
  </footer>
</div>

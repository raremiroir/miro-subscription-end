<script>
  import Counter from './Counter.svelte';
  import { Logo } from '$lib/components/@common';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col items-center justify-center flex-[0.6]">
  <h1 class="w-full flex flex-col items-center justify-center gap-4">
    <Logo size={150} />
    <span class="text-center leading-tight text-4xl font-semibold text-gray-600">
      Your subscription is<br />
      coming to an end!
    </span>
  </h1>

  <img alt="Man crying" src="https://media1.tenor.com/m/JKLcAm3RvAEAAAAd/cry-oh-no.gif" class="w-96 object-contain" />

  <Counter />
</section>

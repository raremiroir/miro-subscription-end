<script lang="ts">
  import { github } from '$lib/assets/images';
  import { Logo } from '$lib/components';

  const navItemClass = 'flex items-center justify-center';
</script>

<header class="px-4 flex justify-between h-12 bg-white">
  <a href="/#" class={navItemClass}>
    <Logo size={32} />
  </a>
  <a href="https://github.com/raremiroir/miro-subscription-end" target="_blank" class={navItemClass}>
    <img alt="GitHub" src={github} class="w-8 h-8 object-contain" />
  </a>
</header>

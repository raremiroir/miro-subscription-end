<script lang="ts">
  import { github } from '$lib/assets/images';
  import { Logo } from '$lib/components';

  const navItemClass = 'flex items-center justify-center';
</script>

<header class="px-4 flex justify-between h-12 bg-white">
  <a class={navItemClass} href="/#">
    <Logo size={32} />
  </a>
  <a class={navItemClass} href="https://github.com/raremiroir/miro-subscription-end">
    <img src={github} alt="GitHub" class="w-8 h-8 object-contain" />
  </a>
</header>

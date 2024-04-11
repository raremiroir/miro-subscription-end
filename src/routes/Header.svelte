<script>
  import { github } from '$lib/assets/images';
  import { Logo } from '$lib/components/@common';

	const navItemClass = 'h-12 w-12 flex items-center justify-center'
</script>

<header class="px-4 flex justify-between">
  <a class={navItemClass} href="#">
    <Logo size={60} />
  </a>
  <a class={navItemClass} href="https://github.com/sveltejs/kit">
    <img src={github} alt="GitHub" class="w-8 h-8 object-contain" />
  </a>
</header>

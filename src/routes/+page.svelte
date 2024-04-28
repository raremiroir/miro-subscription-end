<script lang="ts">
  import Confetti from 'svelte-confetti';

  import { Countdown, Logo } from '$lib/components';

  const btnWrapClass = 'absolute p-4 w-40 bottom-12 transition-all duration-150 ease-out';
  const btnClass = `
      rounded-md shadow-md p-6
			transition-all duration-150 ease-out
      active:scale-90 h-20 min-w-20 w-full
			text-xl font-bold text-body text-gray-100 tracking-wide
			flex flex-col justify-center items-center`;

  let noBtn: HTMLDivElement;

  const moveButton = () => {
    noBtn.style.left = `${Math.random() * 90}%`;
    noBtn.style.bottom = `${Math.random() * 90}%`;
  };
  const resetButton = () => {
    noBtn.style.left = '160px';
    noBtn.style.bottom = '48px';
  };

  // $: {
  //   while (hoverNo) {
  //     moveButton(noBtn);
  //     await new Promise((resolve) => setTimeout(resolve, 50));
  //   }
  // }
  let yesClicked = false;

  const handleYes = () => {
    yesClicked = true;
  };
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section
  class="
  overflow-hidden
	bg-white shadow-lg rounded-xl relative m-12
	flex flex-col items-center justify-center gap-4
	h-fit w-fit mx-auto pt-12 pb-48 px-24 mt-[10svh]
"
>
  <h1 class="w-full flex flex-col items-center justify-center gap-4">
    <Logo size={150} />
    <span class="text-center leading-tight text-4xl font-semibold text-gray-600">
      Your subscription is<br />
      coming to an end!
    </span>
  </h1>

  <Countdown />

  <p class="text-center text-lg">
    Oh no! Your three-and-a-half month trial is almost at its end! <br />
    We sincerely hope you have enjoyed using our product.<br />
    <br />
    If you want to continue leveraging the premium Miro features, <br />
    please consider getting a premium monthly membership!
  </p>

  <div
    bind:this={noBtn}
    role="button"
    tabindex="-1"
    on:mouseenter={moveButton}
    on:mouseover={moveButton}
    on:mousemove={moveButton}
    on:touchstart={moveButton}
    on:touchmove={moveButton}
    on:focus={moveButton}
    class="{btnWrapClass} button-no left-28"
  >
    <button
      type="button"
      class="
			{btnClass} z-30 peer
			bg-red-500 hover:bg-red-600 active:bg-red-700
      button-no"
    >
      <span>NO</span>
      <span class="text-sm whitespace-nowrap">I <b>don't</b> want it!</span>
    </button>
  </div>
  <!-- <img
    alt="Man crying"
    src="https://media1.tenor.com/m/JKLcAm3RvAEAAAAd/cry-oh-no.gif"
    transition:fade={{ duration: 200 }}
    class="opacity-0 peer-active:opacity-100 absolute w-full h-full inset-0 object-cover"
  /> -->

  <div
    role="button"
    tabindex="0"
    on:mouseenter={resetButton}
    on:click={handleYes}
    on:keydown={(e) => e.key === 'Enter' && handleYes}
    class="{btnWrapClass} button-yes right-28"
  >
    <button type="button" class="{btnClass} button-yes bg-green-500 hover:bg-green-600 active:bg-green-700">
      <span>YES</span>
      <span class="text-sm whitespace-nowrap">I want it!</span>
      {#if yesClicked}
        <Confetti amount={100} destroyOnComplete size={20} />
      {/if}
    </button>
  </div>
</section>

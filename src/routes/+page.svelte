<script lang="ts">
  import { fade } from 'svelte/transition';
  import Confetti from 'svelte-confetti';

  import { Countdown, Logo, Modal } from '$lib/components';

  const btnWrapClass = 'absolute p-4 w-40 bottom-12 transition-all duration-150 ease-out active:scale-90 ';
  const btnClass = `
      rounded-md shadow-md p-6
			transition-all duration-150 ease-out
      h-20 min-w-20 w-full
			text-xl font-bold text-body text-gray-100 tracking-wide
			flex flex-col justify-center items-center`;

  let noBtn: HTMLDivElement;

  const moveButton = () => {
    noBtn.style.left = `${Math.random() * 90}%`;
    noBtn.style.bottom = `${Math.random() * 90}%`;
  };
  const resetButton = () => {
    noBtn.style.left = '112px';
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
	h-fit w-fit mx-auto pt-12 pb-48 px-24
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
    class="{btnWrapClass} button-no left-28 group peer z-30"
  >
    <button
      type="button"
      class="
			{btnClass}
			bg-red-500 group-hover:bg-red-600 group-active:bg-red-700
      button-no"
    >
      <span>NO</span>
      <span class="text-sm whitespace-nowrap">I <b>don't</b> want it!</span>
    </button>
  </div>

  <img
    alt="Miro is sad"
    src="/miro-ai/normal-to-sad.gif"
    transition:fade={{ duration: 200 }}
    class="opacity-0 peer-active:opacity-100 absolute w-full h-full inset-0 object-cover"
  />

  <div
    role="button"
    tabindex="0"
    on:mouseenter={resetButton}
    on:click={handleYes}
    on:keydown={(e) => e.key === 'Enter' && handleYes}
    class="{btnWrapClass} button-yes right-28 group peer-active:hidden"
  >
    <button type="button" class="{btnClass} button-yes bg-green-500 group-hover:bg-green-600 group-active:bg-green-700">
      <span>YES</span>
      <span class="text-sm whitespace-nowrap">I want it!</span>
      {#if yesClicked}
        <Confetti amount={100} destroyOnComplete size={20} />
      {/if}
    </button>
  </div>
</section>

<Modal bind:showModal={yesClicked} class="modal-yes">
  <h2 slot="header" class="text-3xl font-bold mb-2 w-full text-center">🎉 Yay! 🥳</h2>
  <div class="flex flex-col">
    <div class="grid grid-cols-2 gap-4 overflow-hidden h-72 my-4">
      <div class="h-full w-full rounded-lg overflow-hidden">
        <img alt="miro is happy" src="/miro-ai/normal-to-happy.gif" class="w-full h-full object-center object-cover" />
      </div>
      <div class="flex-1 flex flex-col h-full justify-center gap-4">
        <Logo size={40} />
        <h3>Thanks for picking a premium subscription!</h3>
        <a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Miro%20Premium%20Subscription%20🤩&dates=20240430T140000Z/20240430T143000Z&details=&location=Scheldestraat%2011,%202000%20Antwerpen&trp=true"
          target="_blank"
          class="px-2 py-1 bg-green-100 hover:bg-green-200 active:bg-green-300 transition-all duration-200 ease-out text-green-900 rounded-md"
        >
          Set a reminder for starting your subscription! 📅
        </a>
        <a
          href="mailto:miro.polfliet@novemberfive.co"
          target="_blank"
          class="px-2 py-1 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 transition-all duration-200 ease-out text-green-900 rounded-md"
        >
          Let us know about your experience! 💌
        </a>
      </div>
    </div>
  </div>
</Modal>

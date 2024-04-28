<script lang="ts">
  import { tweened } from 'svelte/motion';
  import { readable } from 'svelte/store';

  const startTime = new Date('2024-01-29T09:00:00').getTime();
  const endTime = new Date('2024-05-03T17:00:00').getTime();

  const currentTimeStore = readable(new Date().getTime(), (set) => {
    let animationFrame: number;
    const next = () => {
      set(new Date().getTime());
      animationFrame = requestAnimationFrame(next);
    };
    if (typeof window !== 'undefined') {
      next();
      return () => cancelAnimationFrame(animationFrame);
    }
  });

  const MINUTE = 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  $: toWait = Math.floor((endTime - $currentTimeStore) / 1000);
  $: days = Math.floor(toWait / DAY);
  $: hours = Math.floor((toWait - days * DAY) / HOUR);
  $: minutes = Math.floor((toWait - days * DAY - hours * HOUR) / MINUTE);
  $: seconds = toWait - days * DAY - hours * HOUR - minutes * MINUTE;

  const progress = tweened(0, { duration: 0 });
  $: $progress = toWait / Math.floor((endTime - startTime) / 1000);
</script>

<section class="flex flex-col h-32 w-96 relative">
  <div class="flex flex-col text-gray-600 gap-2 items-center justify-center w-full h-full">
    <div class="bg-gray-200 p-2 rounded-2xl border-gray-800">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
        style="background: hsl({120 * (1 - $progress)}deg, 70%, {100 - 50 * (1 - $progress) - 20}%)"
        class="w-full h-full rounded-lg absolute inset-0"
      >
        <rect fill="hsl({120 * $progress}deg, 80%, 40%)" height="100%" width="{100 * $progress}%" x={10 * (1 - $progress)} />
      </svg>
      <div
        class="
        p-2 flex flex-col items-center
        absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
        mix-blend-difference font-bold"
      >
        <div class="flex gap-2 whitespace-nowrap">
          <span>{days} day{days === 1 ? '' : 's'},</span>
          <span>{hours} hour{hours === 1 ? '' : 's'},</span>
        </div>
        <div class="flex gap-2 whitespace-nowrap">
          <span>{minutes} minute{minutes === 1 ? '' : 's'},</span>
          <span>{seconds} second{seconds === 1 ? '' : 's'}</span>
        </div>
      </div>
    </div>
  </div>
</section>

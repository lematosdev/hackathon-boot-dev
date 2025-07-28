<script>
  let { hpMax, currentHp, tempHp } = $props();
</script>

<div
  class="bg-[url(/sheet/hp-bg.svg)] bg-no-repeat bg-contain bg-center p-2 w-full h-[261px]"
>
  <div class="flex items-center flex-col justify-around h-[125px]">
    <div class="flex p-1 pl-3">
      <label class="text-xs min-w-fit self-end px-2" for="hitPointMax"
      >Hit Point Maximum</label>
      <input
        class="border-0 border-b h-6 text-center w-full appearance-none focus:outline-0 focus:shadow-none focus:ring-0 focus:border-inherit"
        type="number"
        id="hitPointMax"
        name="hitPointMax"
        bind:value={hpMax}
      />
    </div>

    <input
      class="border-0 text-center text-3xl w-full focus:outline-0 focus:shadow-none focus:ring-0 focus:border-inherit"
      type="number"
      bind:value={currentHp}
    />
    <p class="uppercase text-center text-xs">Current hit points</p>
  </div>

  <div class="flex items-center flex-col justify-around h-[100px] mt-5">
    <input
      class="border-0 text-center text-3xl w-full mt-2 focus:outline-0 focus:shadow-none focus:ring-0 focus:border-inherit"
      type="number"
      min="0"
      bind:value={tempHp}
    />
    <p class="uppercase text-center text-xs align-text-bottom">
      Temporary hit points
    </p>
  </div>
</div>

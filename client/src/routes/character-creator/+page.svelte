<script>
  import AbilityScore from '$lib/components/character-sheet/AbilityScore.svelte';

  const abilityScores = [
    { label: 'Strength', value: 10, modifier: 0 },
    { label: 'Dexterity', value: 12, modifier: 1 },
    { label: 'Constitution', value: 14, modifier: 2 },
    { label: 'Intelligence', value: 13, modifier: 1 },
    { label: 'Wisdom', value: 15, modifier: 2 },
    { label: 'Charisma', value: 8, modifier: -1 },
  ];
</script>

<form action="post" class="p-14">
  <div class="flex w-full">
    <div class="flex flex-2 flex-col justify-center">
      <input type="text" id="name" name="name" required />
      <label for="name" class="uppercase">Character Name</label>
    </div>
    <div class="flex-4 grid grid-cols-3">
      <div class="flex flex-col">
        <input type="text" id="class" name="class" required />
        <label for="class" class="uppercase">Class & Level</label>
      </div>
      <div class="flex flex-col">
        <input type="text" id="class" name="class" required />
        <label for="class" class="uppercase">Background</label>
      </div>
      <div class="flex flex-col">
        <input type="text" id="class" name="class" required />
        <label for="class" class="uppercase">Player Name</label>
      </div>
      <div class="flex flex-col">
        <input type="text" id="class" name="class" required />
        <label for="class" class="uppercase">Race</label>
      </div>
      <div class="flex flex-col">
        <input type="text" id="class" name="class" required />
        <label for="class" class="uppercase">Alignmnent</label>
      </div>
      <div class="flex flex-col">
        <input type="text" id="class" name="class" required />
        <label for="class" class="uppercase">Experience Points</label>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-3 gap-4">
    <div class="border rounded row-span-2 flex">
      <div class="bg-gray-400 h-full w-36 p-3">
        {#each abilityScores as score}
          <AbilityScore label={score.label} value={score.value} />
        {/each}
      </div>
      <div class="h-full w-2/3 bg-red-300"></div>
    </div>
    <div class="border rounded h-80"></div>
    <div class="border rounded h-80"></div>
    <div class="border rounded h-70"></div>
    <div class="border rounded row-span-2"></div>
    <div class="border rounded h-70"></div>
    <div class="border rounded h-70"></div>
  </div>
</form>

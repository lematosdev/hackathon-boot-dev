<script lang="ts">
  import AbilityScore from '$lib/components/character-sheet/AbilityScore.svelte';
  import MainInput from '$lib/components/character-sheet/MainInput.svelte';
  import Skills from '$lib/components/character-sheet/Skills.svelte';
  import {
    getAbilityModifier,
    getPerception,
    getProficiencyBonus,
  } from '$lib/utils';

  const abilityScores = [
    { label: 'Strength', value: 10, code: 'str' },
    { label: 'Dexterity', value: 12, code: 'dex' },
    { label: 'Constitution', value: 14, code: 'con' },
    { label: 'Intelligence', value: 13, code: 'int' },
    { label: 'Wisdom', value: 15, code: 'wis' },
    { label: 'Charisma', value: 8, code: 'cha' },
  ];

  const skills = [
    { label: 'Acrobatics', ability: 'dex', code: 'acrobatics' },
    { label: 'Animal Handling', ability: 'wis', code: 'animal-handling' },
    { label: 'Arcana', ability: 'int', code: 'arcana' },
    { label: 'Athletics', ability: 'str', code: 'athletics' },
    { label: 'Deception', ability: 'cha', code: 'deception' },
    { label: 'History', ability: 'int', code: 'history' },
    { label: 'Insight', ability: 'wis', code: 'insight' },
    { label: 'Intimidation', ability: 'cha', code: 'intimidation' },
    { label: 'Investigation', ability: 'int', code: 'investigation' },
    { label: 'Medicine', ability: 'wis', code: 'medicine' },
    { label: 'Nature', ability: 'int', code: 'nature' },
    { label: 'Perception', ability: 'wis', code: 'perception' },
    { label: 'Performance', ability: 'cha', code: 'performance' },
    { label: 'Persuasion', ability: 'cha', code: 'persuasion' },
    { label: 'Religion', ability: 'int', code: 'religion' },
    { label: 'Sleight of Hand', ability: 'dex', code: 'sleight-of-hand' },
    { label: 'Stealth', ability: 'dex', code: 'stealth' },
    { label: 'Survival', ability: 'wis', code: 'survival' },
  ];

  const wisdomModifier = getAbilityModifier(
    abilityScores.find((a) => a.code === 'wis')?.value ?? 0,
  );

  const mainInputs = [
    { label: 'Class & Level', code: 'class-level', value: '' },
    { label: 'Background', code: 'background', value: '' },
    { label: 'Player Name', code: 'player-name', value: '' },
    { label: 'Race', code: 'race', value: '' },
    { label: 'Alignment', code: 'alignment', value: '' },
    { label: 'Experience Points', code: 'experience-points', value: '' },
  ];

  const level = 3;

  let proficiencies: string[] = $state([]);

  const initiative = getAbilityModifier(
    abilityScores.find((a) => a.code === 'dex')?.value || 0,
  );
  const battleSkills = [
    { label: 'Armor class', value: 17 },
    { label: 'Initiative', value: initiative },
    { label: 'Speed', value: 30, unit: 'feet' },
  ];

  let hitPointMax: number = $state(0);
  let currentHitPoints: number = $state(0);
</script>

<form method="post" class="p-14 text-white">
  <div class="flex w-full">
    <div class="flex flex-2 flex-col justify-center">
      <input class="border-0" type="text" id="name" name="name" required />
      <label for="name" class="uppercase">Character Name</label>
    </div>
    <div class="flex-4 grid grid-cols-3">
      {#each mainInputs as { code, label, value }}
        <MainInput {label} {code} {value} />
      {/each}
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="border rounded row-span-2 flex min-w-fit">
      <div class="h-full w-32 p-3 flex flex-col gap-y-5">
        {#each abilityScores as score}
          <AbilityScore label={score.label} value={score.value} />
        {/each}
      </div>
      <div class="h-full w-full flex flex-col items-center gap-y-3">
        <div class="flex items-center justify-center">
          <span
            class="w-20 h-14 rounded-full text-center border-4 border-white flex items-center justify-center"
          >
            +{getProficiencyBonus(level)}
          </span>
          <span
            class="content-center text-center px-3 border-4 border-l-0 rounded-r-xl rounded-l-md w-full h-13 relative right-3.5 text-sm"
          >
            Proficiency Bonus
          </span>
        </div>
        <Skills
          {level}
          list={proficiencies}
          skills={abilityScores}
          title="Saving Throws"
        />
        <Skills
          {level}
          list={proficiencies}
          skills={skills.map((s) => ({
            ...s,
            value: abilityScores.find((a) => a.code === s.ability)
              ?.value || 0,
          }))}
          title="Skills"
        />
        <div class="flex items-center justify-center">
          <span
            class="w-20 h-14 rounded-full text-center border-4 border-white flex items-center justify-center"
          >
            {getPerception(wisdomModifier, level)}
          </span>
          <span
            class="content-center text-center px-3 border-4 border-l-0 rounded-r-xl rounded-l-md w-full h-13 relative right-3.5 text-sm"
          >
            Perception
          </span>
        </div>
      </div>
    </div>
    <div class="border rounded p-2">
      <div class="flex gap-2">
        {#each battleSkills as skill}
          <div class="border rounded flex-1 flex flex-col justify-between p-2">
            <div
              class="text-center w-full h-12 grid place-items-center text-2xl"
            >
              {skill.value}
              {#if skill.unit}
                {skill.unit}
              {/if}
            </div>
            <p class="uppercase text-center text-xs">{skill.label}</p>
          </div>
        {/each}
      </div>
      <div class="border p-2">
        <div class="flex">
          <label for="hitPointMax">Hit Point Maximum</label>
          <input
            class="border-0 border-b h-6"
            type="text"
            id="hitPointMax"
            name="hitPointMax"
            bind:value={hitPointMax}
          />
        </div>
        <div>
          <input
            class="border-0 text-center text-4xl w-full"
            type="text"
            bind:value={currentHitPoints}
          />
        </div>
      </div>
    </div>
    <div class="border rounded h-80"></div>
    <div class="border rounded h-70"></div>
    <div class="border rounded row-span-2"></div>
    <div class="border rounded h-70"></div>
    <div class="border rounded h-70"></div>
  </div>
</form>

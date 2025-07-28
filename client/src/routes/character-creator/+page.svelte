<script lang="ts">
  import AbilityScore from '$lib/components/character-sheet/AbilityScore.svelte';
  import AttacksRow from '$lib/components/character-sheet/AttacksRow.svelte';
  import SheetHeader from '$lib/components/character-sheet/header/SheetHeader.svelte';
  import Skills from '$lib/components/character-sheet/Skills.svelte';
  import {
    camelCaseToNormalText,
    getPerception,
    getProficiencyBonus,
  } from '$lib/utils';
  import type { CharacterSheet } from '../../../../types/characterSheet';
  import { currentCharacter, currentName } from '$lib/stores/characters';
  import {
    abilityScores,
    battleSkills,
    wisdomModifier,
  } from '$lib/stores/character-computed';

  console.log('DEBUG currentName →', $currentName);
  console.log('DEBUG currentCharacter →', $currentCharacter);

  let character: CharacterSheet = $currentCharacter as CharacterSheet;

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

  const mainInputs = [
    { label: 'Class & Level', code: 'class-level', value: '' },
    { label: 'Background', code: 'background', value: '' },
    { label: 'Player Name', code: 'player-name', value: '' },
    { label: 'Race', code: 'race', value: '' },
    { label: 'Alignment', code: 'alignment', value: '' },
    { label: 'Experience Points', code: 'experience-points', value: '' },
  ];

  const hidDice = character.hitDice.die;

  const level = character.level;

  let skillsWithProficiencies: string[] = $state([]);

  let hitPointMax = $state(0);
  let currentHitPoints = $state(0);
  let temporaryHitPoints = $state(0);

  let characterBackground = $state({
    personalityTraits: character.personalityTraits,
    ideals: character.ideals,
    bonds: character.bonds,
    flaws: character.flaws,
  });

  const weapons = [
    {
      name: 'greataxe',
      atkBonus: '+5',
      dmgType: '1d12 + 3 slashing',
    },
    {
      name: 'javelin',
      atkBonus: '+5',
      dmgType: '1d6 + 3 piercing',
    },
  ];

  let equipment = $state(
    'Chain mail*, battleaxe, 3 javelins, backpack\n\n* While wearing this armor, you have disadvantage on Dexterity (Stealth) cheks',
  );

  let currencies = $state({
    cp: 0,
    sp: 0,
    ep: 0,
    gp: 40,
    pp: 0,
  });

  const traits = $state(character.featuresAndTraits);
  const proficiencies = $state(
    character.proficiencies.map((prof) => prof.name),
  );
  const languages = $state(character.languages.map((lang) => lang.name));
</script>

<div class="flex justify-center character-form">
  <form method="post" class="p-7 text-white max-w-270">
    <SheetHeader />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="border rounded row-span-2 flex min-w-fit">
        <div class="h-full w-32 p-3 flex flex-col gap-y-5">
          {#each $abilityScores as score}
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
            list={skillsWithProficiencies}
            skills={$abilityScores}
            title="Saving Throws"
          />
          <Skills
            {level}
            list={skillsWithProficiencies}
            skills={skills.map((s) => ({
              ...s,
              value:
                $abilityScores.find((a) => a.code === s.ability)
                  ?.value || 0,
            }))}
            title="Skills"
          />
          <div class="flex items-center justify-center">
            <span
              class="w-20 h-14 rounded-full text-center border-4 border-white flex items-center justify-center"
            >
              {getPerception($wisdomModifier, level)}
            </span>
            <span
              class="content-center text-center px-3 border-4 border-l-0 rounded-r-xl rounded-l-md w-full h-13 relative right-3.5 text-sm"
            >
              Perception
            </span>
          </div>
        </div>
      </div>
      <div
        class="border rounded p-2 flex flex-col justify-center gap-y-2 h-114"
      >
        <div class="flex gap-2">
          {#each $battleSkills as skill}
            <div
              class="border rounded flex-1 flex flex-col justify-between p-2"
            >
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
        <div class="border p-2 rounded-t-xl">
          <div class="flex items-center">
            <label class="text-xs w-50" for="hitPointMax"
            >Hit Point Maximum</label>
            <input
              class="border-0 border-b h-6 w-full"
              type="number"
              id="hitPointMax"
              name="hitPointMax"
              bind:value={hitPointMax}
            />
          </div>
          <div>
            <input
              class="border-0 text-center text-3xl w-full"
              type="number"
              bind:value={currentHitPoints}
            />
          </div>
          <p class="uppercase text-center text-xs">Current hit points</p>
        </div>
        <div class="border p-2 rounded-b-xl">
          <div>
            <input
              class="border-0 text-center text-3xl w-full"
              type="number"
              min="0"
              bind:value={temporaryHitPoints}
            />
          </div>
          <p class="uppercase text-center text-xs">Temporary hit points</p>
        </div>
        <div class="flex gap-2">
          <div class="rounded-xl p-2 w-1/2 border text-sm">
            <div class="flex">
              <p>Total</p>
              <p class="border-0 border-b h-6 w-full text-center">
                {`${level}d${hidDice}`}
              </p>
            </div>
            <div>
              <input
                class="border-0 text-center text-2xl w-full"
                type="number"
                min="0"
                max={level}
              />
            </div>
            <p class="uppercase text-center text-xs">Hit dice</p>
          </div>
          <div
            class="border rounded-xl p-2 w-1/2 flex flex-col justify-between"
          >
            <div class="flex-4 flex flex-col justify-center">
              <div class="flex items-center justify-between pb-2">
                <p class="uppercase text-[0.6rem]">Successes</p>
                <div
                  class="flex items-center justify-center gap-2 pl-2 relative"
                >
                  <div class="border-b border-t h-0.75 absolute w-7/8"></div>
                  <input type="checkbox" class="rounded-full size-4 z-10" />
                  <input type="checkbox" class="rounded-full size-4 z-10" />
                  <input type="checkbox" class="rounded-full size-4 z-10" />
                </div>
              </div>
              <div class="flex items-center justify-between pb-2">
                <p class="uppercase text-[0.6rem]">Failures</p>
                <div
                  class="flex items-center justify-center gap-2 pl-2 relative"
                >
                  <div class="border-b border-t h-0.75 absolute w-7/8"></div>
                  <input type="checkbox" class="rounded-full size-4 z-10" />
                  <input type="checkbox" class="rounded-full size-4 z-10" />
                  <input type="checkbox" class="rounded-full size-4 z-10" />
                </div>
              </div>
            </div>
            <p class="uppercase text-center text-xs flex-1">Death saves</p>
          </div>
        </div>
      </div>
      <div
        class="border rounded p-2 flex flex-col justify-center gap-y-2 h-114"
      >
        {#each Object.keys(characterBackground) as bg}
          <div
            class="border p-3 pb-1 first-of-type:rounded-t-xl last-of-type:rounded-b-xl"
          >
            <textarea
              name={bg}
              id={bg}
              class="text-xs w-full p-0 h-15 border-0 resize-none"
              bind:value={characterBackground[
                bg as keyof typeof characterBackground
              ]}
            ></textarea>
            <p class="uppercase text-[0.6rem] text-center pt-2">
              {camelCaseToNormalText(bg)}
            </p>
          </div>
        {/each}
      </div>
      <div class="border rounded h-115 flex flex-col justify-between p-2">
        <table class="table-auto">
          <thead>
            <tr>
              <th class="uppercase text-[0.6rem] font-normal text-gray-400">
                name
              </th>
              <th class="uppercase text-[0.6rem] font-normal text-gray-400">
                atk bonus
              </th>
              <th class="uppercase text-[0.6rem] font-normal text-gray-400">
                damage/type
              </th>
            </tr>
          </thead>
          <tbody>
            {#each weapons as { name, atkBonus, dmgType }}
              <AttacksRow {name} {atkBonus} {dmgType} />
            {/each}
            <AttacksRow />
            <AttacksRow />
          </tbody>
        </table>
        <p class="uppercase text-center text-xs font-bold">
          Attacks & spellcasting
        </p>
      </div>
      <div class="border rounded row-span-2 p-2 flex flex-col justify-between">
        <div>
          {#each traits as { name, description }}
            <p class="text-sm">
              <span class="font-bold italic pl-4">{name}.</span>
              {description}
            </p>
          {/each}
        </div>
        <p class="uppercase text-sm font-bold text-center">Features & traits</p>
      </div>
      <div class="border rounded h-70 p-2 flex flex-col justify-between">
        <div>
          <div>
            <p class="text-sm">
              <span class="font-bold italic pl-4">Proficiencies.</span>
              {proficiencies.join(', ')}
            </p>
            <p class="text-sm capitalize">
              <span class="font-bold italic pl-4">Languages.</span>
              {languages.join(', ')}
            </p>
          </div>
        </div>
        <p class="uppercase text-sm font-bold text-center">
          Other proficiencies & languages
        </p>
      </div>
      <div
        class="relative border border-white rounded p-2 flex flex-col justify-center gap-y-2 h-70"
      >
        <div class="flex h-full items-stretch">
          <div
            class="flex flex-col justify-start items-center space-y-1 mr-2 h-full gap-1"
          >
            {#each Object.keys(currencies) as coin}
              <div
                class="flex flex-col w-12 pb-2 full-h border first:rounded-t-md last:rounded-b-md flex items-center justify-center"
              >
                <label for={coin} class="text-xs uppercase">
                  {coin}
                </label>
                <input
                  id={coin}
                  name={coin}
                  bind:value={currencies[coin as keyof typeof currencies]}
                  class="w-10 h-4 border-0 text-center leading-4 appearance-none text-xs"
                />
              </div>
            {/each}
          </div>
          <div class="flex-1 border border-white rounded-lg py-2">
            <textarea
              name={equipment}
              id={equipment}
              bind:value={equipment}
              class="w-full h-full text-xs border-0 resize-none text-justify"
              placeholder="List your equipment…"
            ></textarea>
          </div>
        </div>
        <p class="uppercase text-[0.6rem] text-center">Equipment</p>
      </div>
    </div>
  </form>
</div>

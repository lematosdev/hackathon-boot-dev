<script lang="ts">
  import AbilityScore from '$lib/components/character-sheet/AbilityScore.svelte';
  import ArmorClass from '$lib/components/character-sheet/ArmorClass.svelte';
  import AttacksRow from '$lib/components/character-sheet/AttacksRow.svelte';
  import Backstory from '$lib/components/character-sheet/Backstory.svelte';
  import Box from '$lib/components/character-sheet/Box.svelte';
  import SheetHeader from '$lib/components/character-sheet/header/SheetHeader.svelte';
  import HitPoints from '$lib/components/character-sheet/HitPoints.svelte';
  import Perception from '$lib/components/character-sheet/Perception.svelte';
  import ProficiencyBonus from '$lib/components/character-sheet/ProficiencyBonus.svelte';
  import Skills from '$lib/components/character-sheet/Skills.svelte';
  import { getPerception, getProficiencyBonus } from '$lib/utils';
  import { currentCharacter, saveCurrent } from '$lib/stores/characters';
  import {
    abilityScores,
    armorClass,
    initiative,
    languages,
    proficiencies,
    speed,
    wisdomModifier,
  } from '$lib/stores/character-computed';
  import type { CharacterSheet } from '../../../../types/characterSheet';

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

  const level = $currentCharacter.level;

  let skillsWithProficiencies: string[] = $state([]);

  let hitDice = $state($currentCharacter.hitDice.die || 6);
  let hpMax = $state($currentCharacter.hitPoints.maximum || 0);
  let currentHp = $state($currentCharacter.hitPoints.current || 0);
  let tempHp = $state($currentCharacter.hitPoints.temporary || 0);

  let characterBackground: {
    personalityTraits: string;
    ideals: string;
    bonds: string;
    flaws: string;
  } = $state({ personalityTraits: '', ideals: '', bonds: '', flaws: '' });

  let skillProfs: string[] = $state([]);
  let saveThrowProfs: string[] = $state([]);

  $effect(() => {
    skillProfs = $currentCharacter.skills
      .filter((s: CharacterSheet['skills'][number]) => s.proficiency)
      .map((s: CharacterSheet['skills'][number]) =>
        s.name.toLowerCase().replace(/\s+/g, '-')
      );
    saveThrowProfs = $currentCharacter.savingThrows
      .filter((st: CharacterSheet['savingThrows'][number]) =>
        st.proficiency
      )
      .map((st: CharacterSheet['savingThrows'][number]) =>
        st.abilityScore.substring(0, 3).toLowerCase()
      );
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

  const traits = $currentCharacter.featuresAndTraits;

  type BGKey = keyof typeof characterBackground;
  const bgKeys: BGKey[] = ['personalityTraits', 'ideals', 'bonds', 'flaws'];

  $inspect(abilityScores);

  $effect(() => {
    characterBackground = {
      personalityTraits: $currentCharacter.personalityTraits,
      ideals: $currentCharacter.ideals,
      bonds: $currentCharacter.bonds,
      flaws: $currentCharacter.flaws,
    };
  });
</script>

<div class="flex justify-center character-form lg:mx-64">
  <form method="post" class="md:p-7 text-white w-full">
    <SheetHeader />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      <div class="row-span-2 flex justify-center gap-1 md:min-w-min p-1">
        <div
          class="w-24 md:w-44 p-2 h-fit flex flex-col gap-3 md:gap-0 bg-gray-600/25 rounded-2xl mt-10"
        >
          {#each $abilityScores as score}
            <AbilityScore label={score.label} value={score.value} />
          {/each}
        </div>
        <div
          class="md:h-full w-64 md:w-full flex flex-col items-center gap-y-2"
        >
          <ProficiencyBonus proficiency={getProficiencyBonus(level)} />

          <Skills
            {level}
            list={skillsWithProficiencies}
            skills={$abilityScores}
            title="Saving Throws"
            class="bg-[url(/sheet/st-bg.svg)] h-[232px] p-3.5"
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
            class="bg-[url(/sheet/skill-bg.svg)] h-[611px] p-3.5"
          />
          <Perception perception={getPerception($wisdomModifier, level)} />
        </div>
      </div>
      <div
        class="bg-gray-600/25 rounded-2xl p-4 flex flex-col justify-start gap-y-2"
      >
        <div class="flex justify-around">
          <ArmorClass armorClass={$armorClass} />
          <Box label="INITIATIVE" value={$initiative} />
          <Box label="SPEED" value={$speed} />
        </div>
        <HitPoints {hpMax} {currentHp} {tempHp} />

        <div class="flex gap-2">
          <div class="rounded-xl p-2 w-1/2 border text-sm">
            <div class="flex">
              <p>Total</p>
              <p class="border-0 border-b h-6 w-full text-center">
                {`${level}d${hitDice}`}
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
      <Backstory backstory={characterBackground} />
      <div
        class="bg-[url(/sheet/feats-bg.svg)] bg-no-repeat bg-contain bg-center h-100 flex flex-col justify-between p-4 px-8"
      >
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
      <div
        class="bg-[url(/sheet/skill-bg.svg)] bg-no-repeat bg-contain bg-center md:w-[320px] row-span-2 p-4 px-16 md:p-5 flex flex-col justify-between w-full h-190"
      >
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
      <div
        class="bg-[url(/sheet/feats-bg.svg)] bg-no-repeat bg-contain bg-center w-full h-80 p-2 px-16 flex flex-col justify-between"
      >
        <div>
          <div>
            <p class="text-sm">
              <span class="font-bold italic pl-4">Proficiencies.</span>
              {$proficiencies.join(', ')}
            </p>
            <p class="text-sm capitalize">
              <span class="font-bold italic pl-4">Languages.</span>
              {$languages.join(', ')}
            </p>
          </div>
        </div>
        <p class="uppercase text-sm font-bold text-center">
          Other proficiencies & languages
        </p>
      </div>
      <div class="relative flex flex-col justify-center gap-y-2 h-70">
        <div class="flex h-full">
          <div
            class="flex flex-col justify-start items-center space-y-1 mr-2 h-full gap-1"
          >
            {#each Object.keys(currencies) as coin}
              <div
                class="flex flex-col w-12 pb-2 full-h border first:rounded-t-md last:rounded-b-md items-center justify-center"
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

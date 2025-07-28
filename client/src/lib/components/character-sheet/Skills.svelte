<script lang="ts">
  import { getAbilityModifier, getProficiencyBonus } from '$lib/utils';

  interface Props {
    list: string[];
    skills: {
      label: string;
      value: number;
      code: string;
      ability?: string;
    }[];
    level: number;
    title: string;
  }
  let { list, skills, level, title }: Props = $props();

  const handleRadioChange = (code: string, e: Event) => {
    const value = (e.target as HTMLInputElement).checked;
    if (value) {
      list.push(code);
    } else {
      const index = list.indexOf(code);
      if (index > -1) {
        list.splice(index, 1);
      }
    }
  };
  const proficiencyBonus = getProficiencyBonus(level);

  const getProficiency = (list: string[], code: string, value: number) => {
    let modifier = getAbilityModifier(value);
    if (list.includes(code)) modifier += proficiencyBonus;
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
  };
</script>

<div class="border-2 rounded-lg max-w-52 w-full">
  {#each skills as skill}
    <div class="flex gap-x-1 items-center p-1 text-sm">
      <input
        class="rounded-full size-3 bg-transparent checked:bg-white"
        type="checkbox"
        name={skill.code}
        id={skill.code}
        onchange={(e) => handleRadioChange(skill.code, e)}
      />
      <p class="border-b-1 w-5 text-center">
        {getProficiency(list, skill.code, skill.value)}
      </p>
      <label class="text-xs" for={skill.code}>{skill.label}</label>
      {#if skill.ability}
        <span class="text-xs text-gray-500 capitalize">({skill.ability})</span>
      {/if}
    </div>
  {/each}
  <p class="uppercase text-sm text-center pt-3">{title}</p>
</div>

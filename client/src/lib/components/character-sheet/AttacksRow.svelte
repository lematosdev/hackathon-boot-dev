<script lang="ts">
  interface Props {
    name?: string;
    atkBonus?: string;
    dmgType?: string;
  }

  let { name, atkBonus, dmgType }: Props = $props();

  let localName = $state(name || '');
  let localAtkBonus = $state(atkBonus || '');
  let localDmgType = $state(dmgType || '');
</script>

<tr>
  <td>
    {#if name}
      <p
        class="bg-gray-700 m-1 text-center text-xs h-6 rounded-ss-md rounded-ee-md w-24"
      >
        {name}
      </p>
    {:else}
      <input
        class="bg-gray-700 m-1 text-center text-xs h-6 rounded-ss-md rounded-ee-md w-24"
        aria-label="Attack name"
        bind:value={localName}
      />
    {/if}
  </td>
  <td>
    {#if atkBonus}
      <p
        class="bg-gray-700 m-1 text-center text-xs h-6 rounded-ss-md rounded-ee-md w-12"
      >
        {localAtkBonus}
      </p>
    {:else}
      <input
        class="bg-gray-700 m-1 text-center text-xs h-6 rounded-ss-md rounded-ee-md w-12"
        aria-label="Attack Bonus"
        bind:value={atkBonus}
      />
    {/if}
  </td>
  <td>
    {#if dmgType}
      <p
        class="bg-gray-700 m-1 text-center text-xs h-6 rounded-ss-md rounded-ee-md w-31"
      >
        {dmgType}
      </p>
    {:else}
      <input
        class="bg-gray-700 m-1 text-center text-xs h-6 rounded-ss-md rounded-ee-md w-31"
        aria-label="Damage Type"
        bind:value={localDmgType}
      />
    {/if}
  </td>
</tr>

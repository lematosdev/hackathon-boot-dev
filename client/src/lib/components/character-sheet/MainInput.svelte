<script lang="ts">
  interface Props {
    label: string;
    code: string;
    value?: string;
  }
  let { label, code, value = '' }: Props = $props();
</script>

<div class="flex flex-col">
  <input class="border-none" type="text" id={code} name={code} bind:value />
  <label for={code} class="uppercase border-t-1">{label}</label>
</div>

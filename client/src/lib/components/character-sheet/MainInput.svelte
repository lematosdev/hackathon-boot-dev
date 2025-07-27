<script lang="ts">
  interface Props {
    label: string;
    code: string;
    value?: string;
  }
  let { label, code, value = '' }: Props = $props();
</script>

<div class="flex flex-col text-sm">
  <input
    class="border-0 border-b"
    type="text"
    id={code}
    name={code}
    bind:value
  />
  <label for={code} class="uppercase">{label}</label>
</div>

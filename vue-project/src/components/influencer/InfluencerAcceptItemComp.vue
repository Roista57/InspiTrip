<script setup>
const props = defineProps({ itemp: Object });
console.log(props.itemp);

const accept = () => {};

const refuse = () => {};
</script>

<template>
  <tr>
    <td>{{ props.itemp.no }}</td>
    <td>{{ props.itemp.name }}</td>
    <td>{{ props.itemp.img }}</td>
    <td>{{ props.itemp.conetnt }}</td>
    <td>{{ props.itemp.url }}</td>
    <td>
      <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-success">수락</button>
        <button type="button" class="btn btn-outline-danger">거절</button>
      </div>
    </td>
  </tr>
</template>

<style scoped></style>

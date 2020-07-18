<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      document.querySelector('#loading').classList.add('hide');
    }, 500);
  },
};
</script>

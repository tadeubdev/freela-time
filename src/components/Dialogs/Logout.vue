<template>
  <v-dialog v-model="show" max-width="290">
    <v-card>
      <v-card-title class="headline">
        Logout
      </v-card-title>
      <v-card-text>
        Tem certeza que deseja sair?
      </v-card-text>
      <v-card-actions>
        <v-btn text @click="show=!show">Não</v-btn>
        <v-spacer></v-spacer>
        <v-btn text color="blue" @click="doLogout">Sim</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {

  props: {
    value: Boolean,
  },

  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },

  methods: {

    async doLogout() {
      this.displayLogout = false;
      await this.$store.commit('setUser', {});
      await this.$store.commit('setUserLogged', false);
      this.$router.push({ name: 'Welcome' });
    },
  },

};
</script>

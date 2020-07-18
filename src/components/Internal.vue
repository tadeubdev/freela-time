<template>
  <v-app>
    <v-card
      flat
      tile
    >
      <v-toolbar
        color="primary"
        dark
        extended
        flat
      ></v-toolbar>
        <v-card
          class="mx-4 mx-lg-auto"
          max-width="1000"
          style="margin-top:-64px;z-index: 0;"
        >
          <v-toolbar
            flat
            class="text-dark"
          >
            <v-toolbar-title class="grey--text">Freela Time</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              icon
              @click="displayLogout = !displayLogout"
            >
              <v-icon>mdi-account-arrow-right-outline</v-icon>
            </v-btn>
            <template v-slot:extension>
              <v-btn
                fab
                color="primary"
                dark
                bottom
                left
                absolute
                style="z-index:9999"
                @click="displayNovoCliente = !displayNovoCliente"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
          </v-toolbar>
          <v-divider></v-divider>
          <v-main
            style="z-index:-1;min-height:500px;"
          >
            <v-container
              class="fill-height"
              align-top
            >
              <router-view/>
            </v-container>
          </v-main>
        </v-card>
    </v-card>

    <NovoCliente v-model="displayNovoCliente"></NovoCliente>
    <Logout v-model="displayLogout"></Logout>
  </v-app>
</template>

<style>
.v-main__wrap {
  z-index: -1;
}
</style>

<script>
import NovoCliente from './Dialogs/NovoCliente.vue';
import Logout from './Dialogs/Logout.vue';

export default {

  components: {
    NovoCliente,
    Logout,
  },

  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  data() {
    return {
      drawer: false,
      displayLogout: false,
      displayNovoCliente: false,
    };
  },

  mounted() {
    // só pega o valor em dispositivos grandes
    if (this.$vuetify.breakpoint.lgAndUp) {
      this.drawer = this.$localStorage.get('drawer', false);
    }
  },

  methods: {

    changeDrawer() {
      this.drawer = !this.drawer;
      // não salva posição em dispositivos pequenos
      if (this.$vuetify.breakpoint.lgAndUp) {
        this.$localStorage.set('drawer', this.drawer);
      }
    },

  },

};
</script>

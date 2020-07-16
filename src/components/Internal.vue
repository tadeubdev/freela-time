<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      v-if="false"
    >
      <LateralBar></LateralBar>
    </v-navigation-drawer>

    <v-app-bar
      app
      dark
      color="blue"
    >
      <v-app-bar-nav-icon @click.stop="changeDrawer" v-if="false"></v-app-bar-nav-icon>
      <v-toolbar-title>Freela time</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        dark
        @click="displayLogout = !displayLogout"
      >
        Sair
      </v-btn>
      <template v-slot:extension>
        <v-btn
          fab
          color="indigo"
          dark
          bottom
          left
          absolute
          @click="displayNovoCliente = !displayNovoCliente"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-dialog
        v-model="displayLogout"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">
            Logout
          </v-card-title>
          <v-card-text>
            Tem certeza que deseja sair?
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              text
              @click="displayLogout = false"
            >
              Não
            </v-btn>

            <v-btn
              text
              color="red"
              @click="doLogout"
            >
              Sim
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="displayNovoCliente" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Novo cliente</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Nome" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="displayNovoCliente = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="displayNovoCliente = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
      >
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LateralBar from './Internal/LateralBar.vue';

export default {

  components: {
    LateralBar,
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
      displayNovoCliente: true,
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

    async doLogout() {
      this.displayLogout = false;
      await this.$store.commit('setUser', {});
      await this.$store.commit('setUserLogged', false);
      this.$router.push({ name: 'Welcome' });
    },

  },

};
</script>

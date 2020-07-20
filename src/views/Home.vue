<template>
  <v-main
    class="fill-height"
    fluid
  >
    <v-toolbar
      flat
      style="margin:-12px -12px 12px -12px;"
    >
      <v-btn
        fab
        color="primary"
        dark
        depressed
        title="Novo cliente"
        @click="displayNovoCliente = !displayNovoCliente"
      >
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>
    </v-toolbar>
    <v-layout
      v-if="!clientes.length"
      class="fill-height"
      fluid
      align-center
      justify-center
    >
      <div
        class="text-center"
      >
        <h1>
          <v-icon
            class="text-h1 mb-3 grey--text"
          >mdi-account-circle</v-icon>
        </h1>
        <h2
          class="grey--text font-weight-light"
        >
          Nenhum cliente cadastrado.
        </h2>
      </div>
    </v-layout>
    <v-row v-else>
      <v-col
        cols="12"
        v-for="(cliente,index) in clientes.slice().reverse()"
        :key="index"
      >
        <v-card
          outlined
        >
          <v-card-title class="headline font-weight-light">{{ cliente.name }}</v-card-title>
          <v-card-subtitle class="pb-0">
            <span v-if="!cliente.projects">Nenhum projeto registrado.</span>
            <span v-else-if="cliente.projects == 1">Um projeto registrado.</span>
            <span v-else>{{ cliente.projects }} projetos registrados.</span>
          </v-card-subtitle>
          <v-card-subtitle
            class="pt-0 pb-0"
            style="margin-left:-3px;"
          >
            <v-icon small>mdi-bookmark</v-icon>
            <small v-if="!cliente.description">Nenhuma observação.</small>
            <small v-else>{{ cliente.description }}</small>
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              text
              small
              color="blue darken-4"
              :to="`/clientes/${cliente.id}`"
            >Visualizar</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              text
              small
              color="red"
              @click="removerCliente(cliente)"
            >Remover</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!--  -->
    <NovoCliente v-model="displayNovoCliente" :data="cliente"></NovoCliente>
    <!--  -->
    <SimpleAlert
      v-model="dialog.show"
      :message="dialog.message"
      :title="dialog.title"
      :ok="dialog.ok"
      :yes="dialog.yes"
      :no="dialog.no"
      :cancel="dialog.cancel"
    ></SimpleAlert>
  </v-main>
</template>

<script>
import SimpleAlert from '../components/Dialogs/SimpleAlert.vue';
import NovoCliente from '../components/Dialogs/NovoCliente.vue';

export default {

  components: {
    SimpleAlert,
    NovoCliente,
  },

  computed: {
    clientes() {
      return this.$store.state.clientes;
    },
  },

  data() {
    return {
      displayNovoCliente: false,
      cliente: null,
      dialog: {
        show: false,
        title: null,
        message: null,
        ok: null,
        yes: null,
        no: null,
        cancel: null,
      },
    };
  },

  methods: {

    removerCliente(cliente) {
      this.dialog.title = 'Excluir cliente';
      this.dialog.message = 'Tem certeza que deseja excluir?';
      this.dialog.no = () => {
        this.dialog.show = false;
      };
      this.dialog.yes = () => {
        this.dialog.show = false;
        const clientes = this.clientes.filter((item) => item.id !== cliente.id);
        this.$store.commit('setClientes', clientes);
      };
      this.dialog.show = true;
    },

  },
};
</script>

<template>
  <v-dialog v-model="show" max-width="400px">
    <v-card v-if="cliente">
      <v-card-title>
        <span class="headline">{{ cliente.name }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                label="Nome"
                placeholder="Jhon Doe"
                v-model="cliente.name"
                autofocus
                required
                @keydown.enter="salvarCliente"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                label="Descrição"
                placeholder="Lorem ipsum dolor sit amet"
                v-model="cliente.description"
                required
                @keydown.enter="salvarCliente"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn color="red darken-1" text @click="show = !show">Cancelar</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="salvarCliente">Salvar</v-btn>
      </v-card-actions>
    </v-card>
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
  </v-dialog>
</template>

<script>
import SimpleAlert from './SimpleAlert.vue';

export default {

  components: {
    SimpleAlert,
  },

  props: {
    value: Boolean,
    data: Object,
  },

  computed: {
    cliente: {
      get() {
        return this.data;
      },
      set(data) {
        this.$emit('input', data);
      },
    },
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
    clientes() {
      return this.$store.state.clientes;
    },
  },

  data() {
    return {
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

    showOnEmpty() {
      this.dialog.title = 'Ops!';
      this.dialog.message = 'Preencha o campo nome!';
      this.dialog.ok = () => {
        this.dialog.show = false;
      };
      this.dialog.show = true;
    },

    salvarCliente() {
      const clientIndex = this.clientes.findIndex((item) => item.id === this.cliente.id);
      this.clientes[clientIndex] = this.cliente;
      this.$store.commit('setClientes', this.clientes);
      this.show = !this.show;
    },

  },

};
</script>

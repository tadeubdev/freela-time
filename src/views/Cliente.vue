<template>
  <v-main
    class="fill-height pt-0"
    fluid
  >
    <div>
      <nav>
        <v-breadcrumbs
          class="pt-0 pl-0"
          :items="items"
        ></v-breadcrumbs>
      </nav>

      <h2 v-text="cliente.name"></h2>
      <h4 v-text="cliente.description"></h4>
    </div>
    <!--  -->
    <EditarCliente v-model="showEditarCliente" :data="cliente"></EditarCliente>
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
import EditarCliente from '../components/Dialogs/EditarCliente.vue';

export default {

  components: {
    SimpleAlert,
    EditarCliente,
  },

  computed: {
    clientes() {
      return this.$store.state.clientes;
    },
    cliente() {
      return this.$store.state.clientes.find((item) => item.id === Number(this.$route.params.id));
    },
  },

  data() {
    return {
      showEditarCliente: false,
      items: [
        {
          text: 'Home',
          to: '/',
        },
        {
          text: 'Cliente',
          disabled: true,
        },
      ],
      cliente_edit: null,
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

  mounted() {
    this.items[1].text = this.cliente.name;
    console.log(this.cliente);
  },

  methods: {

    editarCliente(cliente) {
      this.cliente_edit = { ...cliente };
      this.showEditarCliente = true;
    },

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

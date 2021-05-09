const crypto = new Vue({
  el: "#crypto",
  data: {
    usdAmount: "",
    crypto: {
      bitcoin: {
        value: 58324.91,
      },
      etherium: {
        value: 3865.61,
      },
    },
  },
  methods: {
    bitcoin() {
      return this.usdAmount / this.crypto.bitcoin.value;
    },
    etherium() {
      return this.usdAmount / this.crypto.etherium.value;
    },
  },
});

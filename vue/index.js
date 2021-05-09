const crypto = new Vue({
  el: "#crypto",
  data: {
    usdAmount: "",
    crypto: {
      bitcoin: {
        value: 6840355.78,
      },
      etherium: {
        value: 450838.59,
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

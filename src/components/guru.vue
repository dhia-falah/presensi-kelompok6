<template>
  <div class="container">
    <div class="sms">
      <div class="row">
        <div class="col">
          <center><h2>Absensi Dosen</h2></center>
          <hr />
          <form>
            <label for="solicitado"><h3>Tanggal</h3></label><br />
            <input type="date" id="solicitado" value="" />
          </form>
        </div>
        <h3>Nama:</h3>
        <p style="white-space: pre-line">{{ message }}</p>
        <textarea v-model="texty" placeholder="Nama"></textarea>
        <div id="ppa">
          <h5>pilih salah satu:</h5>
          <div id="edd">
            <form>
              <input type="radio" id="Hadir" value="Hadir" v-model="picked" />
              <label for="Hadir"> &nbsp;Hadir</label>
              <br />
              <input type="radio" id="Ijin" value="Ijin" v-model="picked" />
              <label for="Ijin"> &nbsp;Ijin</label>
              <br />
              <input type="radio" id="Sakit" value="Sakit" v-model="picked" />
              <label for="Sakit"> &nbsp;Sakit</label>
              <br />
            </form>
          </div>
          <div id="app">
            <p>Upload Foto</p>
            <img :src="url_foto" alt height="100" width="100" />
            <div>
              <input ref="foto" id="foto" @change="handlefoto" type="file" />
              <br /><br />
            </div>
          </div>
        </div>
        <a href="/beranda">Submit</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guru",
  data() {
    return {
      foto: null,
      url_foto: "",
    };
  },
  methods: {
    handlefoto() {
      this.foto = this.$refs.foto.files[0];
      this.readImage();
    },

    readImage() {
      this.url_foto = URL.createObjectURL(this.foto);
    },
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
.sms {
  border: 1px solid black;
  height: 600px;
  width: 550px;
  padding: 20px;
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
}
textarea {
  width: 200px;
  margin-left: 0px;
  margin-bottom: 20px;
}
/* style image */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* end style image */
#edd {
  padding-top: 150px;
}
</style>

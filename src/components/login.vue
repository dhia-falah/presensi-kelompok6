<template>
  <div id="login">
    <div class="container d-flex justify-content-center">
      <div class="row" style="padding-top: 7%">
        <div class="col-">
          <center><h3>Silahkan Login</h3></center>
          <br />
          <label for="">Email :</label><br />
          <input
            v-model="email"
            style="border-radius: 10px; width: 8cm"
            type="username"
            placeholder="Email"
            required
          /><br /><br />
          <label for="">Password :</label><br />
          <input
            v-model="password"
            style="border-radius: 10px; width: 8cm"
            type="password"
            placeholder="Password"
            required
          /><br /><br />
          <center>
            <input
              style="border-radius: 10px; width: 5cm; background-color: white"
              type="submit"
              value="Login"
              @click="login"
            />
          </center>
          <center>
            <a href="/register"><u>Registrasi</u></a>
          </center>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      useres: {},
    };
  },
  methods: {
    async getUsers() {
      const user = await axios.get("http://localhost:3000/useres");
      this.useres = user.data;
    },
    login() {
      const login = this.useres.find(
        (data) => data.email === this.email && data.password === this.password
      );
      if (login === undefined) {
        alert("Email Or Password not found");
      } else {
        var convertToString = JSON.stringify(login);
        sessionStorage.setItem("USER_DATA", convertToString);
        this.$router.push("/");
        window.location.reload();
      }
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

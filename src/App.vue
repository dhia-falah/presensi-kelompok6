<template>
  <div id="app">
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <img src="./assets/download.png" style="width: 70px" />
      <p>
        <b>SMK Bina Nusantara<br />Semarang</b>
      </p>
      <a class="navbar-brand" href="/Beranda" style="margin-left: 50px"
        >Beranda</a
      >
      <li class="nav-item dropdown">
        <div class="dropdown">
          <button class="dropbtn" v-if="logout !== null">
            informasi perkuliahan
          </button>
          <div class="dropdown-content">
            <a v-if="roles === 'mahasiswa'" href="/siswa">Mahasiswa</a>
            <a v-if="roles === 'dosen'" href="/guru">Dosen</a>
            <a v-if="roles === 'admin'" href="/admin">Admin</a>
          </div>
        </div>
      </li>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/tentang">Tentang </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/kontak">kontak</a>
          </li>
          <li class="nav-item dropdown">
            <div class="info">
              <button class="dropbtn" v-if="logout !== null">profil</button>
              <div class="info-content">
                <a v-if="roles === 'mahasiswa'" href="/mahasiswa">Mahasiswa</a>
                <a v-if="roles === 'dosen'" href="/dosen">Dosen</a>
                <a v-if="roles === 'admin'" href="/admin">Admin</a>
              </div>
            </div>
          </li>
        </ul>
        <a style="margin-left: 900px" v-if="logout === null" href="/login"
          >Login</a
        >
        <a
          style="margin-left: 700px"
          v-if="logout !== null"
          @click="out"
          href="/"
          >Logout</a
        >
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      roles: "",
      logout: {},
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      let user = JSON.parse(sessionStorage.getItem("USER_DATA"));
      this.roles = user === null ? "" : user.role;
      this.logout = user;
    },
    out() {
      sessionStorage.clear();
    },
  },
};
</script>
<style>
.dropbtn {
  color: rgba(0, 0, 0, 0.527);
  padding: 10px;
  font-size: 16px;
  border: none;
  background-color: #f1f1f100;
  padding-top: 8px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.info {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.info-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.info-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}
.info-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover .info-content {
  display: block;
}
/* #app {
  background-color: lightcyan;
}
.navbar {
  background-color: lightslategrey;
} */
</style>

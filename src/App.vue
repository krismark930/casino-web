
<template>
  <router-view />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import socket from "@/utils/socket";
import { useAuthStore } from '@/stores/auth';
import { showToast } from 'vant'
import { PC_URL } from '@/config';

export default defineComponent({
  setup() {
    const { dispatchLogout } = useAuthStore();
    const { getProfile } = useAuthStore();
    const { setMoney } = useAuthStore();
    return {
      dispatchLogout,
      setMoney,
      getProfile,
    }
  },
  data() {
    return {

    }
  },
  computed: {
    token: function () {
      const { getToken } = useAuthStore();
      return getToken
    }
  },
  sockets: {
    logout() {
      showToast('您的帐户已禁用。')
      this.dispatchLogout();
    },
    updateMoney(currentAmount: any) {
      this.setMoney(currentAmount);
    }
  },
  methods: {
    handleResize: function() {
      const width = window.visualViewport?.width;
      console.log(width);
      if (width > 600) {
        window.location.href = PC_URL;
      }
    }
  },
  async mounted() {
    window.addEventListener("resize", this.handleResize)
    if (this.token != "") {
      setInterval(async () => {
        await this.getProfile(this.token);
      }, 10000)
    }
  }
})
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

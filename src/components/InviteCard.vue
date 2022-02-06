<template>
  <transition name="fade">
    <div class="backdrop" @click.self="closeCard">
      <div class="card">
        <span class="heading">Invite a member to Chargebee</span>
        <span class="hint">
          You can either let your team members access everything in this site,
          or assign specific roles to them.
        </span>
        <br />
        <form>
          <label>Email</label><br />
          <input v-model="email" />
          <br />
          <span class="hint">Select user access level</span><br />
          <input type="radio" value="Admin" id="admin" v-model="memberRole" />
          <label for="admin" class="radio_option">Admin</label><br />
          <span class="hint">Access everything in Chargebee</span><br />

          <input
            type="radio"
            value="Tech Support"
            id="tech_support"
            v-model="memberRole"
          />
          <label for="tech_support" class="radio_option">Tech Support</label
          ><br />
          <span class="hint"
            >User can view "Subscriptions" and "Product Catalog" tabs. Can also
            view, add comments to, send, download individual Invoices/Credit
            Notes</span
          ><br />
          <input
            type="radio"
            value="Analyst"
            id="analyst"
            v-model="memberRole"
          />
          <label for="analyst" class="radio_option">Analyst</label><br />
          <span class="hint"
            >In addition to Tech Support level access, user will have access to
            the SaaS metrics report.</span
          >
        </form>
        <br />
        <button @click="invite" class="invite_button_theme">Invite</button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
//import { MemberRole } from "@/types";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "InviteCard",
  setup() {
    console.log("setup method invite member card");
    const email = ref<string>("");
    const memberRole = ref(" ");

    //get name
    const name = computed(() => {
      const nameArray = email.value.split("@")[0];
      const nameFull=nameArray.split(".")
      console.log(nameArray);
      if (nameArray.length >= 2) {
        return (
          nameFull[0][0].toUpperCase()+nameFull[0].slice(1)+" "+nameFull[1][0].toUpperCase()+nameFull[1].slice(1)
        );
      } else return nameFull[0];
    });
    const store = useStore();
    return {
      email,
      memberRole,
      //ger id based on list size, automatically
      //handler for adding events
      invite: () =>
        store.commit("addMember", {
          id: 0,
          name: name,
          role: memberRole,
          email: email,
        }),
    };
  },
  methods: {
    closeCard() {
      this.$emit("close_card");
    },
  },
});
</script>

<style scoped>
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.card {
  width: 60%;
  height: 50% auto;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
  padding: 20px;
}

.invite_button_theme {
  border-radius: 4px;
  width: 15%;
  padding: 5px;
  background: #692ce3;
  color: white;
  z-index: 9998;
}

.heading {
  width: max-content;
  font-family: sans-serif;
  font-size: 20px;
}

.hint {
  color: grey;
  font-size: 14px;
}

.radio_option {
  font-size: 16px;
  color: #332e2e;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

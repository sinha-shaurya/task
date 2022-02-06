<template>
  <div class="base_margin">
    <span class="page_heading">Team Members</span>
    <span class="member_count">({{ memberList.length }})</span>
    <button @click="inviteMemberShow" class="invite_button">
      + Invite Members
    </button>
    <br />
    <transition name="fade">
    <invite-card v-show="showInvite" @close_card="closeCardInvite" />
    </transition>
    <br />
    <div v-for="member in memberList" :key="member.id">
      <MemberCard :member="member" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import MemberCard from "./components/MemberCard.vue";
import InviteCard from "./components/InviteCard.vue";

export default defineComponent({
  name: "App",
  components: {
    MemberCard,
    InviteCard,
  },
  setup() {
    const store = useStore();
    const showInvite = ref(false);
    const inviteMemberShow = () => {
      console.log("invoked");
      showInvite.value = true;
    };

    const closeCardInvite = () => {
      showInvite.value = false;
    };
    return {
      memberList: computed(() => store.getters.getMembers),
      inviteMemberShow,
      showInvite,
      closeCardInvite,
    };
  },
});
</script>
<style scoped>
.base_margin {
  padding: 50px;
  background: #eeedf6;
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
}

.invite_button {
  float: right;
  border-radius: 4px;
  width: 10%;
  padding: 5px;
  background: #692ce3;
  color: white;
  z-index: 9998;
}

.page_heading {
  font-size: 24px;
}

.member_count {
  font-size: 24px;
  color: grey;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

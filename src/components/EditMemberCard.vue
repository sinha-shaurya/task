<template>
  <div class="backdrop" @click.self="closeEditMemberCard">
    <div class="card">
      <span class="heading">Change role for {{ props.member.email }}</span>
      <span class="hint"> Select user access level </span>
      <br />
      <form>
        <input type="radio" value="Admin" id="admin" v-model="memberRole" />
        <label for="admin" class="radio_option">Admin</label><br />
        <span class="hint">Access everything in Chargebee</span>
        <br />

        <input
          type="radio"
          value="Tech Support"
          id="tech_support"
          v-model="memberRole"
        />
        <label for="tech_support" class="radio_option">Tech Support</label>
        <br />
        <span class="hint"
          >User can view "Subscriptions" and "Product Catalog" tabs. Can also
          view, add comments to, send, download individual Invoices/Credit
          Notes</span
        ><br />
        <input type="radio" value="Analyst" id="analyst" v-model="memberRole" />
        <label for="analyst" class="radio_option">Analyst</label><br />
        <span class="hint"
          >In addition to Tech Support level access, user will have access to
          the SaaS metrics report.</span
        >
      </form>
      <br />
      <button @click="edit" class="update_button_theme">Update</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Member } from "@/types";
import { defineComponent, PropType, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "EditMemberCard",
  props: {
    member: {
      required: true,
      type: Object as PropType<Member>,
    },
  },
  setup(props) {
    const store = useStore();
    const memberRole = ref("");
    return {
      props,
      memberRole,
      edit: () =>
        store.commit("editMember", { id: props.member.id, role: memberRole }),
    };
  },
  methods: {
    closeEditMemberCard() {
      this.$emit("close_edit_member");
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

.update_button_theme {
  border-radius: 4px;
  width: 15%;
  padding: 5px;
  background: #692ce3;
  color: white;
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
</style>
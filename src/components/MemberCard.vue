<template>
  <div class="member-card">
    <span class="top_theme">{{ member.name }}</span>
    <span class="member_role">({{ member.role }})</span>
    <br />
    <span class="email_theme">{{ member.email }}</span>
    <i class="bi bi-trash delete-theme" @click="toggleDeleteMember"></i>
    <i class="bi bi-pencil-square edit-theme" @click="toggleEditCard"></i>
    <edit-member-card
      :member="propMember"
      v-show="editCard"
      @close_edit_member="toggleEditCard"
    />
    <confirm-delete-member-card
      :member="propMember"
      v-show="deleteMemberCard"
      @close_delete_member="toggleDeleteMember"
    />
  </div>
</template>

<script lang="ts">
import { Member } from "@/types";
import { defineComponent, PropType, ref } from "vue";

import EditMemberCard from "./EditMemberCard.vue";
import ConfirmDeleteMemberCard from "./ConfirmDeleteMember.vue";

export default defineComponent({
  name: "MemberCard",
  components: { EditMemberCard, ConfirmDeleteMemberCard },
  props: {
    //get member object as props
    member: {
      required: true,
      type: Object as PropType<Member>,
    },
  },
  setup(props) {
    const editCard = ref(false);
    const deleteMemberCard = ref(false);
    const propMember = ref(props.member);

    console.log(props.member);

    return { editCard, deleteMemberCard, props, propMember };
  },
  methods: {
    toggleEditCard() {
      this.editCard = !this.editCard;
      console.log(this.editCard);
    },
    toggleDeleteMember() {
      this.deleteMemberCard = !this.deleteMemberCard;
    },
  },
});
</script>

<style scoped>
.top_theme {
  color: black;
  font-size: 18px;
  margin: 10px;
}

.email_theme {
  color: grey;
  font-size: 16px;
}

.member-card {
  border-radius: 8px;
  background: white;
  height: 40%;
  padding: 10px;
}

.delete-theme {
  float: right;
  color: red;
}

.edit-theme {
  float: right;
}
.member_role {
  font-size: 18px;
  color: grey;
}
</style>

<template>
  <div
    class="backdrop"
    @click.self="closeOverflowCard"
    
  >
    <div class="card">
      <button @click="toggleEditMember">Edit Member</button><br />
      <button>Remove</button>

      <edit-member-card v-show="false" @close_edit_member="toggleEditMember" :id="id"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Member } from "@/types";
import { defineComponent, PropType, ref } from "vue";
import { useStore } from "vuex";
import EditMemberCard from "./EditMemberCard.vue"

export default defineComponent({
  name: "OverflowCard",
  components:{
      EditMemberCard
  },
  props:{
      id:{
          required:true,
          type:Number
      }
  },
  setup() {
    const store = useStore();
    const editMember = ref(false);
    console.log(store);
    return { editMember };
  },
  methods: {
    closeOverflowCard() {
      this.$emit("close_overflow");
    },
    toggleEditMember() {
        this.editMember=!this.editMember;
    },
  },
});
</script>


<style>
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
}

.card {
  width: 100px;
  height: 100px;
  margin: 10px;
  background: white;
  border-radius: 10px;
}
</style>
<template>
  <div class="backdrop" @click.self="closeDeleteMember">
    <div class="card">
      <span class="warning_theme">support@chargebee.com will not be able to access this site.</span>
      
      <button @click="closeDeleteMember" class="btn warning">Cancel</button>
      <button @click="deleteMember" class="btn confirm">Confirm</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Member } from "@/types";
import { defineComponent, PropType } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ConfirmDeleteMember",
  props: {
    member: {
      required: true,
      type: Object as PropType<Member>,
    },
  },
  setup(props) {
    const store = useStore();
    console.log(`delete member id ${props.member.id}`)
    return {
      deleteMember: () => 
        store.commit("removeMember", {
          id: props.member.id,
        })
    };
  },
  methods: {
    closeDeleteMember() {
      this.$emit("close_delete_member");
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
  width: 30%;
  height: min-content;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
  align-content: center;
}

.warning_theme{
    font-size: 16px;
    align-content: center;
}

.btn {
  color: black;
  width: 20%;
  cursor: pointer;
}

.warning {
    background-color: white;
  border-color: #ff9800;
  color: orange;
}
.confirm{
    background-color: #ff9800;
    color: white;
}
</style>

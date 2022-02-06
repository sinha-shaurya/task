import { Member, MemberRole } from '@/types'
import { createStore } from 'vuex'



export default createStore({
  state: {
    members: [
      { id: 1, name: "Shaurya", role: "Admin", email: "shaurya.sinha@chargebee.com" }
    ] as Member[],
    size: 5
  },
  mutations: {
    addMember(state, member: Member): void {
      if (member.id == 0)
        member.id = state.members.length + 1;
      state.members.push(member);
    },
    removeMember(state, id: number): void {
      state.members.splice(id-1,1);
      state.members.forEach(element => {
        console.log(element.id);
      });
    },
    //destructuring property in payload
    editMember(state, { id, role }: { id: number, role: MemberRole }) {
      for (let i = 0; i < state.members.length; i++) {
        if (state.members[i].id == id) {
          state.members[i].role = role
        }
      }
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getMembers: ({ members }) => members,
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: JSON.parse(localStorage.getItem("notes") || "[]"),
  },
  getters: {
    notes(state) {
      return state.notes;
    },
  },
  mutations: {
    saveNotes(state) {
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    createNote(state, note) {
      state.notes.push(note);
      this.commit("saveNotes");
    },
    updateNote(state, updatedNote) {
      const index = state.notes.findIndex((note) => note.id === updatedNote.id);
      if (index !== -1) {
        Vue.set(state.notes, index, updatedNote);
        this.commit("saveNotes");
      }
    },
    deleteNote(state, noteId) {
      state.notes = state.notes.filter((note) => note.id !== noteId);
      this.commit("saveNotes");
    },
  },
  actions: {
    createNote({ commit }, note) {
      note.id = Date.now();
      commit("createNote", note);
    },
    updateNote({ commit }, updatedNote) {
      commit("updateNote", updatedNote);
    },
    deleteNote({ commit }, noteId) {
      commit("deleteNote", noteId);
    },
  },
  modules: {},
});

<template>
  <div class="home">
    <h1 class="page-title">CRUD-Notes</h1>

    <div class="notes-container">
      <NoteTable :notes="notes" @editNote="editNote" @deleteNote="deleteNote" />
      <PopupNotes :note="selectedNote" @save="saveNote" />
    </div>
  </div>
</template>

<script>
import NoteTable from '@/components/TableofNotes.vue'
import PopupNotes from '@/components/PopupNotes.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    NoteTable,
    PopupNotes
  },
  computed: {
    ...mapGetters(['notes']),
  },
  data() {
    return {
      selectedNote: null
    };
  },
  methods: {
    ...mapActions(['createNote', 'updateNote', 'deleteNote']),
    editNote(note) {
      this.selectedNote = note;
    },
    saveNote(note) {
      if (note.id) {
        this.updateNote(note);
      } else {
        this.createNote(note);
      }
      this.selectedNote = null;
    },
    deleteNoteConfirmation(noteId) {
      this.deleteNote(noteId);
    }
  }
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.popup-container {
  margin-bottom: auto; 
}

.notes-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
</style>

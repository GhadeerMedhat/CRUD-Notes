<template>
    <div>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Complete</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(note, index) in notes" :key="note.id" :class="{ 'editing': note.editing }">
            <td v-if="!note.editing">{{ note.title }}</td>
            <td v-else>
              <input v-model="note.title" class="input-field">
            </td>
            <td v-if="!note.editing">{{ note.description | truncate }}</td>
            <td v-else>
              <textarea v-model="note.description" class="input-field"></textarea>
            </td>
            <td>
              <span v-if="note.complete">
                <i class="fas fa-check-circle"></i> Completed
              </span>
              <span v-else>
                <i class="fas fa-times-circle"></i> Not Completed
              </span>
            </td>
            <td>
              <button @click="editNote(index)" v-if="!note.editing" class="edit-btn">Edit</button>
              <button @click="saveEdit(index)" v-if="note.editing" class="save-btn">Save</button>
              <button @click="deleteNoteConfirmation(note.id)" class="delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: ['notes'],
    methods: {
      editNote(index) {
        this.$set(this.notes[index], 'editing', true);
      },
      saveEdit(index) {
        this.$set(this.notes[index], 'editing', false);
        // Emit event to save the edited note
        this.$emit('editNote', this.notes[index]);
      },
      deleteNoteConfirmation(noteId) {
      
      if (confirm('Are you sure you want to delete this note?')) {
        
        this.$emit('deleteNote', noteId);
      }
    }
    },
    filters: {
  truncate(value) {
    if (!value) return ''; // edit Iam Return empty string if value is undefined or null
    if (value.length > 15) {
      return value.substring(0, 15) + '...';
    }
    return value;
  }
}

  }
  </script>
  
  
  <style scoped>
.notes-container {
  max-height: 400px; 
  overflow-y: auto;
  margin-top: 20px;
}

.notes-table {
  width: 100%;
  border-collapse: collapse;
}

.notes-table th, .notes-table td {
  border: 1px solid #ccc;
  padding: 8px;
}

.notes-table th {
  background-color: #f2f2f2;
  text-align: left;
}

.input-field {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.edit-btn, .save-btn, .delete-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 5px;
  border-radius: 3px;
}

.edit-btn:hover, .save-btn:hover, .delete-btn:hover {
  background-color: #0056b3;
}
.confirm-dialog {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.confirm-dialog h2 {
  margin-top: 0;
  margin-bottom: 10px;
}

.confirm-dialog p {
  margin-bottom: 20px;
}

.confirm-dialog .btn-container {
  text-align: center;
}

.confirm-dialog .btn {
  padding: 8px 16px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.confirm-dialog .btn-primary {
  background-color: #007bff;
  color: #fff;
}

.confirm-dialog .btn-secondary {
  background-color: #ccc;
  color: #000;
}
</style>
  
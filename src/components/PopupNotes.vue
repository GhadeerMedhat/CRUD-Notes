<template>
  <div class="popup">
    <input v-model="editedNote.title" placeholder="Title" class="input-field">
    <textarea v-model="editedNote.description" placeholder="Description" class="input-field"></textarea>
    <input type="checkbox" v-model="editedNote.complete"> Complete
    <div class="button-container">
      <button @click="save" class="save-button">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['note'],
  data() {
    return {
      editedNote: { ...this.note }
    };
  },
  methods: {
    save() {
      this.$emit('save', this.editedNote);
      this.editedNote = {}; // Reset editedNote after saving
    }
  }
}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.input-field {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button-container {
  text-align: right;
}

.save-button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.save-button:hover {
  background-color: #45a049;
}
</style>

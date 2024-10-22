// Function to save the note to local storage
function saveNoteToLocalStorage(note) {
    // Retrieve existing notes from local storage (if any)
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    
    // Add the new note to the array
    notes.push(note);
    
    // Save the updated notes array to local storage
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to display saved notes on the page
function displayNotes() {
    const noteList = document.getElementById('noteList');
    noteList.innerHTML = ''; // Clear the list before displaying

    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = `Title: ${note.title} - Content: ${note.content}`;
        noteList.appendChild(li);
    });
}

// Event listener for the form submission
document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the title and content from the input fields
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create a note object
    const note = {
        title: title,
        content: content
    };

    // Save the note to local storage
    saveNoteToLocalStorage(note);

    // Clear the form fields
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';

    // Display the updated notes list
    displayNotes();
});

// Display notes on page load
window.onload = function() {
    displayNotes();
};

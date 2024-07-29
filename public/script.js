document.addEventListener('DOMContentLoaded', () => {
    const addnote = document.getElementById("add-note");
    const popup = document.querySelector(".popup");
    const addbtn = document.getElementById("Add");
    const cancelbtn = document.getElementById("Cancel");
    const noteSec = document.querySelector("main");
    const overlay = document.getElementById("overlay");
    const textarea = document.getElementById("notes-page");
    const save = document.getElementById("save");

    // Function to create a new note
    const createNote = (noteTitle, noteDate, noteDesc) => {
        const noteCard = document.createElement("div");
        noteCard.classList.add("notes");

        noteCard.innerHTML = `
            <div class="info note-card">
                <h3>${noteTitle}</h3>
                <p><i class="fa-regular fa-calendar-check"></i> ${noteDate}</p>
                <p class="description">${noteDesc}</p>
            </div>
            <button class="button-29 edit-btn" role="button"><i class="fa-solid fa-pencil"></i></button>
            <button class="button-s save-btn" role="button"><i class="fa-solid fa-floppy-disk"></i></button>
            <button class="button-t trash-btn" role="button"><i class="fa-solid fa-trash-can"></i></button>
        `;

        noteSec.appendChild(noteCard);

        // Update the total notes count
        updateTotalNotes();

        // Clear input fields
        document.getElementById("task-name").value = '';
        document.getElementById("task-date").value = '';
        document.getElementById("task-desc").value = '';
    };

    // Handle adding new notes
    addbtn.addEventListener('click', (evt) => {
        const form = document.getElementById("task-form");
        if (form.checkValidity()) {
            evt.preventDefault();
            const noteTitle = document.getElementById("task-name").value;
            const noteDate = document.getElementById("task-date").value;
            const noteDesc = document.getElementById("task-desc").value;
            createNote(noteTitle, noteDate, noteDesc);
            popup.style.display = 'none';
            overlay.style.display = 'none';
        } else {
            form.reportValidity();
        }
    });

    // Show popup for adding a new note
    addnote.addEventListener('click', (evt) => {
        evt.preventDefault();
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Hide popup and overlay on cancel
    cancelbtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Handle edit button click
    document.addEventListener('click', (event) => {
        if (event.target.closest('.edit-btn')) {
            event.preventDefault();

            const noteCard = event.target.closest('.notes');
            const noteTitle = noteCard.querySelector('h3').innerText;
            const noteDate = noteCard.querySelector('p i').nextSibling.textContent.trim();
            const noteDesc = noteCard.querySelector('.description').innerText;

            // Hide all note cards
            document.querySelectorAll('.notes').forEach(card => {
                card.style.display = 'none';
            });

            // Show the textarea and populate with selected note's details
            const firstNoteCard = document.querySelector('.notes');
            firstNoteCard.style.display = 'flex';
            firstNoteCard.querySelector('h3').innerText = noteTitle;
            firstNoteCard.querySelector('p i').nextSibling.textContent = ` ${noteDate}`;
            firstNoteCard.querySelector('.description').innerText = noteDesc;
            if(textarea.style.display === 'flex'){
                textarea.style.display = 'none';
                save.style.display = 'none';
            }else{
            textarea.style.display = 'flex';
            save.style.display = 'flex';}
        }
    });

    // Function to update total notes count
    const updateTotalNotes = () => {
        const totalNotes = document.querySelectorAll('.notes').length;
        document.querySelector('.total-notes p').innerText = `Total Notes: ${totalNotes}`;
    };
});

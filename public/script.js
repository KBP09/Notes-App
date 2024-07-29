const addnote = document.getElementById("add-note");
const popup = document.querySelector(".popup");
const addbtn = document.getElementById("Add");
const cancelbtn = document.getElementById("Cancel");
const noteSec = document.querySelector(".notes");
const overlay = document.getElementById("overlay");
const edit = document.getElementById("edit");
const trash = document.getElementById("trash");
const textarea = document.getElementById("notes-page");
const save = document.getElementById("save");

const notes = () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';

    let noteTitle = document.getElementById("task-name").value;
    let noteDate = document.getElementById("task-date").value;
    let noteDesc = document.getElementById("task-desc").value;

    const htmltext = `
        <div class="notes">
            <div class="info" id="note-card">
                <h3>${noteTitle}</h3>
                <p><i class="fa-regular fa-calendar-check"></i> ${noteDate}</p>
                <p id="description">${noteDesc}</p>
            </div>
            <button class="button-29" role="button" id="edit"><i class="fa-solid fa-pencil"></i></button>
            <button class="button-s" role="button" id="save"><i class="fa-solid fa-floppy-disk"></i></button>
            <button class="button-t" role="button" id="trash"><i class="fa-solid fa-trash-can"></i></button>
        </div>`;

    const main = document.querySelector("main");
    main.insertAdjacentHTML('beforeend', htmltext);

    
    document.getElementById("task-name").value = '';
    document.getElementById("task-date").value = '';
    document.getElementById("task-desc").value = '';
};

addbtn.addEventListener('click', (evt) => {
    const form = document.getElementById("task-form");
    if (form.checkValidity()) {
        evt.preventDefault();
        notes();
    } else {
        form.reportValidity();
    }
});

const notesadd = () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
};

addnote.addEventListener('click', (evt) => {
    evt.preventDefault();
    notesadd();
});

cancelbtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

document.addEventListener('click', (event) => {
    if (event.target && event.target.closest('#edit')) {
        event.preventDefault();
        if (textarea.style.display === "flex") {
            textarea.style.display = "none";
            save.style.display = "none";
        } else {
            textarea.style.display = "flex";
            save.style.display = "flex";
        }
    }
});

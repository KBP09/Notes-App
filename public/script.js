const addnote = document.getElementById("add-note");
const popup = document.querySelector(".popup");
const addbtn = document.getElementById("Add");
const cancelbtn = document.getElementById("Cancel");
const noteSec = document.querySelector(".notes");
const noteCard = document.getElementById("note-card"); 


const notesadd = () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
};

addnote.addEventListener('click', (evt) => {
    evt.preventDefault();
    notesadd();
});

const notes = () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
    let noteTitle = document.getElementById("task-name").value;
    let noteDate = document.getElementById("task-date").value;
    let noteDesc = document.getElementById("task-desc").value;
    const htmltext = `<div class="notes">
            <div class="info" id="note-card">
                <h3>${noteTitle}</h3>
                <p><i class="fa-regular fa-calendar-check">${noteDate}</i> 2024-07-10</p>
                <p id="description">${noteDesc}</p>
            </div>
        </div>`
    const main = document.querySelector("main");
    main.innerHTML += htmltext;
};

addbtn.addEventListener('click',(evt)=>{
    evt.preventDefault();
    notes();
});

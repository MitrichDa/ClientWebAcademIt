"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var newEntryText = document.getElementById("new-entry-text");
    var addEntryButton = document.getElementById("add-entry");
    var todoList = document.getElementById("list");

    var listElementHTML = "<div><span></span>" +
        "<button type='button' class='btn btn-primary'>Change</button>" +
        "<button type='button' class='btn btn-danger'>Delete</button></div>" +
        "<div style='display: none'><input type='text'>" +
        "<button type='button' class='btn btn-success'>Save</button>" +
        "<button type='button' class='btn btn-warning'>Cancel</button></div>";

    addEntryButton.addEventListener("click", function () {
        var newEntry = document.createElement("li");
        newEntry.classList.add("list-group-item");
        newEntry.innerHTML = listElementHTML;

        if (newEntryText.value === "") {
            alert("Введите текст заметки");
            return;
        }
        var entryNormal = newEntry.children[0];
        var entryChange = newEntry.children[1];

        var entryText = entryNormal.children[0];
        entryText.innerText = newEntryText.value;

        var textReplaceField = entryChange.children[0];
        var changeButton = entryNormal.children[1];
        changeButton.addEventListener("click", function () {
            textReplaceField.value = entryText.innerText;
            entryNormal.style.display = "none";
            entryChange.style.display = "block";
        });

        var deleteButton = entryNormal.children[2];
        deleteButton.addEventListener("click", function () {
            newEntry.parentElement.removeChild(newEntry);
        });

        var saveButton = entryChange.children[1];
        saveButton.addEventListener("click", function () {
            if (textReplaceField.value === "") {
                alert("Введите текст заметки");
                return;
            }
            entryNormal.style.display = "block";
            entryChange.style.display = "none";

            entryText.innerText = textReplaceField.value;
            textReplaceField.value = "";
        });

        var cancelButton = entryChange.children[2];
        cancelButton.addEventListener("click", function () {
            entryNormal.style.display = "block";
            entryChange.style.display = "none";
            textReplaceField.value = "";
        });

        newEntryText.value = "";
        todoList.appendChild(newEntry);
    })
});
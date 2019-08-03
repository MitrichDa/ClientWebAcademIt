"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var newEntryText = document.getElementById("new-entry-text");
    var addEntryButton = document.getElementById("add-entry");
    var todoList = document.getElementById("list");

    var listElementHTML = "<div><span></span>" +
        "<button type='button'>Change</button>" +
        "<button type='button'>Delete</button></div>" +
        "<div style='display: none'><input type='text'>" +
        "<button type='button'>Save</button>" +
        "<button type='button'>Cancel</button></div>";

    addEntryButton.addEventListener("click", function () {
        var newEntry = document.createElement("li");
        newEntry.innerHTML = listElementHTML;

        if (newEntryText.value === "") {
            alert("Введите текст заметки");
            return;
        }
        var entryNormal = newEntry.children[0];
        var entryChange = newEntry.children[1];

        entryNormal.children[0].innerText = newEntryText.value;

        entryNormal.children[1].addEventListener("click", function () {
            entryChange.children[0].value = entryNormal.children[0].innerText;
            entryNormal.setAttribute("style", "display: none");
            entryChange.setAttribute("style", "display: block");
        });

        entryNormal.children[2].addEventListener("click", function () {
            newEntry.parentElement.removeChild(newEntry);
        });

        entryChange.children[1].addEventListener("click", function () {
            if (entryChange.children[0].value === "") {
                alert("Введите текст заметки");
                return;
            }
            entryNormal.setAttribute("style", "display: block");
            entryChange.setAttribute("style", "display: none");

            entryNormal.children[0].innerText = entryChange.children[0].value;
            entryChange.children[0].value = "";
        });

        entryChange.children[2].addEventListener("click", function () {
            entryNormal.setAttribute("style", "display: block");
            entryChange.setAttribute("style", "display: none");
            entryChange.children[0].value = "";
        });

        newEntryText.value = "";
        todoList.appendChild(newEntry);
    })
});
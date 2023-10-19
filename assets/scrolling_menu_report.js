// Constantes des characteres speciaux
const LITTLE_DOWN_ARROW = "\u2bc6";
const LITTLE_UP_ARROW = "\u2bc5";
const RIGHT_ARROW = "\u25b6";
const DOWN_ARROW = "\u25bc";

// Initialise tout ce qui est necessaire au JS
function init()
{
    // Liste des sessions et de leurs boutons
    result_table_list = document.getElementsByClassName("hide");
    button_menu_list = document.getElementsByClassName("button_session_title");

    // Liste des descriptions trop longues et de leurs boutons
    more_button_list = document.getElementsByClassName("more_button");
    more_text_list = document.getElementsByClassName("more_text");

    /* Rearengement de la toolbar pour que le titre soit bien positioné */
    tool_bar = document.getElementById("tool_bar");
    tool_bar.style.marginBottom = "-" + tool_bar.clientHeight + "px"
}

// Gere le click sur les sessions d'index i
function show_scrolling_menu(i)
{
    // Cache la session
    if (result_table_list[i].style.display == "table") {
        result_table_list[i].style.display = "none";
        button_menu_list[i].textContent = RIGHT_ARROW;
    // Montre la session
    } else {
        result_table_list[i].style.display = "table";
        button_menu_list[i].textContent = DOWN_ARROW;
    }
    return false
}

// Gere le click sur les boutons d'index i qui cachent les textes
function show_more(i)
{
    // Cache le description trop longue
    if (more_text_list[i].style.display == "inline") {
        more_text_list[i].style.display = "none";
        more_button_list[i].textContent = LITTLE_DOWN_ARROW;
    } else {
    // Montre le description trop longue
        more_text_list[i].style.display = "inline";
        more_button_list[i].textContent = LITTLE_UP_ARROW;
    }
    return false
}

function collapse_all()
{
    // Cache les descriptions trop longues
    var length = more_text_list.length
    for (i = 0; i < length; i++) {
        if (more_text_list[i].style.display == "inline") {
            more_text_list[i].style.display = "none";
            more_button_list[i].textContent = LITTLE_DOWN_ARROW;
        }
    }

    // Cache les tableaux de resultats des sessions
    length = result_table_list.length
    for (i = 0; i < length; i++) {
        if (result_table_list[i].style.display == "table") {
            result_table_list[i].style.display = "none";
            button_menu_list[i].textContent = RIGHT_ARROW;
        }
    }
    return false
}

function extend_all()
{
    // Etends les tableaux de resultats des sessions
    var length = result_table_list.length
    for (i = 0; i < length; i++) {
        result_table_list[i].style.display = "table";
        button_menu_list[i].textContent = DOWN_ARROW;
    }

    // Etends les descriptions trop longues
    length = more_text_list.length
    for (i = 0; i < length; i++) {
        more_text_list[i].style.display = "inline";
        more_button_list[i].textContent = LITTLE_UP_ARROW;
    }
    return false
}

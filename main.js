const first_pic = document.querySelector("#me-pic");
const about_me_parent = document.querySelector("#about-me");
const header = document.querySelector("#head");
const sidebar = document.querySelector("#side-bar");
const sidebar_cont = document.querySelector("#side-bar-container");
const load_zone = document.querySelector("#loading-bar-space");

const software_icon_home = document.querySelector("#icons-home");

let icon_count = 0;

window.onload = function() {
    transition_icons(0);
}

function transition_icons(ind)
{
    software_icon_home.removeChild(software_icon_home.firstChild);
    
    const new_pic = document.createElement('img');
    new_pic.src = "Images/languages/" + ind + ".png";
    new_pic.classList.add("icon-pic-new");
    new_pic.type = "icon-pic-new";
    if(ind < 2)
    {
        ind += 1;
    }
    else
    {
        ind = 0;
    }

    new_pic.addEventListener('animationend', () => {
        transition_icons(ind);
    });

    software_icon_home.appendChild(new_pic);
}




function clean_zone() {
    
    //function to be called every time the main window is covered by the load screen
    //will remove EVERY child element from the main div
    var first = about_me_parent.firstChild;

    while (first) {
            first.remove();
            first = about_me_parent.firstChild;
        }
}

function OpenIcon() {
    Create_About_Me();
    Create_header();
    Create_sidebar();   
}

fucn


function Create_About_Me() {
    //create the description for the about me file
    const description = document.createElement('h3');
    description.classList.add("me-description");
    description.type = "me-description";
    description.innerText = "Hello my name is Liam Fortune. and im a goofy goober";
    //create the description for the about me file
    const new_pic = document.createElement('img');
    new_pic.src = "me pic 1.jpg";
    new_pic.classList.add("me-pic-new");
    new_pic.type = "me-pic-new";
    //append the new items to the parent element
    about_me_parent.appendChild(description);
    about_me_parent.appendChild(new_pic);
    //remove the original image
    about_me_parent.removeChild(first_pic);
}

function Create_header() {
    //adds the name on the top of the screen
    const my_name = document.createElement('h1');
    my_name.classList.add("my-name");
    my_name.type = "my-name";
    my_name.innerText = "Liam Fortune";
    my_name.onclick = function(event) { 
        Create_header();
    }

    header.appendChild(my_name);
}

function Create_sidebar() {
    //create all the sidebar elements variables
    const about_me = document.createElement('h2');
    const my_skills = document.createElement('h2');
    const my_works = document.createElement('h2');
    const contact_me = document.createElement('h2');
    const sidebar_button = document.createElement('img');
    const sidebar_cont = document.createElement('div');

    //add classlist to all elements in the sidebar
    about_me.classList.add("side-button");
    my_skills.classList.add("side-button");
    my_works.classList.add("side-button");
    contact_me.classList.add("side-button");
    sidebar_button.classList.add("side-togg");

    //add types to all elements in the sidebar
    about_me.type = "side-button";
    my_skills.type = "side-button";
    my_works.type = "side-button";
    contact_me.type = "side-button";
    sidebar_button.type = "side-togg";

    //add innerText to all elements in the sidebar
    about_me.innerText = "about me";
    my_skills.innerText = "my skills";
    my_works.innerText = "my works";
    contact_me.innerText = "contact me";
    sidebar_button.src = "3 lines.jpg";

    //add onclick to all elements in the sidebar
    about_me.onclick = function(event) { 
        StartAboutMe();
    }

    sidebar_button.onclick = function(event) { 
        toggle_side_bar();
    }

    sidebar_cont.style.display = "none";

    sidebar_button.addEventListener("click", () => {
        if(sidebar_cont.style.display == "block")
        {
            sidebar_cont.style.display = "none";
        }
        else
        {
            sidebar_cont.style.display = "block";
        }
    });

    sidebar_cont.appendChild(about_me);
    sidebar_cont.appendChild(my_skills);
    sidebar_cont.appendChild(my_works);
    sidebar_cont.appendChild(contact_me);
    sidebar.appendChild(sidebar_button);
    sidebar.appendChild(sidebar_cont);
}

function toggle_side_bar() {
    if(sidebar_cont.style.display == "block")
    {
        sidebar_cont.style.display = "none";
    }
    else
    {
        sidebar_cont.style.display = "block";
    }
}

function StartAboutMe() {
    const pogg = document.createElement("div");
    pogg.id = "load-in";
    
    if (load_zone.hasChildNodes()) {
        load_zone.replaceChild(pogg, load_zone.firstChild);
    }
    else {
        load_zone.appendChild(pogg);      
    }

    pogg.addEventListener('animationend', LoadAboutMe());
}

function LoadAboutMe() {
    clean_zone();
    LoadOut();
    const about_me_page = document.createElement("div");
    about_me_page.type = "about-me-page";
    about_me_page.id = "about-me-page";
    about_me_page.classList.add("page");
    about_me_parent.appendChild(about_me_page);
}

function LoadOut() {
    //createe the replacement for the loadscreen element
    const load_out = document.createElement("div");
    load_out.id = "loud-out";
    load_out.addEventListener('animationend', () => {
        //load_zone.removeChild(load_out);
    });
    load_zone.appendChild(load_out); 
    if (load_zone.hasChildNodes()) {
        //load_zone.replaceChild(load_out, load_zone.firstChild);
    }
    else {
        //load_zone.appendChild(load_out);      
    }
}


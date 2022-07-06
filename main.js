const first_pic = document.querySelector("#me-pic");
const about_me_parent = document.querySelector("#about-me");
const header = document.querySelector("#head");
const sidebar = document.querySelector("#side-bar");


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

    //add classlist to all elements in the sidebar
    about_me.classList.add("side-button");
    my_skills.classList.add("side-button");
    my_works.classList.add("side-button");
    contact_me.classList.add("side-button");

    //add types to all elements in the sidebar
    about_me.type = "side-button";
    my_skills.type = "side-button";
    my_works.type = "side-button";
    contact_me.type = "side-button";

    //add innerText to all elements in the sidebar
    about_me.innerText = "about me";
    my_skills.innerText = "my skills";
    my_works.innerText = "my works";
    contact_me.innerText = "contact me";

    //add onclick to all elements in the sidebar
    about_me.onclick = function(event) { 
        
        fade_page();
    }


    //apend all elements in the sidebar to the sidebar
    sidebar.appendChild(about_me);
    sidebar.appendChild(my_skills);
    sidebar.appendChild(my_works);
    sidebar.appendChild(contact_me);


}

function fade_page() {
    //create a div container to hold all the current elements on screen
    const fade_div = document.createElement('div');
    my_name.classList.add("fade");
    my_name.type = "fade";


    //if the main page has a div with the same type already loaded, then remove it from the page
    if(document.getElementById("fade") == true) {
        about_me_parent.removeChild(document.getElementById("fade"));
    }

    //removes all children from the main page and placees them in the new div container
    about_me_parent.childNodes.forEach(element => {
        about_me_parent.removeChild(element);
        element.type = "fade";
        fade_div.appendChild(element);

    });




}


function test() {

    const dupe = about_me_parent.cloneNode(true);
    
    dupe.type = "dissapearo";
    dupe.childNodes.forEach(element => {
        element.type = "dissapearo";
    });

    //e.firstElementChild can be used.
    var child = about_me_parent.lastElementChild; 
    while (child) {
        about_me_parent.removeChild(child);
        child = about_me_parent.lastElementChild;
    }

    about_me_parent.appendChild(dupe);


}

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

function OpenIcon() {
    Create_About_Me();
    Create_header();
    Create_sidebar();
    
    
}
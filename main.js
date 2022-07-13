
const software_icon_home = document.querySelector("#icons-home");

window.onload = function() {
    transition_icons(0);
}

function transition_icons(ind)
{
    software_icon_home.removeChild(software_icon_home.firstChild);
    
    const new_pic = document.createElement('img');
    new_pic.src = ind + ".png";
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





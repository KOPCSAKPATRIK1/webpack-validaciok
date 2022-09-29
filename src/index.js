
import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

import './style.css';

function toggleMode()
{
    var element = document.body;
    element.classList.toggle("dark-mode")
}

function init()
{
    console.log("Loaded");
    document.getElementById('url').addEventListener('input',ChangeKep);
    document.getElementById('width').addEventListener('change',width);
    document.getElementById('border').addEventListener('change',borderWidth);
    document.getElementById('color').addEventListener('input',borderColor);
    document.getElementById('toggleMode').addEventListener('click', toggleMode)

}

document.addEventListener('DOMContentLoaded', init)
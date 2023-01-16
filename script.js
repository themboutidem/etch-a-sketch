const small = document.getElementById('small');
const medium = document.getElementById('medium');
const large = document.getElementById('large');
const container = document.getElementById('grid-container');

function deleteChildren()
{
    container.innerHTML = "";
}

small.addEventListener('click', 
function()
{
    deleteChildren();
    for (let i=0;i<256;i++)
    {
        var attr = document.createElement('div');
        attr.setAttribute('class','grid-item');
        container.appendChild(attr);
    }
    container.style.gridTemplateRows = "repeat(16, 1fr)";
    container.style.gridTemplateColumns = "repeat(16, 1fr)";

    var div = document.getElementById('grid-container');
    var divs = div.getElementsByTagName('div');

    var draw = document.getElementById('draw');
    draw.addEventListener('click', function(){
        for(var i =0; i<divs.length; i++)
        {
            divs[i].addEventListener("mouseover", function() {
                this.style.backgroundColor = 'black';
            });
        }
    });

    var clear = document.getElementById('clear');
    clear.addEventListener("click", function(){
        for(var i =0; i<divs.length; i++)
        {
            divs[i].addEventListener("mouseover", function() {
                this.style.backgroundColor = 'white';
            });
        }
    });
}
);

medium.addEventListener('click', function(){
    deleteChildren();
    for (let i=0;i<1024;i++)
    {
        var attr = document.createElement('div');
        attr.setAttribute('class','grid-item');
        container.appendChild(attr);
    }
    container.style.gridTemplateRows = "repeat(32, 1fr)";
    container.style.gridTemplateColumns = "repeat(32, 1fr)";

    var div = document.getElementById('grid-container');
    var divs = div.getElementsByTagName('div');

    var draw = document.getElementById('draw');
    draw.addEventListener('click', function(){
        for(var i =0; i<divs.length; i++)
        {
            divs[i].addEventListener("mouseover", function() {
                this.style.backgroundColor = 'black';
            });
        }
    });

    var clear = document.getElementById('clear');
    clear.addEventListener("click", function(){
        for(var i =0; i<divs.length; i++)
        {
            divs[i].addEventListener("mouseover", function() {
                this.style.backgroundColor = 'white';
            });
        }
    });
});

large.addEventListener('click', function(){
    deleteChildren();
    for (let i=0;i<4096;i++)
    {
        var attr = document.createElement('div');
        attr.setAttribute('class','grid-item');
        container.appendChild(attr);
    }
    container.style.gridTemplateRows = "repeat(64, 1fr)";
    container.style.gridTemplateColumns = "repeat(64, 1fr)";

    var div = document.getElementById('grid-container');
    var divs = div.getElementsByTagName('div');

    var draw = document.getElementById('draw');
    draw.addEventListener('click', function(){
        for(var i =0; i<divs.length; i++)
        {
            divs[i].addEventListener("mouseover", function() {
                this.style.backgroundColor = 'black';
            });
        }
    });

    var clear = document.getElementById('clear');
    clear.addEventListener("click", function(){
        for(var i =0; i<divs.length; i++)
        {
            divs[i].addEventListener("mouseover", function() {
                this.style.backgroundColor = 'white';
            });
        }
    });
});



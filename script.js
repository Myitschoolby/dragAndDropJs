window.addEventListener('load', _ => {

    /*
    drag
    dragstart 
    dragend
    
    dragover
    dragleave
    dragenter
    drop
    */

    const dragstart = function(event) {
        this.classList.add('dragstart');

        event.dataTransfer.setData("Text", event.target.id);
    };

    const dragend = function(event) {
        this.classList.remove('dragstart');
    };

    const dragenter = function() {
        this.classList.add('dragenter');
    };

    const dragleave = function(event) {
        this.classList.remove('dragenter');
    };

    const dragover = function(event) {
        event.preventDefault();
    };

    const drop = function(event) {
        let id = '#' + event.dataTransfer.getData("Text"),
            box = document.querySelector(id);
        
        if (!box) return;

        this.appendChild(box);
        this.classList.remove('dragenter');
    };

    let containers = document.querySelectorAll('.container');

    containers.forEach((container) => {
        container.addEventListener('dragover', dragover);
        container.addEventListener('dragenter', dragenter);
        container.addEventListener('dragleave', dragleave);
        container.addEventListener('drop', drop);
    });


    const boxAdd = function() {
        let boxElem = document.createElement('div');
        boxElem.classList.add('box');

        let boxes = document.querySelectorAll('.box');
        
        boxElem.id = 'box' + (boxes.length + 1);
        boxElem.draggable = true;
        
        document.querySelectorAll('.container')[0].appendChild(boxElem);

        boxElem.addEventListener('dragstart', dragstart);
        boxElem.addEventListener('dragend', dragend);

        boxElem.addEventListener('dblclick', function() {
            this.remove();
        });
    };

    let buttonBoxAdd = document.querySelector('.button_box_add'); 

    buttonBoxAdd.addEventListener('click', boxAdd);
});


var term = document.getElementsByClassName('console')[0];
var currentCursor;
var tplCursorRow = document.getElementById('cursor-row');
var tplMessageRow = document.getElementById('message-row');

var socket = io.connect('/');
socket.on('connect', function(){
    appendMessage('socket.io connected');
});

socket.on('execOk', function(data){
    appendMessage(data);
    term.querySelector('.command-input-wrapper').innerHTML = term.querySelector('.command-input').value;
    term.querySelector('.command-input-wrapper').className = '';
    appendCursor();
});

appendCursor();

// emit exec event
function doExec(){
    socket.emit('exec', term.querySelectorAll('.command-input')[0].value);
}

function tryExec(e){
    if(e.keyCode == 13) doExec();
}

function appendCursor(){
    var t = document.importNode(tplCursorRow.content, true);
    term.appendChild(t);
    term.querySelector('.command-input').focus();
}

function appendMessage(msg){
    var t = document.importNode(tplMessageRow.content, true);
    t.querySelectorAll('.message')[0].textContent = msg;
    term.appendChild(t);
}


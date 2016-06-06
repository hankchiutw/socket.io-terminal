
// models
var term = document.getElementsByClassName('console')[0];
var currentCursor;
var tplCursorRow = document.getElementById('cursor-row');
var tplMessageRow = document.getElementById('message-row');
var tplResultRow = document.getElementById('result-row');

// setup socket.io
var socket = io.connect('/');
socket.on('connect', boot);

socket.on('execOk', function(data){
    appendResult(data);
    resetCursor();
});

socket.on('messageOk', function(data){
    appendMessage(data);
    resetCursor();
});


/** implements */

function boot(){
    socket.emit('message', 'client connected: '+navigator.userAgent);

    term.addEventListener('click', function(){
        term.querySelector('.command-input').focus();
    });
}

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
    t.querySelector('.message').textContent = msg;
    t.querySelector('.time').textContent = '['+new Date().toISOString()+']';
    term.appendChild(t);
}

function appendResult(data){
    var t = document.importNode(tplResultRow.content, true);
    t.querySelector('.result').innerHTML = '<pre>'+data+'</pre>';
    term.appendChild(t);
}

function resetCursor(){
    if(term.querySelector('.command-input')){
        term.querySelector('.command-input-wrapper').innerHTML = term.querySelector('.command-input').value;
        term.querySelector('.command-input-wrapper').className = '';
    }
    appendCursor();
}

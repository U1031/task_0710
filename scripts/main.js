var open_modal = document.getElementById('open_modal');
var modal_page = document.getElementById('modal_page');
var close_btn = document.getElementById('close_btn');
var save_btn = document.getElementById('save_btn');
var content = document.getElementById('content');
var close = document.getElementById('close');
var over_lay = document.getElementById('over_lay');


open_modal.onclick = function(){
    over_lay.style.display = "block";
    modal_page.style.display = "block";
}

close_btn.onclick = function(){
    modal_page.style.display = "none";
    over_lay.style.display = "none";
}

save_btn.onclick = function(){
    modal_page.style.display = "none";
    over_lay.style.display = "none";
}

close.onclick = function(){
    modal_page.style.display = "none";
    over_lay.style.display = "none";
}

over_lay.onclick = function(){
    modal_page.style.display = "none";
    over_lay.style.display = "none";
}
(function forgetMeNot(){
    var textfields = document.querySelectorAll("textarea, *[contenteditable=true]");
    for (var i=0; i < textfields.length; i++)
    {
        var el = textfields[i];
        var val = localStorage.getItem(el.id);
        
        el.addEventListener("keyup", function(event){
            var el = event.currentTarget;
            localStorage.setItem(el.id, el.value || el.innerHTML);
        });
        
        if (val === null) continue;
        if (el.value === undefined)
        {
            el.innerHTML = val;
        }
        else
        {
            el.value = val;
        }
    }
}());
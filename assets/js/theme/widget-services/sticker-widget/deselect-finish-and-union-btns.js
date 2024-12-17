
//For some reason BigCommerce is not removing selection even when removing default selection for the product option on 
//back-end.  Doing it manually here in code.
              

export default function deselectFinishAndUnionBtns() {
    var url = new URL(document.location);
  
    var stickerFinishInputs = document.getElementById("stickerFinishSection").getElementsByClassName("form-radio");
    var stickerFinishBtns = Array.from(stickerFinishInputs);
        
    //Only deselects finish buttons for links that don't have params passed in.  Prevents issue where they wouldn't select on params
    if (url.href.includes("finish")) {
    } else {
        stickerFinishBtns.forEach(button => {
            button.checked = false;
        });
    }
}
export default function toggleCustomSection(section, displayValue) {
    var computedStyle = window.getComputedStyle(section.childNodes[1]);

    if (computedStyle.display === "none") {
        section.childNodes[1].style.display = displayValue;
    } else if (computedStyle.display === displayValue) {
        section.childNodes[1].style.display = "none";
    } else {
        return null;
    }
}
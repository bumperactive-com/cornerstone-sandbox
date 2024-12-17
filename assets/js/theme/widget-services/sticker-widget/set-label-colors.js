export default function setLabelColors(className, color) {
    var labels = document.getElementsByClassName(className);
    var newLabels = Array.from(labels);
    newLabels.forEach(label => {
        label.style.color = color;
    });
}



export default function hideElementsById(ids) {
    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = "none";
        }
    });
}
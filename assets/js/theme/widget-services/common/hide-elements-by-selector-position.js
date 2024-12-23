export default function hideElementsBySelectorWithPosition(selectorsWithPositions) {
    selectorsWithPositions.forEach(item => {
        const [selector, position] = item.split(',');
        const positionNum = parseInt(position, 10);
        const nodeList = document.querySelectorAll(selector);
        if (nodeList.length > positionNum) {
            nodeList[positionNum].style.display = "none";
        }
    });
}

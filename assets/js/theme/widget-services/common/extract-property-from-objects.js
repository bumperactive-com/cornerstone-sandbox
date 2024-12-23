export default function extractPropertyFromObjects(arr, propertyName) {
    return arr.map(obj => obj[propertyName]);
}
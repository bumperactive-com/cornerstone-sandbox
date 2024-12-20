export default function roundToTwoDecimals(input1, input2) {
    input1.blur(function() {
        if (this.value > 0) {
            this.value = parseFloat(this.value).toFixed(2);
        } else {
            this.value = "";
        }
    });
    input2.blur(function() {
        if (this.value > 0) {
            this.value = parseFloat(this.value).toFixed(2);
        } else {
            this.value = "";
        }
    });
}
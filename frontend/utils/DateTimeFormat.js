export default function DateTimeFormatter(str = null) {
    if (!str) return "";
    let date = new Date(str);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();
    let hr = date.getHours();
    let mi = date.getMinutes();

    if (dt < 10) {
        dt = "0" + dt;
    }
    if (month < 10) {
        month = "0" + month;
    }
    if (hr < 10) {
        hr = "0" + hr;
    }
    if (mi < 10) {
        mi = "0" + mi;
    }
    return `${dt}-${month}-${year} at ${hr}:${mi}`;
}

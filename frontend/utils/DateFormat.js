export default function DateFormatter(str = "2021-07-19T10:27:38.016Z") {
    let date = new Date(str);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
        dt = "0" + dt;
    }
    if (month < 10) {
        month = "0" + month;
    }
    return `${dt}-${month}-${year}`;
}

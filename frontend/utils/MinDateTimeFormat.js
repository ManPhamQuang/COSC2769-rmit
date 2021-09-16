export default function MinDateTimeFormatter(str = null) {
  if (!str) return "";
  let date = new Date(str);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate() + 1;

  if (dt < 10) {
      dt = "0" + dt;
  }
  if (month < 10) {
      month = "0" + month;
  }
  
  return `${year}-${month}-${dt}T00:00`;
}
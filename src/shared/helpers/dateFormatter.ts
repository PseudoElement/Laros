export default function dateFormater(date) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var day = date.getDate(); 
    var month = date.getMonth(); 
    month = months[month];
    var year = date.getFullYear(); 
    if (day < 10) {
      day = '0' + day;
    }
  
    return `${day} ${month}, ${year}`;
  }
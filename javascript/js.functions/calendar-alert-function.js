//función de alerta recordatorio de fecha importante en calendario

function calendarReminder() {
  let todayDate = new Date().toISOString().slice(0, 10);
  let onlyToday = todayDate;

  const weeklyQuarterly1 = "2025-06-04";
  const weeklyQuarterly2 = "2025-06-11";
  const weeklyQuarterly3 = "2025-06-18";
  const weeklyQuarterly4 = "2025-06-25";

  let text, image, audio;

  if (onlyToday == weeklyQuarterly1) {
    text = "¡Trimestral Semanal del 04-06!";
    image = "../../images/peligro.gif";
    audio = "../../images/sonido.alerta.mp3";
  } else if (onlyToday == weeklyQuarterly2) {
    text = "¡Trimestral Semanal del 11-06!";
    image = "../../images/peligro.gif";
    audio = "../../images/sonido.alerta.mp3";
  } else if (onlyToday == weeklyQuarterly3) {
    text = "¡Trimestral Semanal del 18-06!";
    image = "../../images/peligro.gif";
    audio = "../../images/sonido.alerta.mp3";
  } else if (onlyToday == weeklyQuarterly4) {
    text = "¡Trimestral Semanal del 25-06!";
    image = "../../images/peligro.gif";
   audio = "../../images/sonido.alerta.mp3";

  

  document.getElementById("calendar-reminder").innerHTML = text;
  document.getElementById("image-reminder").src = image;

  // agrego el sonido de alerta
  let audioElement = document.getElementById("sound-reminder");
  audioElement.src = audio;
  audioElement.play();
}

// llamo a la función cuando se carga la página
window.onload = calendarReminder;
// reproduce el sonido de alerta
let audioElement = document.getElementById("sound-reminder");
audioElement.src = audio;
audioElement.play();

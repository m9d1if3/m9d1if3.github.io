const clock = document.querySelector("#clock");

function getData() {
   const clockData = new Date();

   /*
      padStart(숫자, string)  => 해당 문자열이 숫자만큼의 length를 가지지 않으면, 앞에 string을 추가
      padEnd(숫자, string)    => 해당 문자열이 숫자만큼의 length를 가지지 않으면, 뒤에 string을 추가
   */
   const hours = String(clockData.getHours()).padStart(2, "0");
   const mins = String(clockData.getMinutes()).padStart(2, "0");
   const secs = String(clockData.getSeconds()).padStart(2, "0");

   clock.innerText = `${hours}:${mins}:${secs} `;
}

getData();
setInterval(getData, 1000);
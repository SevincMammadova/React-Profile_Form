export const sendPostRequest = data => {
    let xhr = new XMLHttpRequest();
    let dataInJson = JSON.stringify(data);

    xhr.open("POST", "/add-obj");
    xhr.setRequestHeader("Content-type", "application-json");
    xhr.send(dataInJson);
}

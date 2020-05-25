export const sendPostRequest = (data, cb) => {
    let xhr = new XMLHttpRequest();
    let dataInJson = JSON.stringify(data);

    xhr.open("POST", "/add-obj");
    xhr.setRequestHeader("Content-type", "application-json");
    xhr.send(dataInJson);
}
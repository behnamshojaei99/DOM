function getLink() {
    const httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = function () {
        if (httpReq.readyState === 4) {
            if (httpReq.status === 200) {
                const data = JSON.parse(httpReq.responseText);
                createList(data);
            }
        }
    }
    httpReq.open("GET", "https://my-json-server.typicode.com/ghbakhtiari/test1/flat", true);
    httpReq.send();
}

function createList(data) {
    const ul = document.createElement('ul');
    data.map(el => {
        ul.innerHTML += `
            <li><a href=${el.href}>${el.name}</a></li>
        `
    });
    document.body.append(ul);
}

getLink();
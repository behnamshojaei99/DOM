function getLink() {
    const httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = function () {
        if (httpReq.readyState === 4) {
            if (httpReq.status === 200) {
                const data = JSON.parse(httpReq.responseText);
                const x = createList(data);
                document.body.append(x)
            }
        }
    }
    httpReq.open("GET", "https://my-json-server.typicode.com/ghbakhtiari/test1/nested", true);
    httpReq.send();
}

function createList(data) {
    const ul = document.createElement('ul');
    data.map(el => {
        console.log(el)
        let text = ''
        text += `
            <li><a href=${el.href}>${el.name}</a></li>
        `;
        const myList = el.subset ? createList(el.subset) : '';
        ul.innerHTML += text;
        ul.append(myList);
    });
    return ul
}

getLink();
const container = document.querySelector('.container');
const button = document.querySelector('#next');
const loading = document.querySelector('#loading');
let page = 1;
const httpReq = new XMLHttpRequest();
const perPage = 3;
function getUsers(page = 1) {

    httpReq.onreadystatechange = function () {
        try {
            if ( httpReq.readyState === 4) {
                if (httpReq.status === 200) {
                    loading.classList.add('hide')
                    button.classList.remove('hide');
                    const response = JSON.parse(httpReq.responseText);
                    const data = response.data;
                    showUser(data);
                } else  {
                    alert("a problem with a server", httpReq.status);
                }
            } else {
                loading.classList.remove('hide');
                button.classList.add('hide');
            }
        } catch (e) {
            alert("exception is: " + e)
        }

    }
    httpReq.open("GET", `https://reqres.in/api/users?page=${page}&per_page=${perPage}`, true);
    httpReq.send();
}

function showUser(users) {
    container.innerHTML = '';
    users.map(user => {
        container.innerHTML += `
            <div class="card">
                <div class="card__img">
                    <img alt="user avatar" src=${user.avatar}>
                </div>
                <div class="card__detail">
                    <p>${user.first_name + user.last_name}</p>
                    <p>${user.email}</p>
                </div>
            </div>
        `;
    })
    page++;
    page >4  ?  button.classList.add('hide'): null;
}

document.addEventListener('DOMContentLoaded', getUsers)
button.addEventListener('click', () => getUsers(page))
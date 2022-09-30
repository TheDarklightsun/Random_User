const icons = document.querySelector('.icons');
const image = document.querySelector('.image-profile');
const text_ins_ = document.querySelector('.text-ins');
const title_information_ = document.querySelector('.text-information');
const text_information_ = document.querySelector('.text_information');
const former = document.getElementById('myFormer');

function newUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(function (data) {
            const user = data.results[0];
            const imageSrc = `<img id="image-profile" src="${user.picture.large}" alt="">`;
            const text = 'Hi, My name is';
            const name = `${user.name.title} ${user.name.first} ${user.name.last}`;

            icons.innerHTML = `
                <div class="icons">
                    <ul class="values_list horizontal_center">
                        <li class="material-symbols-outlined person " data-title="Hi, My name is" data-value="${user.name.title} ${user.name.first} ${user.name.last}"></li>
                        <li class="material-symbols-outlined email " data-title="My email address is" data-value="${user.email}"></li>
                        <li class="material-symbols-outlined date " data-title="My birthday is" data-value="${user.dob.date.substr(0,10)}" ></li>
                        <li class="material-symbols-outlined location " data-title="My address is" data-value="${user.location.country}"></li>
                        <li class="material-symbols-outlined phone " data-title="My phone number is" data-value="${user.phone}"></li>
                        <li class="material-symbols-outlined password " data-title="My password is" data-value="${user.login.password}"></li>
                    </ul>
                <div/>`;
            image.innerHTML = imageSrc;
            title_information_.innerHTML = text;
            text_ins_.innerHTML = name;

            const icon = document.querySelectorAll('.material-symbols-outlined');
            const title_information = document.querySelector('.text-information');
            const text_ins = document.querySelector('.text-ins');

            icon.forEach(function (item) {
                item.addEventListener('mouseover', function () {
                    let data_title = item.getAttribute('data-title');
                    let data_value = item.getAttribute('data-value');

                    title_information.innerHTML = data_title;
                    text_ins.innerHTML = data_value;

                    let active = document.querySelectorAll('.active');

                    active.forEach(function (active) {
                        active.className = active.className.replace('active', '');
                    });
                    item.className += 'active';
                })
            });
            let loader = document.getElementById('loader');

            loader.style.display = 'none';
            former.style.display = 'none';
        })
        .catch(err => newUser() );
    let loader = document.getElementById('loader');

    loader.style.display = 'block';
    former.style.display = 'block';
}
newUser();



















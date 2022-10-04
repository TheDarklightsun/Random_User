const icons = document.querySelector('.icons');
const image = document.querySelector('.image-profile');
const text_ins_ = document.querySelector('.text-ins');
const title_information_ = document.querySelector('.text-information');
const text_information_ = document.querySelector('.text_information');
const former = document.getElementById('myFormer');

    function newUser() {
    let controller = new AbortController();

    setTimeout(() => controller.abort(), 1000);
    fetch('https://randomuser.me/api/', {signal: controller.signal})
        .then(response => response.json())
        .then(async function (data) {
            const userData = data.results[0];
            const imageSrc = `<img id="image-profile" src="${userData.picture.large}" alt="">`;
            const text = 'Hi, My name is';
            const name = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;

            icons.innerHTML = `
                <div class="icons">
                    <ul class="values_list horizontal_center">
                        <li class="material-symbols-outlined person active" data-title="Hi, My name is" data-value="${userData.name.title} ${userData.name.first} ${userData.name.last}"></li>
                        <li class="material-symbols-outlined email " data-title="My email address is" data-value="${userData.email}"></li>
                        <li class="material-symbols-outlined date " data-title="My birthday is" data-value="${userData.dob.date.substr(0, 10)}" ></li>
                        <li class="material-symbols-outlined location " data-title="My address is" data-value="${userData.location.country}"></li>
                        <li class="material-symbols-outlined phone " data-title="My phone number is" data-value="${userData.phone}"></li>
                        <li class="material-symbols-outlined password " data-title="My password is" data-value="${userData.login.password}"></li>
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

                    let activeClass = document.querySelectorAll('.active');

                    activeClass.forEach(function (active_) {
                        active_.className = active_.className.replace('active', '');
                    });
                    item.className += 'active';
                })
            });
            let loader = document.getElementById('loader');
            let lock = document.getElementById('skm_LockPane');
            let disconnect = document.getElementById('disconnect');

            loader.style.display = 'none';
            disconnect.style.display ='none';
            lock.style.display = 'none';
            former.style.display = 'none';

        })
        .catch(function (e){
            if (e.name === 'AbortError') {
                disconnect.style.display ='block';
            } else {
                disconnect.style.display ='block';
                throw e;
            }
        });
    let loader = document.getElementById('loader');
    let disconnect = document.getElementById('disconnect');
    let lock = document.getElementById('skm_LockPane');

    lock.style.display = 'block';
    loader.style.display = 'block';
    former.style.display = 'block';
}
newUser();
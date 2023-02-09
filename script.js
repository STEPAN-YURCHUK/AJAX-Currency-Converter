let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest(); //Главный обьект с работой react запросами.

    // request.open(method(GET, POST), url(Путь к нашему серверу), async(Асинхронность нашего запроса), login, pass(если они будут необходимы));


    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //Настройка HTTP запросов, какой котнент нас интересует и тд.
    request.send(); //Открывает соединения и отправляет запрос на сервер и ждет ответа.

    //status - содержит HTTP код ответа сервера (404, 0, 200 и тд.).

    //statusText - содержит текстовое описание ответа от сервера.

    //responseText / response - содержит текст ответа сервера.

    //readyState - содержит текущее состояние запроса ,он содержит несколько этапов.
    // 0	UNSENT	Клиент создан. Метод open() ещё не вызван.
    // 1	OPENED	Вызван метод open(). В этом состоянии можно добавить заголовки через метод setRequestHeader(); вызов метода send() отправит запрос.
    // 2	HEADERS_RECEIVED	Вызван метод send(), получены заголовки и код ответа (200, 404, 501 и проч.).
    // 3	LOADING	Загрузка; если значение responseType равно "text" или пустой строке, то responseText содержит частичные данные.
    // 4	DONE	Операция завершена. Все данные получены.

    //readystatechange - cобытие readystatechangeзапускается при изменении readyStateатрибута документа.

    request.addEventListener('readystatechange', function(event) {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });
});
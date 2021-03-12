# API Description
### Countries

    axios.get('/countries/')
    .then((res) => res.data)
> Выводится полный список всех стран

    axios.get(`/countries/:id`)
    .then((res) => res.data)
> Выводятся данные страны с указанным id  

#### Структура данных о стране имеет следующий вид:
    {
        name: String,
        capital: String,
        info: String,
        map?: координаты,
        video?: ссылка на видос,
        sights: [
            {
                img: string,
                name: String,
                description: String,
                rate: [
                        {
                            user: String,
                            rate: String
                        }
                    ]
            }
        ]
    }

### User
    axios.post('/users/registration', {
        username: 'username',
        password: 'password'
    });

    axios.post('/users/login', {
        username: 'username',
        password: 'password'
    })
    .then(token => token)
> После успешной авторизации сервер возвращает jwtToken

#### Структура данных о пользователе имеет следующий вид:
    {
        username: String,
        password: String,
        avatar?: String
    }
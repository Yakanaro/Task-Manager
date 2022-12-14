// @ts-check

export default {
  translation: {
    appName: 'Менеджер задач',
    flash: {
      session: {
        create: {
          success: 'Вы залогинены',
          error: 'Неправильный емейл или пароль',
        },
        delete: {
          success: 'Вы разлогинены',
        },
      },
      users: {
        create: {
          error: 'Не удалось зарегистрировать',
          success: 'Пользователь успешно зарегистрирован',
        },
        delete: {
          error: 'Не удалось удалить пользователя',
          success: 'Пользователь успешно удалён',
        },
        edit: {
          error: 'Не удалось изменить пользователя',
          success: 'Пользователь успешно изменён',
        },
      },
      statuses: {
        create: {
          error: 'Не удалось создать статус',
          success: 'Статус успешно создан',
        },
        delete: {
          error: 'Не удалось удалить статус',
          success: 'Статус успешно удалён',
        },
        edit: {
          error: 'Не удалось изменить статус',
          success: 'Статус успешно изменён',
        },
      },
      labels: {
        create: {
          error: 'Не удалось создать метку',
          success: 'Метка успешно создана',
        },
        delete: {
          error: 'Не удалось удалить метку',
          success: 'Метка успешно удалена',
        },
        edit: {
          error: 'Не удалось изменить метку',
          success: 'Метка успешно изменена',
        },
      },
      tasks: {
        create: {
          error: 'Не удалось создать задачу',
          success: 'Задача успешно создана',
        },
        delete: {
          error: 'Не удалось удалить задачу',
          success: 'Задача успешно удалена',
        },
        edit: {
          error: 'Не удалось изменить задачу',
          success: 'Задача успешно изменена',
        },
      },
      authError: 'Доступ запрещён! Пожалуйста, авторизируйтесь.',
    },
    layouts: {
      application: {
        users: 'Пользователи',
        signIn: 'Вход',
        signUp: 'Регистрация',
        signOut: 'Выход',
        statuses: 'Статусы',
        labels: 'Метки',
        tasks: 'Задачи',
      },
    },
    views: {
      session: {
        new: {
          email: 'Email',
          password: 'Пароль',
          signIn: 'Вход',
          submit: 'Войти',
        },
        errors: {
          email: 'Некорректный Email',
        },
      },
      users: {
        id: 'ID',
        fullName: 'Полное имя',
        email: 'Email',
        action: 'Действия',
        createdAt: 'Дата создания',
        actions: {
          delete: 'Удалить',
          edit: 'Изменить',
        },
        new: {
          email: 'Email',
          password: 'Пароль',
          firstName: 'Имя',
          lastName: 'Фамилия',
          submit: 'Сохранить',
          signUp: 'Регистрация',
        },
        edit: {
          editUser: 'Изменение пользователя',
          editButton: 'Изменить',
          firstName: 'Имя',
          lastName: 'Фамилия',
          email: 'Email',
          password: 'Пароль',
          submit: 'Сохранить',
        },
      },
      statuses: {
        title: 'Изменение статуса',
        index: {
          id: 'ID',
          name: 'Наименование',
          createdAt: 'Дата создания',
          actions: 'Действия',
          create: 'Создание статуса',
        },
        new: {
          createStatus: 'Введите статус',
          name: 'Наименование',
          create: 'Создать статус',
          submit: 'Создать',
        },
        actions: {
          edit: 'Изменить',
          delete: 'Удалить',
          submit: 'Принять',
        },
      },
      labels: {
        index: {
          id: 'ID',
          name: 'Наименование',
          createdAt: 'Дата создания',
          actions: 'Действия',
        },
        actions: {
          create: 'Создать метку',
          edit: 'Изменить',
          delete: 'Удалить',
        },
        new: {
          title: 'Создать метку',
          name: 'Наименование',
          submit: 'Создать',
          newName: 'Введите наименование',
        },
        edit: {
          title: 'Изменение метки',
        },
      },
      tasks: {
        index: {
          id: 'ID',
          name: 'Наименование',
          createdAt: 'Дата создания',
          status: 'Статус',
          executor: 'Исполнитель',
          author: 'Автор',
          onlyUserTasks: 'Только мои задачи',
          label: 'Метка',
          description: 'Описание',
        },
        actions: {
          create: 'Создать задачу',
          view: 'Показать',
          edit: 'Изменить',
          delete: 'Удалить',
        },
        new: {
          title: 'Создать задачу',
          submit: 'Создать',
        },
        edit: {
          title: 'Изменение задачи',
        },
      },
      welcome: {
        index: {
          hello: 'Привет от Хекслета!',
          description: 'Практические курсы по программированию',
          more: 'Узнать Больше',
        },
      },
    },
  },
};

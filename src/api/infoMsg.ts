import NotifyObj from "@/utils/utils";

// const globalMessage = {
//     notify: {
//         successCreatePhoneBookFile: {
//             title: 'Success',
//             type: 'success',
//             message: 'Файл телефонная книга успешно создан'
//         }
//     }
// }
export default class InfoMsg {
    public static successCreatePhoneBook(): NotifyObj{
        return {
            title: 'Success',
            type: 'success',
            message: 'Файл телефонная книга успешно создан'
        }
    }

    public static successCreateWorkBook(): NotifyObj{
        return {
            title: 'Success',
            type: 'success',
            message: 'Информация о месте работы добавлена в справочник БД'
        }
    }

    public static errorCreatePhoneBook(): NotifyObj{
        return {
            title: 'Error',
            type: 'error',
            message: 'Could not create'
        }
    }

}
// export default globalMessage
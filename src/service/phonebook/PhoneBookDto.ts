
export default interface PhoneBookDto {
    id:             number
    firstName:      string
    lastName:       string
    mobilePhone:      string
    workPhone:      string
    email:          string
    work:          string
    birthDate:      string
}

export const phoneBookDtoDefault =  {
    id:             0,
    firstName:      "",
    lastName:       "",
    mobilePhone:    "",
    workPhone:      "",
    work:      "",
    email:          "",
    birthDate:      "",
}



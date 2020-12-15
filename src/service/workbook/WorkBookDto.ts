
export default interface WorkBookDto {
    id:             number
    firstName:      string
    lastName:       string
    placeWork:      string
    addressWork:    string
}

export const workBookDtoDefault =  {
    id:             0,
    firstName:      "",
    lastName:       "",
    placeWork:      "",
    addressWork:    ""
}
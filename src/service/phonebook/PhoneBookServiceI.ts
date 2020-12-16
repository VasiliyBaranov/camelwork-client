import PhoneBookDto from "@/service/phonebook/PhoneBookDto";


export default interface PhoneBookServiceI {
    allPhoneBooks(): Promise<Array<PhoneBookDto>>
    sendData(): Promise<void>
    addPhoneBook (data: PhoneBookDto): Promise<PhoneBookDto>
    updatePhoneBook (id: number, data: PhoneBookDto): Promise<PhoneBookDto>
    deletePhoneBook (id: number): Promise<PhoneBookDto>
    getPhoneBook (id: number): Promise<PhoneBookDto>
}
import {injectable} from "inversify-props";
import {notify} from "@/utils/utils";
import PhoneBookServiceI from "@/service/phonebook/PhoneBookServiceI";
import PhoneBookDto, {phoneBookDtoDefault} from "@/service/phonebook/PhoneBookDto";
import call from "@/api";
import InfoMsg from "@/api/infoMsg";


@injectable()
export default class PhoneBookService implements PhoneBookServiceI {


    public async sendData(): Promise<void> {
        await call.get("/book/send-data")
    }

    public async deletePhoneBook(id: number): Promise<PhoneBookDto> {
        const httpResponse = await call.delete<PhoneBookDto>("/book/" + id)
        return httpResponse.data
    }

    public async addPhoneBook(data: PhoneBookDto): Promise<PhoneBookDto> {
        return call.post<PhoneBookDto>("/book", data)
            .then(response => {
                notify(InfoMsg.successCreatePhoneBook())
                return response.data
            })
            .catch(() => {
                notify(InfoMsg.errorCreatePhoneBook())
                return phoneBookDtoDefault;

            })
    }

    public async getPhoneBook(id: number): Promise<PhoneBookDto> {
        const httpResponse = await call.get("/book/scanning-store")
        return JSON.parse(httpResponse.data)
    }

    public async allPhoneBooks(): Promise<any> {
        const httpResponse = await call.get("/book")
        return JSON.parse(httpResponse.data);
    }

    public async updatePhoneBook(id: number, data: PhoneBookDto): Promise<PhoneBookDto> {
        const httpResponse = await call.post<PhoneBookDto>("/book", data)
        return httpResponse.data
    }


}
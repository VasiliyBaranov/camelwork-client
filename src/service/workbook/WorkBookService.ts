import {injectable} from "inversify-props";
import {notify} from "@/utils/utils";
import WorkBookDto, {workBookDtoDefault} from "@/service/workbook/WorkBookDto";
import WorkBookServiceI from "@/service/workbook/WorkBookServiceI";
import call from "@/api";
import InfoMsg from "@/api/infoMsg";


@injectable()
export default class WorkBookService implements WorkBookServiceI {

    public async deleteWorkBook(id: number): Promise<WorkBookDto> {
        const httpResponse = await call.delete<WorkBookDto>("/work-book/" + id)
        return httpResponse.data
    }

    public async addWorkBook(data: WorkBookDto): Promise<WorkBookDto> {
        return call.post<WorkBookDto>("/work-book", data)
            .then(response => {
                notify(InfoMsg.successCreateWorkBook())
                return response.data
            })
            .catch(() => {
                notify(InfoMsg.errorCreatePhoneBook())
                return workBookDtoDefault;

            })
    }

    public async allWorkBooks(): Promise<any> {
        const httpResponse = await call.get<WorkBookDto>("/work-book")
        return httpResponse.data;
    }

}
import {container} from "inversify-props";
import PhoneBookServiceI from "@/service/phonebook/PhoneBookServiceI";
import PhoneBookService from "@/service/phonebook/PhoneBookService";
import WorkBookService from "@/service/workbook/WorkBookService";
import WorkBookServiceI from "@/service/workbook/WorkBookServiceI";


export default function buildDependencyContainer(): void {
    container.addTransient<PhoneBookServiceI>(PhoneBookService)
    container.addTransient<WorkBookServiceI>(WorkBookService)
}

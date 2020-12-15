import WorkBookDto from "@/service/workbook/WorkBookDto";


export default interface WorkBookServiceI {
    allWorkBooks(): Promise<WorkBookDto>

    addWorkBook(data: WorkBookDto): Promise<WorkBookDto>

    deleteWorkBook(id: number): Promise<WorkBookDto>
}
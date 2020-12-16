import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators'
import PhoneBookDto from "@/service/phonebook/PhoneBookDto";
import {inject} from "inversify-props";
import PhoneBookServiceI from "@/service/phonebook/PhoneBookServiceI";
import WorkBookServiceI from "@/service/workbook/WorkBookServiceI";
import WorkBookDto from "@/service/workbook/WorkBookDto";

@Module({ namespaced: true })
class WorkBookModule extends VuexModule {
  @inject()
  private _workBookService!: WorkBookServiceI

  public list: Array<WorkBookDto> = []
  public workBookDto: WorkBookDto | undefined

  @Mutation
  private setWorkBooks(data: Array<WorkBookDto>): void {
    //this.workBookDto = data[0]
    this.list = data
  }
  @Mutation
  private setAddWorkBook(data: WorkBookDto): void {
    this.workBookDto = data
  }


  @Mutation
  private setClearWorkBook(): void {
    this.workBookDto = {
      id: 0,
      firstName: '',
      lastName: '',
      placeWork: '',
      addressWork: ''
    }
  }



  @Action
  protected async listWorkBook(): Promise<void> {
    this.context.commit('setWorkBooks', await this._workBookService.allWorkBooks());
  }

  @Action
  protected async addWorkBook(data: WorkBookDto): Promise<void> {
    this.context.commit('setAddWorkBook', await this._workBookService.addWorkBook(data));
  }


  @Action
  protected async deleteWorkBook(id: number): Promise<void> {
    this._workBookService.deleteWorkBook(id).then(value => {
      this.context.commit('setClearWorkBook');
    })

  }
}
export default WorkBookModule

import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators'
import PhoneBookDto from "@/service/phonebook/PhoneBookDto";
import {inject} from "inversify-props";
import PhoneBookServiceI from "@/service/phonebook/PhoneBookServiceI";

@Module({ namespaced: true })
class PhoneBookModule extends VuexModule {
  @inject()
  private _phoneBookService!: PhoneBookServiceI

  public phoneBookList: Array<PhoneBookDto> = []
  public phoneBookDto: PhoneBookDto = {
    id: 0,
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    mobilePhone: '',
    workPhone: '',
    work: ''
  }

  @Mutation
  public setPhoneBooks(data: Array<PhoneBookDto>): void {
    this.phoneBookList = data
  }

  @Mutation
  public setAddPhoneBook(data: PhoneBookDto): void {
    this.phoneBookDto = data
  }


  @Mutation
  private setClearPhoneBook(): void {
    this.phoneBookDto = {
      id: 0,
      firstName: '',
      lastName: '',
      birthDate: '',
      email: '',
      mobilePhone: '',
      workPhone: '',
      work: ''
    }
  }


  @Action
  protected async listPhoneBook(): Promise<Array<PhoneBookDto>> {
    return this._phoneBookService.allPhoneBooks().then(value => {
      this.context.commit('setPhoneBooks', value);
      return value;
    })
  }
  @Action
  protected async addPhoneBook(data: PhoneBookDto): Promise<void> {
    this.context.commit('setAddPhoneBook', await this._phoneBookService.addPhoneBook(data));
  }
  @Action
  protected async getPhoneBook(): Promise<PhoneBookDto> {
    return this._phoneBookService.getPhoneBook(0).then(value => {
      this.context.commit('setAddPhoneBook', value);
      return value;
    })
  }

  @Action
  protected async deletePhoneBook(): Promise<void> {
    this._phoneBookService.deletePhoneBook(0).then(value => {
      this.context.commit('setClearPhoneBook');
    })

  }

  @Action
  protected async sendData(): Promise<void> {
    this._phoneBookService.sendData().then(value => {
      this.context.commit('setClearPhoneBook');
    })

  }
}
export default PhoneBookModule

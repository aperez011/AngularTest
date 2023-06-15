import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataAdminService {

  public contacts: any = []
  constructor() { }
}

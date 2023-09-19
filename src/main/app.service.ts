import { Injectable } from '@nestjs/common'
import { shell } from "electron";

@Injectable()
export class AppService {
  public getTime(): number {
    return new Date().getTime()
  }

  public openFileProcess(filePath): string {
    return new shell.openPath(filePath)
  }
}

import { IGridPos } from "../../Utils/Util.d";

export interface IUpdateStatusProps{
    currentStatus:boolean
    gridPos:IGridPos
}
export type UpdateStatusFunction = ({currentStatus, gridPos}) =>void
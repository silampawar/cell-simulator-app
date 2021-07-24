import { UpdateStatusFunction } from "../CellSimulator/CellSimulator.d";

export interface ICellProps {
    isAlive: boolean
    updateStatus:UpdateStatusFunction
    currentPos:{x:number,y:number}
}
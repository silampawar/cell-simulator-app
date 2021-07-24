import { UpdateStatusFunction } from "../CellSimulator/CellSimulator";

export interface ICellGridProps {
    grid: Array<Array<boolean>>
    updateStatus:UpdateStatusFunction 
}
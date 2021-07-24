export interface IGridPos{
    x: number
    y:number
} 

export type TCellGrid = Array<Array<boolean>>
export interface IUpdateStatusinGridProps{
    gridArr:TCellGrid
    currentStatus:boolean
    gridPos:IGridPos
}
export type IUpdateGenerationProps = Array<Array<boolean>>

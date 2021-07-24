import Cell from "./../Cell"
import {CellGridContainer} from "./CellGrid.styles"
import {ICellGridProps} from "./CellGrid.d"

const CellGrid = ({ grid,updateStatus}: ICellGridProps): JSX.Element => {

    return <><CellGridContainer data-testid={"cellgrid-id1"} direction={"column"}>{grid.map((cellArr,row) => {
        return <><CellGridContainer data-testid={"cellgrid-id2"} direction={"row"}>{cellArr.map((cell,col) => {
            return <Cell isAlive={cell} updateStatus={updateStatus} currentPos={{x:row,y:col}} key={row+" "+col} data-testid={"cellgrid-id3"}></Cell>
        }) }</CellGridContainer></>
    })}

</CellGridContainer></>
}

export default CellGrid;
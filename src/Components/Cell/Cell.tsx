import {Anchor, Container} from "./Cell.styles"
import {ICellProps} from "./Cell.d"


const Cell = ({ isAlive,updateStatus,currentPos }:ICellProps): JSX.Element => {

    return <><Anchor data-testid= "cell-anchore-itemid" href="#" onClick={()=>updateStatus({currentStatus: isAlive,gridPos:currentPos})}>
                <Container data-testid= "cell-container-itemid" isAlive={isAlive} ></Container>
                </Anchor></>
}

export default Cell;
import { useState } from "react";
import { generateNewGrid, updateStatusinGrid, generateNextGen } from "../../Utils/Util";
import { ButtonDiv, Container, SignInBtn } from "./CellSimulator.styles";
import CellGrid from "./../CellGrid";
import { IUpdateStatusProps } from "./CellSimulator.d"
import { TCellGrid } from "../../Utils/Util.d";

const CellSimulator = (): JSX.Element => {

    const rowCount = 6;
    const colCount = 6;
    const [gridArr, setGridArr] = useState<TCellGrid>(generateNewGrid(rowCount, colCount));


    /*On click of a cell, make it alive or dead*/
    const updateStatus = ({ currentStatus, gridPos }: IUpdateStatusProps) => {
        const updatedArray = updateStatusinGrid({ gridArr, currentStatus, gridPos });
        setGridArr(updatedArray);
    }

    /*Reset all cells to dead*/
    const resetStatus = () => {
        setGridArr(generateNewGrid(rowCount, colCount));
    }

    /*Start new generation, follow rules to update cell status*/
    const startNewGeneration = () => {
        const updatedArray = generateNextGen(gridArr);
        setGridArr(updatedArray);
    }

    return <>
        <Container>
            <CellGrid grid={gridArr} updateStatus={updateStatus} />

            <ButtonDiv><SignInBtn as="a" href="#0" id="nextButton" onClick={startNewGeneration}>
                Next Generation
            </SignInBtn>

                <SignInBtn as="a" href="#0" id="resetButton" onClick={resetStatus}>
                    Reset
                </SignInBtn></ButtonDiv>


        </Container></>
}

export default CellSimulator;
import React from "react";
import ReactDOM from "react-dom";
import { Paper, Grid } from "@material-ui/core";
import { fillArray, generator, createGrid } from "../../../utils/functions";

const GenerateSlot = (props) => {
  let [rowArea, colArea, rowSlot, colSlot] = fillArray(props.data);
  let i = 1;

  // return (
  //   <>
  //     {rowArea.map(() => {
  //       return createGrid(colArea, rowSlot, colSlot);
  //     })}
  //   </>
  // );

  return (
    <>
      {rowArea.map(() => {
        return (
          <Grid item className="area-row-generator">
            {colArea.map(() => {
              return (
                <Paper className="area-column-generator">
                  {colSlot.map(() => {
                    return (
                      <Grid item>
                        {rowSlot.map(() => {
                          return (
                            <Paper className="slot-row-generator">
                              <p className="slot-number">{generator(i++)}</p>
                            </Paper>
                          );
                        })}
                      </Grid>
                    );
                  })}
                </Paper>
              );
            })}
          </Grid>
        );
      })}
    </>
  );
};

export default GenerateSlot;

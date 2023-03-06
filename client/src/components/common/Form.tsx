import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button } from "@pankod/refine-mui"

import { FormProps } from "interfaces/common"
import CustomButton from "./CustomButton"

const Form = ({type,register,handleSubmit,handleImageChange,formLoading,onFinishHandler,propertyImage}:FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a Property
      </Typography>
      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form style={{ marginTop: "20px", width: "100%", display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={handleSubmit}>
          <FormControl>
            <FormHelperText sx={{
              fontWeight: 500,
              margin: "10px",
              fontSize: 16,
              color:"#11142d"
            }}>
              Enter property name
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register('title',
              {required:true}
              )}
            />
          </FormControl>
                    <FormControl>
            <FormHelperText sx={{
              fontWeight: 500,
              margin: "10px",
              fontSize: 16,
              color:"#11142d"
            }}>
              Enter Description
            </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write Description"
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgb(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
                color:"#919191"
              }}
              {...register('description', {
               required:true
              })}
            />
          </FormControl>


        </form>

      </Box>

    </Box>
  )
}

export default Form
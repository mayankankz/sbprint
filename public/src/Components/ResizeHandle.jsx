import React from "react";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
const ResizeHandle = () => {
  return (
    <div>
      <Brightness1OutlinedIcon
        sx={{
          fontSize: 6,
          margin: 0.5,
          borderColor: 'red',
          borderWidth: 1,
          borderRadius: "50%"
        }}
      />
    </div>
  );
};

export default ResizeHandle;

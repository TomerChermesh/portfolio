// src/views/EducationView.tsx
import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

export const EducationView: React.FC = () => {
  return (
    <Box sx={{ pt: 6 }}>
      <Card
        sx={{
          bgcolor: "#020617",
          borderRadius: 3,
          border: "1px solid rgba(148,163,184,0.5)",
          boxShadow: "0 18px 50px rgba(15,23,42,0.9)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 1.5,
            py: 1,
            borderBottom: "1px solid rgba(30,64,175,0.5)",
            fontSize: 12,
            color: "#9ca3af",
            bgcolor: "#020617",
          }}
        >
          <Box className="dot red" />
          <Box className="dot yellow" />
          <Box className="dot green" />
          <Typography sx={{ ml: 1 }}>tomerchermesh/education</Typography>
        </Box>

        <CardContent
          sx={{
            fontFamily:
              'SF Mono, ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            fontSize: 13,
          }}
        >

          <Box className="entry">
            <Typography className="entry-title">
              B.Sc. Computer Science · Some University
            </Typography>
            <Typography className="entry-meta">2016–2020</Typography>
            <Typography className="entry-body">
              כאן נוסיף בהמשך את הפירוט האמיתי של הלימודים.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

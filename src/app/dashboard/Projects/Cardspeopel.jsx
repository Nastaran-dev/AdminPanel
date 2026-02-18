"use client"
import { useContext, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { myTheme } from "@/app/store/Store";

const statusColors = {
  "In Progress": { bg: "#fce4ec", color: "#e91e8c", darkBg: "#3a1525", darkColor: "#f48fb1" },
  Pending: { bg: "#fff3e0", color: "#f57c00", darkBg: "#2e1a00", darkColor: "#ffb74d" },
  Completed: { bg: "#e8f5e9", color: "#388e3c", darkBg: "#0d2e10", darkColor: "#66bb6a" },
};

const teamAvatars = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
];

const progressColors = ["#9c27b0", "#f44336", "#9c27b0", "#9c27b0", "#f44336", "#9c27b0", "#9c27b0", "#f44336"];

const projects = [
  { id: 1, title: "Multimedia Platform AD.", name: "Olivia Grace", date: "06 Feb 2023", progress: 60, status: "In Progress", due: "2023-06-02", avatar: "/images/img1.jpg" },
  { id: 2, title: ".business Platform AD.", name: "Charlotte Mae", date: "06 Feb 2023", progress: 69, status: "Pending", due: "2023-06-02", avatar: "/images/img2.jpg" },
  { id: 3, title: "Multimedia Platform AD.", name: "Oliver Noah", date: "06 Feb 2023", progress: 75, status: "In Progress", due: "2023-06-02", avatar: "/images/img3.jpg" },
  { id: 4, title: "Digital Marketing AD.", name: "Emma Rose", date: "07 Feb 2023", progress: 45, status: "In Progress", due: "2023-07-01", avatar: "/images/img4.jpg" },
  { id: 5, title: "E-Commerce Platform.", name: "James Wilson", date: "08 Feb 2023", progress: 88, status: "Completed", due: "2023-05-15", avatar: "/images/img5.jpg" },
  { id: 6, title: "Social Media Campaign.", name: "Sophia Lee", date: "09 Feb 2023", progress: 30, status: "Pending", due: "2023-08-10", avatar: "/images/img6.jpg" },
  { id: 7, title: "Mobile App Development.", name: "Liam Brown", date: "10 Feb 2023", progress: 55, status: "In Progress", due: "2023-09-20", avatar: "/images/img7.jpg" },
  { id: 8, title: "AI Analytics Dashboard.", name: "Ava Johnson", date: "11 Feb 2023", progress: 92, status: "Completed", due: "2023-04-30", avatar: "/images/img8.jpg" },
];

const statusOptions = ["In Progress", "Pending", "Completed"];

function ProjectCard({ project, colorIndex, dark }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [status, setStatus] = useState(project.status);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = (val) => {
    if (val) setStatus(val);
    setAnchorEl(null);
  };

  const sc = statusColors[status] || statusColors["In Progress"];

  const cardBg = dark ? "#1e2433" : "#ffffff";
  const cardBorder = dark ? "#2d3548" : "#e8e8e8";
  const cardHoverShadow = dark ? "0 4px 24px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.08)";
  const titleColor = dark ? "#e2e8f0" : "inherit";
  const nameColor = dark ? "#cbd5e1" : "inherit";
  const dividerColor = dark ? "#2d3548" : "divider";
  const progressBg = dark ? "#2d3548" : "#f0f0f0";
  const dueColor = dark ? "#f87171" : "#f44336";
  const chipBg = dark ? sc.darkBg : sc.bg;
  const chipColor = dark ? sc.darkColor : sc.color;
  const menuBg = dark ? "#1e2433" : "#ffffff";
  const menuBorder = dark ? "#2d3548" : "#e8e8e8";
  const menuItemHover = dark ? "#2d3548" : "#f5f5f5";
  const menuTextColor = dark ? "#cbd5e1" : "inherit";

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        border: `1px solid ${cardBorder}`,
        backgroundColor: cardBg,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "&:hover": { boxShadow: cardHoverShadow },
        transition: "box-shadow 0.2s, background-color 0.3s",
      }}
    >
      <CardContent sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
    
        <Typography
          variant="h6"
          fontWeight={600}
          mb={2}
          fontSize="1rem"
          sx={{ color: titleColor }}
        >
          # {project.id} . {project.title}
        </Typography>

        <Divider sx={{ mb: 2, borderColor: dividerColor }} />

       
        <Box display="flex" alignItems="center" gap={1.5} mb={2}>
          <Avatar
            src={project.avatar}
            sx={{
              width: 48,
              height: 48,
              border: dark ? "2px solid #2d3548" : "none",
            }}
          />
          <Box>
            <Typography fontWeight={600} fontSize="0.95rem" sx={{ color: nameColor }}>
              {project.name}
            </Typography>
            <Typography variant="body2" sx={{ color: dark ? "#64748b" : "text.secondary" }}>
              {project.date}
            </Typography>
          </Box>
        </Box>

       
        <Typography variant="body2" sx={{ color: dark ? "#64748b" : "text.secondary" }} mb={2.5}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Typography>

       
        <Typography fontWeight={700} fontSize="0.9rem" mb={1} sx={{ color: dark ? "#94a3b8" : "inherit" }}>
          Team
        </Typography>
        <AvatarGroup
          max={4}
          sx={{
            justifyContent: "flex-start",
            mb: 2.5,
            "& .MuiAvatar-root": {
              width: 36,
              height: 36,
              fontSize: "0.75rem",
              border: dark ? "2px solid #1e2433" : "2px solid #fff",
            },
          }}
        >
          {teamAvatars.map((src, i) => (
            <Avatar key={i} src={src} />
          ))}
        </AvatarGroup>
        <Box display="flex" justifyContent="space-between" mb={0.5}>
          <Typography variant="body2" sx={{ color: dark ? "#64748b" : "text.secondary" }}>
            Project Complete
          </Typography>
          <Typography variant="body2" sx={{ color: dark ? "#64748b" : "text.secondary" }}>
            {project.progress}%
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={project.progress}
          sx={{
            height: 6,
            borderRadius: 3,
            mb: 2,
            backgroundColor: progressBg,
            "& .MuiLinearProgress-bar": {
              backgroundColor: progressColors[colorIndex % progressColors.length],
              borderRadius: 3,
            },
          }}
        />
      </CardContent>
      <Divider sx={{ borderColor: dividerColor }} />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={3}
        py={1.5}
        sx={{ backgroundColor: dark ? "#181e2e" : "transparent", borderRadius: "0 0 12px 12px" }}
      >
        <Typography variant="body2" sx={{ color: dark ? "#64748b" : "text.secondary" }}>
          Due : <span style={{ color: dueColor }}>{project.due}</span>
        </Typography>

        <Chip
          label={
            <Box display="flex" alignItems="center" gap={0.5}>
              {status}
              <KeyboardArrowDownIcon fontSize="small" />
            </Box>
          }
          onClick={handleOpen}
          sx={{
            backgroundColor: chipBg,
            color: chipColor,
            fontWeight: 500,
            fontSize: "0.8rem",
            cursor: "pointer",
            "& .MuiChip-label": { px: 1.5 },
          }}
        />

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleClose(null)}
          PaperProps={{
            sx: {
              backgroundColor: menuBg,
              border: `1px solid ${menuBorder}`,
              boxShadow: dark ? "0 8px 32px rgba(0,0,0,0.6)" : "0 4px 16px rgba(0,0,0,0.1)",
              "& .MuiMenuItem-root": {
                color: menuTextColor,
                fontSize: "0.85rem",
                "&:hover": { backgroundColor: menuItemHover },
                "&.Mui-selected": {
                  backgroundColor: dark ? "#2d3548" : "#f0f0f0",
                  "&:hover": { backgroundColor: dark ? "#374160" : "#e8e8e8" },
                },
              },
            },
          }}
        >
          {statusOptions.map((opt) => (
            <MenuItem key={opt} onClick={() => handleClose(opt)} selected={opt === status}>
              {opt}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Card>
  );
}

export default function Cardspeopel() {
  const { dark } = useContext(myTheme);

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        display: "flex",
        justifyContent: "center",
        width: "100%",
        backgroundColor: dark ? "#0f1521" : "#f4f5f7",
        minHeight: "100vh",
        transition: "background-color 0.3s",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          maxWidth: "1400px",
          width: "100%",
        }}
      >
        {projects.map((project, index) => (
          <Grid
            item
            key={project.id}
            sx={{
              width: { xs: "100%", sm: "calc(50% - 10px)", lg: "calc(33.33% - 14px)" },
            }}
          >
            <ProjectCard project={project} colorIndex={index} dark={dark} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Switch from '@mui/material/Switch';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import { myTheme } from '@/app/store/Store';

const cards = [
  {
    id: 1,
    title: '24',
    description: 'Total Completed',
    color: '#db3aa8',
    bgColor: '#fbebf6',
    darkBg: '#3d1a35',
    Icon: <AccountCircleOutlinedIcon sx={{ fontSize: "60px", color: "#db3aa8" }} />,
  },
  {
    id: 2,
    title: '12',
    description: 'Total In Progress',
    color: '#08a36b',
    bgColor: '#e6f7f2',
    darkBg: '#0d2e22',
    Icon: <BarChartOutlinedIcon sx={{ fontSize: "60px", color: "#08a36b" }} />,
  },
  {
    id: 3,
    title: '07',
    description: 'Total Testing',
    color: '#eb602d',
    bgColor: '#fdeee8',
    darkBg: '#3d1a0d',
    Icon: <BackspaceOutlinedIcon sx={{ fontSize: "60px", color: "#eb602d" }} />,
  },
  {
    id: 4,
    title: '05',
    description: 'Total Pending',
    color: '#ff5e5e',
    bgColor: '#ffebeb',
    darkBg: '#3d1212',
    Icon: <FingerprintOutlinedIcon sx={{ fontSize: "60px", color: "#ff5e5e" }} />,
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  const { dark, setDark } = React.useContext(myTheme);

  return (
    <Box
      sx={{
        backgroundColor: dark ? '#0f0f1a' : '#f5f5f5',
        p: 4,
        transition: 'background-color 0.4s ease',
      }}
    >
     
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))',
          gap: 2,
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={card.id}
            sx={{
              backgroundColor: dark ? '#1a1a2e' : '#ffffff',
              boxShadow: dark
                ? `0 4px 20px rgba(0,0,0,0.5)`
                : `0 4px 20px rgba(0,0,0,0.08)`,
              border: selectedCard === index
                ? `2px solid ${card.color}`
                : '2px solid transparent',
              borderRadius: '16px',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: dark
                  ? `0 8px 30px rgba(0,0,0,0.7)`
                  : `0 8px 30px rgba(0,0,0,0.15)`,
              },
            }}
          >
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              sx={{ height: '100%', borderRadius: '16px' }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  p: 3,
                }}
              >
                {/* آیکون */}
                <Box
                  sx={{
                    backgroundColor: dark ? card.darkBg : card.bgColor,
                    p: 1.5,
                    borderRadius: '16px',
                    transition: 'background-color 0.4s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {card.Icon}
                </Box>

                {/* متن */}
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="700"
                    sx={{ color: card.color }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight="600"
                    sx={{
                      color: dark ? '#9e9eb8' : '#666',
                      transition: 'color 0.4s ease',
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default SelectActionCard;
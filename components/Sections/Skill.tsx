import * as React from 'react';
import { Card, Paper, Typography } from '@mui/material';
import CustomTitle from '../CustomComponent/CustomTitle';

import SkillsCard from '../CustomComponent/SkillsCard';


interface SkillProps{}

const Skill: React.FC<SkillProps> = (props) => {
  return (
    <>
      <Card sx={{  
                  width: "100%", 
                  paddingBottom: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",                    
                }}
      >      
        <CustomTitle>
            S čím jsem už pracovala
        </CustomTitle>
        <Paper  elevation= {0}
                sx={{
                    width: '55%', 
                    display: 'flex',  
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                  }}
          >
          <SkillsCard />
        </Paper>
      </Card>
    </>
  );
}

export default Skill;

import React from 'react';
//mui
import { Card, CardMedia } from '@mui/material';
//custom components
import ConstantsContext from '../../context/constantsContext';

interface SkillsCardProps {}

const SkillsCard: React.FC<SkillsCardProps> = (props) => {

    const { skillsData } = React.useContext(ConstantsContext);
    skillsData?.sort((a, b) => (a.id > b.id ? 1 : -1));

  return (
    <>
      {skillsData?.map((SkillData, id) => (
            <Card sx={{position: "relative", margin: 2}} key={SkillData.id}>
            <Card
                key={SkillData.id}         
                sx={{   
                  textAlign: "center"             

                }}
            >              
              {SkillData.title}                         
                          
              <Card
              key={SkillData.id}         
              sx={{  
                position: "absolute",
                top: 0,
                left: 0,                
                backgroundColor: "white",
                transition: "all 1s linear",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                "&:hover": {
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 0)",
                }
                  }}
              >
              {SkillData.images}  
              </Card>
              </Card>
              </Card>
            ))}
    </>
  );
}
export default SkillsCard;

import Image  from "next/image";
import { Typography, TypographyProps, styled } from "@mui/material";
import { ImageProps } from "next/image";


export interface SkillData {
  title: React.ReactNode;
  id: number;
  images: React.ReactNode | any;
}

const TextSkill = styled (Typography)<TypographyProps>(({theme})=> ({  
  width: 100,
  height: 100,
  color: theme.palette.secondary.light,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // overflow: "hidden",
   
}))

const skillsData: SkillData[] = [
  { 
    id: 0,
    title: <TextSkill   variant="h5" 
                        sx={{ border: "2px solid #f06428",
                              backgroundColor: "#f06428",}}
                        > 
              HTML 
           </TextSkill>,
    images: <Image src='/images/logo/html.png' 
                  alt="HTML" 
                  width={100} 
                  height={100}
                  style={{border: "2px solid #f06428", }}
                  >
            </Image>
  },   
  {
    id: 1,
    title: <TextSkill variant="h5" 
                      sx={{border: "2px solid #2a64f0",
                          backgroundColor: "#2a64f0",
                          }}>
              CSS
            </TextSkill>,
    images: <Image src='/images/logo/css.png' 
                    alt="CSS" 
                    width={100} 
                    height={100}
                    style={{border: "2px solid #2a64f0"}}>
            </Image>
  },
  {
    id: 2,
    title: <TextSkill variant="h5" 
                      sx={{border: "2px solid #eaaf26", 
                           backgroundColor: "#eaaf26",
                          }}
                        >
                JavaScript
            </TextSkill>,
    images: <Image src='/images/logo/js.png' 
                alt="JavaScript" 
                width={100} 
                height={100}
                style={{border: "2px solid #eaaf26"}}>
            </Image>
  },
 {
    id: 3,
    title: <TextSkill variant="h5" 
                      sx={{border: "2px solid #cf629a",
                           backgroundColor: "#cf629a"}}
                                        >
                SaSS
            </TextSkill>,
    images:<Image src='/images/logo/sass.png' 
                  alt="SaSS" 
                  width={100} 
                  height={100}
                  style={{border: "2px solid #cf629a"}}>
              </Image>       
    },
  {
    id: 4,
    title: <TextSkill variant="h5" 
                      sx={{border: "2px solid #dd4b34",
                           backgroundColor: "#dd4b34"}}>
              GIT
            </TextSkill>,
    images:<Image src='/images/logo/git.png' 
                  alt="Git" 
                  width={100} 
                  height={100}
                  style={{border: "2px solid #dd4b34"}}>
              </Image>        
    },
  {
    id: 5,
    title: <TextSkill variant="h5" 
                      sx={{border: "2px solid #0172ff", 
                           backgroundColor: "#0172ff"}}>
                GitHub
            </TextSkill>,
    images: <Image src='/images/logo/github.png' 
                    alt="GitHub" 
                    width={100} 
                    height={100}
                    style={{border: "2px solid #0172ff"}}>
                </Image>       
    },
  {
    id: 6,
    title: <TextSkill variant="h5" 
                      sx={{border: "2px solid #09bbce", 
                          backgroundColor: "#09bbce"}}>
                  Canva
            </TextSkill>,
    images: <Image src='/images/logo/canva.png' 
                    alt="Canva" 
                    width={100} 
                    height={100}
                    style={{border: "2px solid #09bbce"}}>
                </Image>
      },
  {
    id: 7,
    title: <TextSkill variant="h5" 
                      sx={{border: "2px solid #3672a4", 
                          backgroundColor: "#3672a4"}}>
              Python
            </TextSkill>,
    images:<Image src='/images/logo/python.png' 
                  alt="Python" 
                  width={100} 
                  height={100}
                  style={{border: "2px solid #3672a4"}}>
              </Image>       
      },
  {
    id: 8,
    title: <TextSkill variant="h5" 
                      sx={{border: "2px solid #f8ab00", 
                          backgroundColor: "#f8ab00"}}>
                Google Analytics
            </TextSkill>,
    images: <Image src='/images/logo/ga.png' 
              alt="Google Analytics" 
              width={100} 
              height={100}
              style={{border: "2px solid #f8ab00"}}>
          </Image>       
    },
  {
    id: 9,
    title: <TextSkill variant="h5" 
                      sx={{border: "2px solid #000000", 
                          backgroundColor: "#000000"}}
                                        >
                SEO
            </TextSkill>,
    images:<Image src='/images/logo/seo.png' 
                  alt="SEO" 
                  width={100} 
                  height={100}
                  style={{border: "2px solid #000000"}}>
              </Image>    
    },
  {
    id: 10,
    title: <TextSkill variant="h5" 
                      sx={{border: "2px solid #115d76", 
                            backgroundColor: "#115d76"}}>
                ShotCut
            </TextSkill>,
    images: <Image src='/images/logo/shotcut.png' 
                  alt="ShotCut" 
                  width={100} 
                  height={100}
                  style={{border: "2px solid #115d76"}}>
              </Image>      
  },
  {
    id: 11,
    title: <TextSkill variant="h5" 
                      sx={{border: "2px solid #000000", 
                          backgroundColor: "#000000"}}>
                Figma
            </TextSkill>,
    images: <Image src='/images/logo/figma.png' 
                    alt="Figma" 
                    width={100} 
                    height={100}
                    style={{border: "2px solid #000000"}}>
                </Image>        
  },
  {
    id: 12,
    title: <TextSkill variant="h5" 
                      sx={{border: "2px solid #0a2f20", 
                          backgroundColor: "#0a2f20"}}>
                Django
            </TextSkill>,
    images: <Image src='/images/logo/django.png' 
                    alt="Djanfo" 
                    width={100} 
                    height={100}
                    style={{border: "2px solid #0a2f20"}}>
                </Image>        
  },
  {
    id: 13,
    title: <TextSkill variant="h5" 
                      sx={{border: "2px solid #2a4758", 
                          backgroundColor: "#2a4758"}}>
              PHP
            </TextSkill>,
    images: <Image src='/images/logo/php.png' 
                    alt="Php" 
                    width={100} 
                    height={100}
                    style={{border: "2px solid #2a4758"}}>
                </Image>        
  },
  {
    id: 14,
    title: <TextSkill variant="h5" 
                      sx={{border: "2px solid #00d8ff", 
                          backgroundColor: "#00d8ff"}}>
                React
            </TextSkill>,
    images: <Image src='/images/logo/react.png' 
                    alt="React" 
                    width={100} 
                    height={100}
                    style={{border: "2px solid #00d8ff"}}>
                </Image>        
  },
  {
    id: 15,
    title: <TextSkill variant="h5" 
                      sx={{border: "2px solid #007FFF", 
                          backgroundColor: "#007FFF"}}>
                Material UI
            </TextSkill>,
    images: <Image src='/images/logo/material_ui.png' 
                    alt="Material UI" 
                    width={100} 
                    height={100}
                    style={{border: "2px solid #007FFF"}}>
                </Image>        
  },
]
export default skillsData;

import React, { useEffect } from 'react';

import {
  Box,
  CardHeader,
  Typography,
  IconButton,
  Tooltip,
  styled,
  useTheme,
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';  import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Checkpoint } from '@/models/Checkpoint';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import GpsNotFixedRoundedIcon from '@mui/icons-material/GpsNotFixedRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';


  const TimelineWrapper = styled(Timeline)(
    ({ theme }) => `
      margin-left: ${theme.spacing(2)};
  
      .MuiTimelineDot-root {
        left: -${theme.spacing(2)};
        margin-top: 0;
        margin-bottom: 0;
        top: ${theme.spacing(0.5)};
      }
      
      .MuiTimelineContent-root {
        padding-left: ${theme.spacing(4)};
      }
      
      .MuiFormControlLabel-root {
        margin-left: -${theme.spacing(0.7)};
      }
      
      .MuiFormControlLabel-label {
        color: ${theme.colors.alpha.black[50]};
      }
  `
  );
  
  
type ChildComponentProps = {
  dataCheckRoute: Array<Checkpoint>,
  onDataDeleteChange(itemId:  number): void
}

const getTypeIcon = (index, size) => {
  if (index == 0) {
    return <RadioButtonCheckedRoundedIcon />
  }

  if ((index) == (size-1)) {
    return <RadioButtonUncheckedRoundedIcon />
  }
  return <GpsNotFixedRoundedIcon />
}

const getLineConect = (index, size) => { 
  if ((index) != (size-1)) {
    return (<TimelineConnector />);
  }
  return (<></>);
}
  
function RoutePath( { dataCheckRoute, onDataDeleteChange }: ChildComponentProps, ) {
    const theme = useTheme();

    const handleChangeDelete = (itemId) => {
      onDataDeleteChange(itemId);
    };

    useEffect(() => {
      // Código a ejecutar después de que el componente se monta en el DOM
      // o cuando ciertas dependencias cambian
      // Puedes realizar llamadas a API, actualizar el estado, etc.
      console.log(dataCheckRoute);
      
      return () => {
        // Código para limpiar o cancelar cualquier efecto secundario
        // antes de que el componente se desmonte
      };
    }, [dataCheckRoute]);

    return (
      <Box>
        <CardHeader
          sx={{
            px: 0,
            pt: 0
          }}
          action={
            <Tooltip arrow title="Refresh list">
              <IconButton size="small" color="primary">
                <RefreshTwoToneIcon />
              </IconButton>
            </Tooltip>
          }
          title="Ruta"
        />
        <TimelineWrapper>
            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 1,
                    },
                }}
                >
              { dataCheckRoute.map((itemCP, index) =>{
                return(
                  <>
                  <TimelineItem>
                        {/* <TimelineOppositeContent
                        sx={{ m: '0 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                        >
                        9:30 am
                        </TimelineOppositeContent> */}
                    <TimelineSeparator>
                    <TimelineDot color="primary">
                      {getTypeIcon(index, dataCheckRoute.length)}
                    </TimelineDot>
                      {getLineConect(index, dataCheckRoute.length)}
                    </TimelineSeparator>
                    <TimelineContent>
                    <Typography
                        variant="h4"
                        sx={{
                        pb: 2
                        }}
                    >
                        "{itemCP.name}"
                        <Tooltip title="Quitar Punto" arrow>
                        <IconButton
                          onClick={()=>handleChangeDelete(itemCP.id)}
                            sx={{
                            '&:hover': {
                                background: theme.colors.primary.lighter
                            },
                            marginLeft: 1,
                            color: theme.palette.error.main
                            }}
                            color="inherit"
                            size="small"
                        >
                            <DeleteTwoToneIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    </Typography>
                    </TimelineContent >
                </TimelineItem>
                  </>
                )
              }) }
            </Timeline>
        </TimelineWrapper>
        
      </Box>
    );
  }
  
  export default RoutePath;
  
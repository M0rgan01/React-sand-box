import React, { useState } from 'react';
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ScienceIcon from '@mui/icons-material/Science';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import PanoramaWideAngleIcon from '@mui/icons-material/PanoramaWideAngle';
import WebhookIcon from '@mui/icons-material/Webhook';
import SyncIcon from '@mui/icons-material/Sync';
import ArchiveIcon from '@mui/icons-material/Archive';
import ApiIcon from '@mui/icons-material/Api';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import { useSelector } from 'react-redux';
import { backgroundZIndex } from '../../plugins/animeBackground';
import {
  CHECKERS_GAME,
  MATTER_GAME,
  OVERLAY_MENU,
  REACT_QUERY,
  TODOS, USE_CALLBACK,
  USE_CUSTOM,
  USE_MEMO,
  USE_REDUCER,
  WELCOME,
} from './routing/routes';
import { keycloakSelector } from '../../store/selectors/authSelectors';

const exitButtonClass: SxProps<Theme> = {
  position: 'absolute',
  top: 20,
  right: 20,
  zIndex: backgroundZIndex + 1,
  color: 'white',
};

const overlayClass: SxProps<Theme> = {
  color: 'white',
  position: 'absolute',
  zIndex: backgroundZIndex + 1,
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  animation: 'overlayTransition 200ms ease-in',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@keyframes overlayTransition': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
};

interface OverlayProps {
  hideOverlay: () => void;
}

function Overlay({ hideOverlay }: OverlayProps) {
  const navigate = useNavigate();
  const keycloak = useSelector(keycloakSelector);
  const [labsOpen, setLabsOpen] = useState(false);
  const [hookOpen, setHooksOpen] = useState(false);
  const [apiOpen, setApiOpen] = useState(false);

  const handleLabsClick = () => {
    setLabsOpen(!labsOpen);
  };

  const handleHooksClick = () => {
    setHooksOpen(!hookOpen);
  };

  const handleApiClick = () => {
    if (!keycloak?.authenticated) {
      keycloak?.login();
    } else {
      setApiOpen(!apiOpen);
    }
  };

  const onNavigate = (destination: string) => {
    hideOverlay();
    navigate(destination);
  };
  return (
    <Box sx={overlayClass}>
      <List
        sx={{ width: '100%', maxWidth: 500 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={(
          <ListSubheader
            sx={{ bgcolor: 'transparent', color: 'white' }}
            component="div"
            id="nested-list-subheader"
          >
            Navigation
          </ListSubheader>
        )}
      >
        <ListItemButton onClick={() => onNavigate(WELCOME)}>
          <ListItemIcon>
            <HomeIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton onClick={handleLabsClick}>
          <ListItemIcon>
            <ScienceIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Labs" />
          {labsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={labsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => onNavigate(MATTER_GAME)}>
              <ListItemIcon>
                <ViewInArIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Matter game" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => onNavigate(CHECKERS_GAME)}>
              <ListItemIcon>
                <StarBorder sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Checkers Game" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => onNavigate(OVERLAY_MENU)}>
              <ListItemIcon>
                <PanoramaWideAngleIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Overlay tests" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleHooksClick}>
          <ListItemIcon>
            <WebhookIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Hooks" />
          {labsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={hookOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => onNavigate(USE_MEMO)}>
              <ListItemIcon>
                <SyncIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Use memo demo" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => onNavigate(USE_CALLBACK)}>
              <ListItemIcon>
                <CallReceivedIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Use callback demo" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => onNavigate(USE_REDUCER)}>
              <ListItemIcon>
                <ArchiveIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Use reducer demo" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => onNavigate(USE_CUSTOM)}>
              <ListItemIcon>
                <PanoramaWideAngleIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Custom hook" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton disabled={!keycloak} onClick={handleApiClick}>
          <ListItemIcon>
            <ApiIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Api communication" />
          {labsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={apiOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => onNavigate(TODOS)}>
              <ListItemIcon>
                <ListAltIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Todos list CRUD" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => onNavigate(REACT_QUERY)}>
              <ListItemIcon>
                <ListAltIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Todos list CRUD with react query" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <IconButton
        onClick={hideOverlay}
        sx={exitButtonClass}
        size="large"
        aria-label="close-menu"
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
}

export default Overlay;

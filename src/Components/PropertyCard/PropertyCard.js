import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import WcRoundedIcon from '@mui/icons-material/WcRounded';
import BedRoundedIcon from '@mui/icons-material/BedRounded';
import DryCleaningRoundedIcon from '@mui/icons-material/DryCleaningRounded';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import ChairRoundedIcon from '@mui/icons-material/ChairRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import LocalParkingRoundedIcon from '@mui/icons-material/LocalParkingRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ApartmentIcon from '@mui/icons-material/Apartment';
import TableBarRoundedIcon from '@mui/icons-material/TableBarRounded';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import './PropertyCard.css';
import propertiesPics from './imgImports';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PropertyCard(props) {
  const {
    propertyKey,
    id,
    tipo,
    ubicacion,
    fecha,
    area,
    venta,
    arriendo,
    componentes,
    comentarios,
    fotos,
    path,
  } = props;
  const propertyPics = propertiesPics[propertyKey];
  const [expanded, setExpanded] = React.useState(false);
  const [ventaColor, setVentaColor] = React.useState('error');
  const [arriendoColor, setArriendoColor] = React.useState('error');
  const [userMessage, setUserMessage] = React.useState('Mensaje');
  const [propertyId, setPropertyId] = React.useState('');
  React.useEffect(() => {
    setPropertyId(`${tipo}-${id}`);
    if (venta === 'true') {
      setVentaColor('success');
    }
    if (arriendo === 'true') {
      setArriendoColor('success');
    }
    switch (tipo) {
      case 'Apartamento':
        setUserMessage(
          `Hola, quisiera mas información acerca de el apartamento, ubicado en ${ubicacion}`
        );
        break;
      case 'Casa':
        setUserMessage(
          `Hola, quisiera mas información acerca de la casa, ubicada en ${ubicacion}`
        );
        break;
      case 'Local':
        setUserMessage(
          `Hola, quisiera mas información acerca de el local, ubicado en ${ubicacion}`
        );
        break;

      default:
        break;
    }
  }, [tipo, id, venta, arriendo, ubicacion]);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='propertyCard' sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: '#4d18c7', fontSize: '15px' }}
            aria-label='recipe'
          >
            MG
          </Avatar>
        }
        title={`${tipo} - ${ubicacion} ${area}m2`}
        subheader={fecha}
        action={
          <IconButton aria-label='share'>
            <a
              className='whatsApp-Icon'
              target='_blank'
              rel='noopener noreferrer'
              href={`https://api.whatsapp.com/send?phone=573223066351&text=${userMessage}`}
            >
              <WhatsAppIcon />
            </a>
          </IconButton>
        }
      />

      <div id={propertyId} className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-indicators'>
          {fotos.map((foto, index) => (
            <button
              key={index}
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className='carousel-inner'>
          {propertyPics.map((foto, index) => (
            <div
              key={index}
              className={index === 0 ? 'carousel-item active' : 'carousel-item'}
            >
              <img src={foto} className='d-block w-100' alt={path} />
            </div>
          ))}
        </div>

        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target={'#' + propertyId}
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target={'#' + propertyId}
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>

      <div className='chips-container'>
        <Chip className='chip' label='Venta' color={ventaColor} />
        <Chip className='chip' label='Arriendo' color={arriendoColor} />
      </div>
      <CardContent>
        <Typography
          className='commentaries'
          variant='body2'
          color='text.secondary'
        >
          {comentarios}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent className='propertyCard-details'>
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
            }}
          >
            {componentes.map((componente, index) => {
              const independentComponent = componente.split(' ')[1];
              return (
                <div key={index}>
                  <ListItem>
                    <ListItemAvatar>
                      {independentComponent === 'Pisos' ? (
                        <ApartmentIcon />
                      ) : null}
                      {independentComponent === 'Alcoba(s)' ? (
                        <BedRoundedIcon />
                      ) : null}
                      {independentComponent === 'Baño(s)' ? (
                        <WcRoundedIcon />
                      ) : null}
                      {independentComponent === 'Sala' ? (
                        <ChairRoundedIcon />
                      ) : null}
                      {independentComponent === 'Comedor' ? (
                        <TableBarRoundedIcon />
                      ) : null}
                      {independentComponent === 'Sala-Comedor' ? (
                        <div>
                          <ChairRoundedIcon />
                          <TableBarRoundedIcon />
                        </div>
                      ) : null}
                      {independentComponent === 'Zona' ? (
                        <DryCleaningRoundedIcon />
                      ) : null}
                      {independentComponent === 'Cocina(s)' ? (
                        <KitchenRoundedIcon />
                      ) : null}
                      {independentComponent === 'Garaje' ? (
                        <LocalParkingRoundedIcon />
                      ) : null}
                      {independentComponent === 'Terraza' ? (
                        <BeachAccessIcon />
                      ) : null}
                      {independentComponent === 'Estudio' ? (
                        <ComputerRoundedIcon />
                      ) : null}
                    </ListItemAvatar>
                    <ListItemText primary={componente} />
                  </ListItem>
                  <Divider variant='inset' component='li' />
                </div>
              );
            })}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}

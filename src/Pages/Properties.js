import PropertyCard from '../Components/PropertyCard/PropertyCard';
import './Properties.css';
import propertiesData from '../propertiesdata.json';
import { useEffect, useState } from 'react';

let userProperties = propertiesData.properties;
let userPropertiesFiltered = [];
export default function Properties(props) {
  const [propertiesToShow, setPropertiesToShow] = useState(userProperties);
  const { filter } = props;
  useEffect(() => {
    userPropertiesFiltered = [];
    switch (filter) {
      case 'Apartamentos':
        userProperties.forEach((property) => {
          if (property.tipo === 'Apartamento') {
            userPropertiesFiltered.push(property);
          }
          setPropertiesToShow(userPropertiesFiltered);
        });
        break;
      case 'Casas':
        userProperties.forEach((property) => {
          if (property.tipo === 'Casa') {
            userPropertiesFiltered.push(property);
          }
          setPropertiesToShow(userPropertiesFiltered);
        });
        break;
      case 'Locales':
        userProperties.forEach((property) => {
          if (property.tipo === 'Local') {
            userPropertiesFiltered.push(property);
          }
          setPropertiesToShow(userPropertiesFiltered);
        });
        break;
      case 'Todos':
        setPropertiesToShow(userProperties);
        break;
      default:
        break;
    }
  }, [filter]);

  return (
    <>
      <div className='properties-container'>
        {propertiesToShow.map((property) => (
          <PropertyCard
            key={property.key}
            propertyKey={property.key}
            id={property.key}
            tipo={property.tipo}
            ubicacion={property.ubicacion}
            fecha={property.fecha}
            venta={property.venta}
            arriendo={property.arriendo}
            area={property.area}
            componentes={property.componentes}
            comentarios={property.comentarios}
            fotos={property.fotos}
            path={property.path}
          />
        ))}
      </div>
    </>
  );
}

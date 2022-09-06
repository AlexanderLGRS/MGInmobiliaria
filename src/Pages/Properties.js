import PropertyCard from '../Components/PropertyCard/PropertyCard';
import './Properties.css';
import propertiesData from '../propertiesdata.json';
export default function Properties(props) {
  return (
    <>
      <div className='properties-container'>
        {propertiesData.properties.map((property) => (
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

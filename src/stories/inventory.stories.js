import { storiesOf } from '@storybook/react';
import Inventory from './Inventory'; // Asegúrate de ajustar la ruta a tu componente

// Define la historia con storiesOf o add, dependiendo de la versión
storiesOf('Inventory', module)
  .add('Default', () => (
    <Inventory />
  ));

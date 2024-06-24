import HexagonGrid from './components/HexagonGrid';

const hexagons = [
  { label: 'Hexagon 1' },
  { label: 'Hexagon 2' },
  { label: 'Hexagon 3' },
  { label: 'Hexagon 4' },
  { label: 'Hexagon 5' },
  { label: 'Hexagon 6' },
  { label: 'Hexagon 7' },
];

export default function Home() {
  return (
    <div>
      <HexagonGrid hexagons={hexagons} />
    </div>
  );
}

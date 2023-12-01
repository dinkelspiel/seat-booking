import { h } from "preact";
import Seat, { SeatSize } from "./seat";

interface ITableProps {
  occupied: string[];
  labels: object;

  canOverride: boolean;

  leftSeatId: string;
  rightSeatId: string;
  selectedId: string;
  angle: number;  onClick: (id: string) => void;
}
const Table = ({ occupied, leftSeatId, rightSeatId, selectedId, canOverride, labels, angle, onClick }: ITableProps) => {
  return (
    <g>
      <Seat
        occupied={occupied.indexOf(rightSeatId) >= 0}
        label={labels[rightSeatId]}
        canOverride={canOverride}
        selected={rightSeatId === selectedId}
        id={rightSeatId}
        angle={angle}
        xOffset={SeatSize}
        onClick={onClick}
      />
      <Seat
        occupied={occupied.indexOf(leftSeatId) >= 0}
        label={labels[leftSeatId]}
        canOverride={canOverride}
        selected={leftSeatId === selectedId}
        id={leftSeatId}
        angle={angle}
        xOffset={0}
        onClick={onClick}
      />
    </g>
  );
};
export default Table;
